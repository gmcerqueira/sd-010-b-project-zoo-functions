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

console.log(data.animals);

function animalsByIds(ids) {
  return ids;
}

// function animalsOlderThan(animal, age) {

// }

// function employeeByName(employeeName) {

// }

// function createEmployee(personalInfo, associatedWith) {

// }

// function isManager(id) {

// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {

// }

// function animalCount(species) {

// }

// function entryCalculator(entrants) {

// }

// function animalMap(options) {

// }

// function schedule(dayName) {

// }

// function oldestFromFirstSpecies(id) {

// }

// function increasePrices(percentage) {

// }

// function employeeCoverage(idOrName) {

// }

module.exports = {
//   entryCalculator,
//   schedule,
//   animalCount,
//   animalMap,
  animalsByIds,
//   employeeByName,
//   employeeCoverage,
//   addEmployee,
//   isManager,
//   animalsOlderThan,
//   oldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
};
