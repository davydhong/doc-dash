import { SideNav, SideNavItem, Button } from 'react-materialize';

export default function Doctors({ doctors, setSelected }) {
  return (
    <div className="select-doctors col s4">
      {/* <SideNav trigger={<Button />} options={{ closeOnClick: true }}> */}
      {/* <SideNav trigger={<Button />} fixed={true}> */}
      <div>
        <h3>notable</h3>
        <h3>Physicians</h3>
        {doctors.map((doctor, idx) => (
          <SideNavItem key={idx} onClick={() => setSelected(doctor.id)}>{`${
            doctor.last
          }, ${doctor.first} `}</SideNavItem>
        ))}
      </div>
    </div>
  );
}
