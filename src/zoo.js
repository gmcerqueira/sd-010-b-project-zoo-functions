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
  // seu código aqui
  if (ids.length === undefined) return [];
  return animals.filter((animal) => ids.includes(animal.id));

  // include esta verificando se animal.id
  // existe no no array passado por ids
}

function animalsOlderThan(animal, age) {
  const anima = animals.find((tipo) => tipo.name === animal);
  return anima.residents.every((idades) => idades.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const a = employees.find((pessoa) =>
    pessoa.firstName === employeeName || pessoa.lastName === employeeName);
  return a;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
  // spread para juntar od dois array
}

function isManager(id) {
  const existeId = data.employees.some((gerente) => gerente.managers.includes(id));
  return existeId;
  // seu código aqui, Some verifica se existe alguem array true
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
