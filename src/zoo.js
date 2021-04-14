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

const { animals } = require('./data');

function animalsByIds(...ids) {
  return animals.filter((beast) => ids.includes(beast.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  console.log(animal, age);
}

function employeeByName(employeeName) {
  // seu código aqui
  console.log(employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  console.log(personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  console.log(id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  console.log(id, firstName, lastName, managers, responsibleFor);
}

function animalCount(species) {
  // seu código aqui
  console.log(species);
}

function entryCalculator(entrants) {
  // seu código aqui
  console.log(entrants);
}

function animalMap(options) {
  // seu código aqui
  console.log(options);
}

function schedule(dayName) {
  // seu código aqui
  console.log(dayName);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  console.log(id);
}

function increasePrices(percentage) {
  // seu código aqui
  console.log(percentage);
}

function employeeCoverage(idOrName) {
  // seu código aqui
  console.log(idOrName);
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
