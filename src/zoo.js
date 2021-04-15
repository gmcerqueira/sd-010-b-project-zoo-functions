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

const { animals, employees } = data;

function animalsByIds(...ids) {
  return animals.filter((idAnimals, aux) => idAnimals.id === ids[aux]);
}

function animalsOlderThan(animal, age) {
  const species = animals.find((specie) => specie.name === animal);
  return species.residents.every((ageMin) => ageMin.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const n = employees.filter((e) => e.firstName === employeeName || e.lastName === employeeName);
  return n;
}
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return id;
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   return id, firstName, lastName, managers, responsibleFor;
// }

function animalCount(species) {
  return species;
}

function entryCalculator(entrants) {
  if (entrants === undefined || entrants === '') {
    return 0;  
  }
  return entrants;
}

function animalMap(options) {
  return options;
}

function schedule(dayName) {
  return dayName;
}

function oldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  return percentage;
}

function employeeCoverage(idOrName) {
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
  createEmployee,
};
