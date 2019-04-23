import { Table } from 'react-materialize';

export default function Appointments(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th data-field="#">#</th>
          <th data-field="name">Name</th>
          <th data-field="time">Time</th>
          <th data-field="kind">Kind</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alvin</td>
          <td>Eclair</td>
          <td>$0.87</td>
        </tr>
        <tr>
          <td>Alan</td>
          <td>Jellybean</td>
          <td>$3.76</td>
        </tr>
        <tr>
          <td>Jonathan</td>
          <td>Lollipop</td>
          <td>$7.00</td>
        </tr>
      </tbody>
    </Table>
  );
}
