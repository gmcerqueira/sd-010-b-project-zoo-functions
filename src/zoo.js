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
  const animalsId = [];

  if (ids !== undefined) {
    ids.forEach((idF) => {
      animalsId.push(data.animals.find((curr) => curr.id === idF));
    });
  }
  return animalsId;
}

console.log(animalsByIds());

function animalsOlderThan(animal, age) {
  return animal + age;
}

function employeeByName(employeeName) {
  return employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  return personalInfo + associatedWith;
}

function isManager(id) {
  return id;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return id + firstName + lastName + managers + responsibleFor;
}

function animalCount(species) {
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
  // seu código aqui
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
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
