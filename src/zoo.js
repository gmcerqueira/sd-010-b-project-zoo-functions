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
  const animalFind = data.animals.find((searchAnimal) => searchAnimal.name === animal).residents;
  return animalFind.every((searchAge) => searchAge.age >= age);
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
  return id;
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return id + firstName + lastName + managers + responsibleFor;
  // seu código aqui
}

function animalCount(species) {
  return species;
  // seu código aqui
}

function entryCalculator(entrants) {
  return entrants;
  // seu código aqui
}

function animalMap(options) {
  return options;
  // seu código aqui
}

function schedule(dayName) {
  return dayName;
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  return id;
  // seu código aqui
}

function increasePrices(percentage) {
  return percentage;
  // seu código aqui
}

function employeeCoverage(idOrName) {
  return idOrName;
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
