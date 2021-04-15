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

const { animals } = require('./data');
const data = require('./data');

const { employees } = data;

function animalsByIds(...ids) {
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const animalSpecies = animal.find((specie) => specie.name === animal);
  return animalSpecies.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeByName === undefined) return {};
  return employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id, firstName, lastName, managers, responsibleFor,
  };
  return employees.push(newEmployee);
}

//function animalCount(species) {
  // seu código aqui
//}

//function entryCalculator(entrants) {
  // seu código aqui
//}

/*function animalMap(options) {
  // seu código aqui
//}

//function schedule(dayName) {
  // seu código aqui
//}

//function oldestFromFirstSpecies(id) {
  // seu código aqui
//}

//function increasePrices(percentage) {
  // seu código aqui
//}

//function employeeCoverage(idOrName) {
  // seu código aqui
}*/

module.exports = {
  //entryCalculator,
  schedule,
  //animalCount,
  //animalMap,
  animalsByIds,
  employeeByName,
  //employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  //oldestFromFirstSpecies,
  //increasePrices,
  createEmployee,
};
