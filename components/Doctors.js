import { SideNav, SideNavItem, Button } from 'react-materialize';
import { log } from 'util';

import { useDoctor } from '../pages/index';

export default function Doctors(props) {
  const doctors = Object.values(props.doctors);
  const { handleChangeDoctor } = useDoctor();
  return (
    <div>
      <SideNav>
        <h2>Physicians</h2>
        {doctors.map((doctor, idx) => (
          <SideNavItem key={idx} onClick={() => handleChangeDoctor(doctor.id)}>{`${
            doctor.last
          }, ${doctor.first} `}</SideNavItem>
        ))}
      </SideNav>
    </div>
  );
}
