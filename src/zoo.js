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

const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(animal => (ids.includes(animal.id)));
}

function animalsOlderThan(type, age) {
  // seu código aqui
  return animals.find(animal => (animal.name === type)).residents
    .every(resident => (resident.age >= age));
}

function employeeByName(employeeName) {
  // seu código aqui
  return employees.find(({ firstName, lastName }) => (
    firstName === employeeName || lastName === employeeName
  )) || {};
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

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
  //entryCalculator,
  //schedule,
  //animalCount,
  //animalMap,
  animalsByIds,
  employeeByName,
  //employeeCoverage,
  //addEmployee,
  //isManager,
  animalsOlderThan,
  //oldestFromFirstSpecies,
  //increasePrices,
  //createEmployee,
};
