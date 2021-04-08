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

function animalsByIds(...ids) {
  // seu código aqui
  return ids.map((param) => data.animals.find(({ id }) => id === param));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = data.animals.find(({ name }) => (name === animal));
  return findAnimal.residents.every((elemento => elemento.age >= age));
}

function employeeByName(employeeName) {
  // seu código aqui
  return employeeName;
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

function isManager(id) {
  // seu código aqui
  return id;
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

function animalCount(species) {
  // seu código aqui
  return species;
}

function entryCalculator(entrants) {
  // seu código aqui
  return entrants;
}

function animalMap(options) {
  // seu código aqui
  return options;
}

function schedule(dayName) {
  // seu código aqui
  return dayName;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return id;
}

function increasePrices(percentage) {
  // seu código aqui
  return percentage;
}

function employeeCoverage(idOrName) {
  // seu código aqui;
  return idOrName;
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  // createEmployee,
};
