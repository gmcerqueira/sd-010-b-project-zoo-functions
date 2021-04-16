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
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((a) => (a.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, b) => {
      acc[b.name] = b.residents.length;
      return acc;
    }, {});
  }
  return animals.find((a) => (a.name === species)).residents.length;
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
  Object.entries(prices).forEach(([a, b]) => {
    const updateValue = b * (1 + (percentage / 100));
    prices[a] = Math.round(updateValue * 100) / 100;
  });
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
