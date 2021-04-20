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
  return animals.filter((animal) => ids.includes(animal.id));
}
console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan() {
  // seu código aqui
}

function employeeByName() {
  // seu código aqui
}

function createEmployee() {
  // seu código aqui
}

function isManager() {
  // seu código aqui
}

function addEmployee() {
  // seu código aqui
}

function animalCount() {
  // seu código aqui
}

function entryCalculator() {
  // seu código aqui
}

function animalMap() {
  // seu código aqui
}

function schedule() {
  // seu código aqui
}

function oldestFromFirstSpecies() {
  // seu código aqui
}

function increasePrices() {
  // seu código aqui
}

function employeeCoverage() {
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
