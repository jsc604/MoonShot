import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function CurrencyItems(props) {
  return (
    <tr>
      <td>bitcoin</td>
      <td>BTC</td>
      <td>44,793,749,260</td>
      <td>23561</td>
      <td>-0.87448</td>
      <td>24196</td>
      <td>23520</td>
      <td><FontAwesomeIcon icon={faCaretDown} /></td>
    </tr>
  );
};