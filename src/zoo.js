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
  return animals.filter((animal) => ids.some((verificaId) => animal.id === verificaId));
}
// console.log(animalsByIds())
function animalsOlderThan(animal, age) {
  const retorno = animals.find((animalD) => animalD.name === animal);
  return retorno.residents.every((ageD) => ageD.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const name = employeeName;
  return employees.find((nameEmpl) => (name === nameEmpl.firstName || name === nameEmpl.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((idManager) => idManager.managers.includes(id));
}
/*

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
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
