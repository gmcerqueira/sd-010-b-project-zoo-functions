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

function animalsByIds(...ids) {
  return ids.map((currentId) => data.animals.find((animal) => animal.id === currentId));
}

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

// solução do Henrique Clementino
function employeeCoverage(param) {
  const objEmployees = {};
  data.employees.forEach(({ firstName, lastName, responsibleFor }) => {
    objEmployees[`${firstName} ${lastName}`] = animalsByIds(...responsibleFor).map(
      ({ name }) => name,
    );
  });
  if (!param) return objEmployees;
  const getEmployee = data.employees.find(
    ({ id, firstName, lastName }) => id === param || firstName || param || lastName === param,
  );
  const { firstName, lastName } = getEmployee;
  const fullName = `${firstName} ${lastName}`;
  return { [fullName]: objEmployees[fullName] };
}
console.log(employeeCoverage('Nigel'));

module.exports = {
  animalsByIds,
  schedule,
  employeeCoverage,
};
