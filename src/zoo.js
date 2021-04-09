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

const { animals } = data;

function animalsByIds(...ids) {
  if (typeof ids === 'undefined') {
    return [];
  }
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return animals.find((especie) => especie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

const { employees } = data;

function employeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  return employees.find((employee) => {
    if (employee.firstName === employeeName
    || employee.lastName === employeeName) return employee;
    return null;
  });
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  const meuArray = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return meuArray;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.find((emp) => emp === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// function animalCount(species) {
//   // seu código aqui
// }

// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

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
  // entryCalculator,
  // schedule,
  // animalCount,
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
