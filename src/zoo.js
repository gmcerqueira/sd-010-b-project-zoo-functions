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
const { employees } = data;

function animalsByIds(...ids) {
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animalName, age) {
  return animals.find((animal) => animal.name === animalName)
    .residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  return employeeName
    ? employees.find((employee) =>
      employee.firstName === employeeName
      || employee.lastName === employeeName)
    : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
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
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  createEmployee,
  isManager,
  addEmployee,
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  // employeeCoverage,
  // oldestFromFirstSpecies,
  // increasePrices,
};
