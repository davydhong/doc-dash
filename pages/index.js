import { useState, useEffect } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Doctors from '../components/Doctors';
import Appointments from '../components/Appointments';

import $ from 'jquery';
if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}
import 'materialize-css/dist/css/materialize.min.css';

const Index = ({ docsData, apptData }) => {
  const [doctors, setDoctors] = useState(docsData);
  const [selected, setSelected] = useState(1);
  const [appointments, setAppointments] = useAppointments(apptData);

  useEffect(() => {
    (async function getApptData() {
      const data = await fetchAppointments(selected);
      setAppointments(data);
    })();
  }, [selected]);

  return (
    <div className="container row">
      <Head>
        <link href="/static/materialize.min.css" rel="stylesheet" />
      </Head>

      <Doctors {...{ doctors, setSelected }} />
      <Appointments
        {...{ doctor: doctors.find((doctor) => doctor.id === selected), appointments }}
      />
    </div>
  );
};

export function useAppointments(init = []) {
  const [appointments, setAppointments] = useState(init);
  return [appointments, setAppointments];
}

async function fetchDoctors() {
  const resDocs = await fetch(`http://localhost:3000/doctors`);
  const result = await resDocs.json();
  console.log('fetDoctors result');
  console.log(result);
  return result;
}

async function fetchAppointments(docID) {
  const resAppt = await fetch(`http://localhost:3000/doctors/${docID}/appointments`);
  return await resAppt.json();
}

Index.getInitialProps = async function() {
  const resDocs = await fetch('http://localhost:3000/doctors');
  const docsData = await resDocs.json();

  console.log(`doctors data fetched. Count: ${docsData.length}`);
  console.log(docsData);

  const resAppt = await fetch(
    `http://localhost:3000/doctors/${docsData[0].id}/appointments`
  );

  const apptData = await resAppt.json();
  console.log(apptData);
  return { docsData, apptData };
};

export default Index;
