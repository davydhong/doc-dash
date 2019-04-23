import { Table } from 'react-materialize';

export default function Appointments({ doctor, appointments }) {
  return (
    <div>
      <h2>{`${doctor.prefix} ${doctor.first} ${doctor.last}`}</h2>
      <email>{`${doctor.email}`}</email>

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
          {appointments.map((appointment, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{appointment.name}</td>
              <td>{appointment.time}</td>
              <td>{appointment.kind}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
