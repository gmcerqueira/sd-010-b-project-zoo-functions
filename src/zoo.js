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

// const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return data.animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find((ani) => ani.name === animal).residents.every((ani) => ani.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const { employees } = data;
  return employees.find(
    (employer) => employer.firstName === employeeName || employer.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employerResult = { ...personalInfo, ...associatedWith };
  return employerResult;
}

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  return employees.some(({ managers }) => managers.some((employer) => employer === id));
}
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const { employees } = data;
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return data.animals.reduce((accumulator, current) => {
      const { name } = current;
      return { ...accumulator, [name]: current.residents.length };
    }, {});
  }
  const findSpecies = data.animals.find((ani) => ani.name === species);
  return findSpecies.residents.length;
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  const { prices } = data;
  const { Adult, Senior, Child } = prices;
  const { Adult: A = 0, Child: C = 0, Senior: S = 0 } = entrants;
  return Adult * A + Child * C + Senior * S;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
  const { hours } = data;
  const hoursWeek = Object.keys(hours);
  const result = {};
  hoursWeek.map((hour) => {
    if (hour === 'Monday') {
      result[hour] = 'CLOSED';
    } else {
      result[hour] = `Open from ${hours[hour].open}am until ${hours[hour].close - 12}pm`;
    }
  });
  if (dayName) {
    return { [dayName]: result[dayName], };
  }
  return result;
}
// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
