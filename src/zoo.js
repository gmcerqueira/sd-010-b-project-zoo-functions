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

const { animals, employees, prices, hours } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animal) => (ids.includes(animal.id)));
}

function animalsOlderThan(type, age) {
  // seu código aqui
  return animals.find((animal) => (animal.name === type)).residents
    .every((resident) => (resident.age >= age));
}

function employeeByName(employeeName) {
  // seu código aqui
  return employees.find(({ firstName, lastName }) => (
    firstName === employeeName || lastName === employeeName
  )) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => (employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return animals.find((animal) => (animal.name === species)).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) return 0;
  const entries = Object.keys(entrants);
  return entries.reduce((acc, cur) => acc + (entrants[cur] * prices[cur]), 0);
}

// const getLocation = (location) => {
//   if (!location) {
//     return animals.reduce((acc, curr) => {
//       acc[curr.location] = curr.residents;
//       return acc;
//     }, {});
//   }
// };

// function animalMap(options) {
// }
// console.log(animalMap());

function schedule(dayName) {
  const days = Object.entries(hours).reduce((acc, [key, value]) => {
    const [am, pm] = Object.values(value);
    acc[key] = key === 'Monday' ? 'CLOSED' : `Open from ${am}am until ${pm % 12}pm`; // Usando o % 12 eu formato o tipo de saida da hora.
    return acc;
  }, {});

  if (dayName) {
    const hour = days[dayName];
    return { [dayName]: hour };
  }
  return days;
}
console.log(schedule());

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
