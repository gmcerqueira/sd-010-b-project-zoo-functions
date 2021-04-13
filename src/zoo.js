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

function animalsByIds(ids) {
  let animalsId = [];
  ids.forEach((idF) => {
    if (ids.length > 0) {
    animalsId.push(animals.find((curr) => curr.id === idF));
    };
  return animalsId;
}

function employeeByName(employeeName) {
  return 1;
}

function createEmployee(personalInfo, associatedWith) {
  return 1;
}

function isManager(id) {
  return 1;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return 1;
}

function animalCount(species) {
  return 1;
}

function entryCalculator(entrants) {
  return 1;
}

function animalMap(options) {
  return 1;
}

function schedule(dayName) {
  return 1;
}

function oldestFromFirstSpecies(id) {
  return 1;
}

function increasePrices(percentage) {
  return 1;
}

function employeeCoverage(idOrName) {
  return 1;
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
