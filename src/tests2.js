/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function schedule(dayName) {
  const keysHours = Object.keys(data.hours);
  const objSchedule = {};
  keysHours.forEach((day) => {
    const { open, close } = data.hours[day];
    if (day === 'Monday') {
      objSchedule[day] = 'CLOSED';
    } else {
      objSchedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (dayName) return { [dayName]: objSchedule[dayName] };
  return objSchedule;
}
console.log(schedule('Tuesday'));

module.exports = {
  schedule,
};
