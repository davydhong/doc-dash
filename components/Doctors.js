import { SideNav, SideNavItem, Button } from 'react-materialize';
// import { useAppointment } from '../pages/index';
// import { useDoctor } from '../pages/index';

export default function Doctors({ doctors, setSelected }) {
  return (
    <div>
      <SideNav>
        <h2>notable</h2>
        <h2>Physicians</h2>
        {doctors.map((doctor, idx) => (
          <SideNavItem key={idx} onClick={() => setSelected(doctor.id)}>{`${
            doctor.last
          }, ${doctor.first} `}</SideNavItem>
        ))}
      </SideNav>
    </div>
  );
}
