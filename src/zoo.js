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

const { animals, employees, prices } = require('./data');

function animalsByIds(...ids) {
  return animals.filter((beast) => ids.includes(beast.id));
}

function animalsOlderThan(animal, age) {
  return animals.find((animale) => (animale.name === animal)).residents
    .every((everyOne) => (everyOne.age >= age));
}

function employeeByName(employeeName) {
  return employees.find(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName)) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
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
  if (!entrants) return 0;
  return Object.keys(entrants).reduce((x, y) => x + (entrants[y] * prices[y]), 0);
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
