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
const data = require('./data');

function animalsByIds(...id) {
  return animals.filter((animal) => (([id].includes(undefined)) ? [] : animal.id === id));
}
function animalsOlderThan(animal, age) {
  // seu código aqui
  const species = data.animals.find((name) => name.name === animal);

  return species.residents.every((item) => item.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  // aprendi esse 'if'no video
  // https://www.youtube.com/watch?v=VYk0TXoXWbo
  if ([employeeName].includes(undefined)) { return {}; }

  const filterName = data.employees;

  return filterName.find((name) => (
    name.firstName === employeeName || name.lastName === employeeName
  ));
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
//   entryCalculator,
//   schedule,
//   animalCount,
//   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  //   addEmployee,
  //   isManager,
  animalsOlderThan,
//   oldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
};
