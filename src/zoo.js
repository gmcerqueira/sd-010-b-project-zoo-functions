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

const animais = data.animals;

const empregados = data.employees;

function animalsByIds(...ids) {
  if (!ids) return [];
  return animais.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const selecionado = animais.find((el) => el.name === animal);
  const { residents } = selecionado;
  return residents.every((el) => el.age > age);
}

function employeeByName(employeeName) {
  if (!employeeByName) return {};
  const encontrado = empregados.find((empregado) =>
    ((empregado.firstName === employeeName) || (empregado.lastName === employeeName)));
  if (!encontrado) return {};
  return encontrado;
}
function createEmployee(personalInfo, associatedWith) {
  const empregado = { ...personalInfo, ...associatedWith };
  return empregado;
}

function isManager(id) {
  return empregados.some((el) => el.managers.includes(id));
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function animalCount(species) {
//   // seu código aqui
// }

// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
//   entryCalculator,
//   schedule,
//   animalCount,
//   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  //   addEmployee,
  isManager,
  animalsOlderThan,
  //   oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
