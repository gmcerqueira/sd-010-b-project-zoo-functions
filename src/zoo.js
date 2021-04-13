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
  const animalsId = [];
  ids.forEach((idF) => {
    if (ids.length > 0) {
      animalsId.push(data.animals.find((curr) => curr.id === idF));
    }
  });
  return animalsId;
}

function animalsOlderThan(animal, age) {
  console.log('teste');
}

function employeeByName(employeeName) {
  console.log('teste');
}

function createEmployee(personalInfo, associatedWith) {
  console.log('teste');
}

function isManager(id) {
  console.log('teste');
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  console.log('teste');
}

function animalCount(species) {
  console.log('teste');
}

function entryCalculator(entrants) {
  console.log('teste');
}

function animalMap(options) {
  console.log('teste');
}

function schedule(dayName) {
  console.log('teste');
}

function oldestFromFirstSpecies(id) {
  console.log('teste');
}

function increasePrices(percentage) {
  console.log('teste');
}

function employeeCoverage(idOrName) {
  console.log('teste');
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
