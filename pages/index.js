import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Doctors from '../components/Doctors';
import Appointments from '../components/Appointments';

const Index = (props) => {
  return (
    <div>
      <Doctors doctors={props} />
      <Appointments />
    </div>
  );
};

export function useDoctor() {
  const [doctor, setDoctor] = useState(1);

  const handleChangeDoctor = function(input) {
    console.log(input);
    setDoctor(input);
  };

  return {
    doctor,
    handleChangeDoctor
  };
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/doctors');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(data[0]);

  return data;
};

export default Index;
