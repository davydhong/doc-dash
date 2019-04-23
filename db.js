const { LocalStorage } = require('node-localstorage');

const dbPhysicians = new LocalStorage('./data-physicians');
const dbAppointments = new LocalStorage('./data-appointments');

const appointments = JSON.parse(dbAppointments.getItem('appointments') || '[]');

module.exports = {
  physicians: JSON.parse(dbPhysicians.getItem('physicians') || '[]'),
  findApptsByPhysician(physicianID) {
    return appointments.filter(
      (appointment) => appointment.docID === parseInt(physicianID)
    );
  }
};
