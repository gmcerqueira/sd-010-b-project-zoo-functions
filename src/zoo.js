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
  return data.animals.filter((animal) => ids.find((id) => id === animal.id));
}

function animalsOlderThan(animal, age) {
  const animalFind = data.animals.find((animalSearch) => animalSearch.name === animal).residents;
  return animalFind.every((ageSearch) => ageSearch.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employee) => employee.firstName === employeeName
                              || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const array = data.employees.map((a) => a.managers).join(',').split(',');
  return array.some((a) => a === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return id + firstName + lastName + managers + responsibleFor;
}

function animalCount(species) {
  return species;
}

function entryCalculator(entrants) {
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
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
