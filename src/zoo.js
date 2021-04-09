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
// Desconstrução dos objetos do data para facilitar a criação das funções nos requisitos.
const { animals } = data;

// (...ids) busca espécies de animais por ids, independente de quantos sejam.
// filter fará novo array de acordo com as condições true do some.
function animalsByIds(...ids) {
  return animals.filter((animal) => 
    ids.some((verifyId) => animal.id === verifyId));
}
console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

/* function animalsOlderThan(animal, age) {
  // seu código aqui
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}
*/
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
