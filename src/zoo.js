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

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(_animal, _age) {
  // seu código aqui
}

function employeeByName(_employeeName) {
  // seu código aqui
}

function createEmployee(_personalInfo, _associatedWith) {
  // seu código aqui
}

function isManager(_id) {
  // seu código aqui
}

function addEmployee(_id, _firstName, _lastName, _managers, _responsibleFor) {
  // seu código aqui
}

function animalCount(_species) {
  // seu código aqui
}

function entryCalculator(_entrants) {
  // seu código aqui
}

function animalMap(_options) {
  // seu código aqui
}

function schedule(_dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(_id) {
  // seu código aqui
}

function increasePrices(_percentage) {
  // seu código aqui
}

function employeeCoverage(_idOrName) {
  // seu código aqui
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
