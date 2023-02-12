import { formatNumber, trendingDown, trendingUp } from "../../helpers/table_helpers";
import useStockChartData from "../../hooks/useStockChartData";
import useStockInformation from "../../hooks/useStockInformation";
import { useParams } from "react-router-dom";
import useStockInformationSingleCall from "../../hooks/useStockInformationSingleCall";
import { useEffect } from "react";
import axios from "axios";
import PercentChangedHelper from "../../helpers/percentChange";
// import "../../styles/infoPage.scss";
import "../../styles/stockInfoPages.scss";


export default function StockChartDropDown(props) {
  console.log("PROPS", props);

  // useEffect(() => {
  //   axios.get)

  const { onIntervalChange, interval } = props;


  const dataFromStocks = useStockChartData(props.id);
  const stockInfoData = useStockInformationSingleCall(props.id);


  console.log("interval", interval);
  console.log("DATA FROM STOCKS", dataFromStocks);

  if (!dataFromStocks || !stockInfoData) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">
              <button className={interval === '1h' ? "btn btn-outline-light active" : "btn btn-outline-light"}
                onClick={() => onIntervalChange(1)}
              >
                1 day
              </button>
            </th>
            <th scope="col">
              <button className={interval === '1wk' ? "btn btn-outline-light active" : "btn btn-outline-light"}
                onClick={() => onIntervalChange(7)}
              >
                7 day
              </button>
            </th>
            <th scope="col">
              <button className={interval === '1mo' ? "btn btn-outline-light active" : "btn btn-outline-light"}
                onClick={() => onIntervalChange(14)}
              >
                14 day
              </button>
            </th>
            <th scope="col">
              <button className={interval === '3mo' ? "btn btn-outline-light active" : "btn btn-outline-light"}
                onClick={() => onIntervalChange(30)}
              >
                30 day
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={PercentChangedHelper(dataFromStocks?.data[0]?.regularMarketPrice, dataFromStocks?.data[0]?.previousClose) >= 0 ? 'positive' : 'negative'}>
              {PercentChangedHelper(dataFromStocks?.data[0]?.regularMarketPrice, dataFromStocks?.data[0]?.previousClose) >= 0 ? trendingUp : trendingDown} {dataFromStocks?.data[0]?.percentChange} <br />
              %{formatNumber(PercentChangedHelper(dataFromStocks?.data[0]?.regularMarketPrice, dataFromStocks?.data[0]?.previousClose))}
            </td>
            <td className={-2.22 >= 0 ? 'positive' : 'positive'}>
              {1.46 >= 0 ? trendingUp : trendingDown}
              <br />
              %0.89
            </td>
            <td className={-1.32 >= 0 ? 'positive' : 'positive'}>
              {1.46 >= 0 ? trendingUp : trendingDown}
              <br />
              %1.32
            </td>
            <td className={1.46 >= 0 ? 'positive' : 'negative'}>
              {1.46 >= 0 ? trendingUp : trendingDown}
              <br />
              %2.22
            </td>
          </tr>
        </tbody>
      </table>
      <div className="dropdown-details">
        Country: {stockInfoData?.data[0]?.country}
        <br />
        <br />
        Industry: {stockInfoData?.data[0]?.industry}
        <br />
        <br />
        Sector: {stockInfoData?.data[0]?.sector}
        <br />
        <br />
        <a href={`https://${stockInfoData?.data[0]?.website}`} target="_blank" rel="noopener noreferrer" style={{color: "#ffc107"}}>
          <strong>
          {stockInfoData?.data[0]?.website}
          </strong>
        </a>
        <br />
        <br />
      </div>
    </>
  );
}

