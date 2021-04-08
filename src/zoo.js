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

// function animalsByIds(ids) {
//   // seu código aqui
// }
const animais = data.animals;
const animalsByIds = (...ids) => {
  let resultado;
  if (!ids) {
    resultado = ids;
  } else {
    resultado = animais.filter((animal) => ids.includes(animal.id));
  }
  return resultado;
};

const animalsOlderThan = (animal, age) => {
  // busca na lista o animal passado no parametro
  const buscaAnimal = animais.find((ani) => ani.name === animal);
  const { residents } = buscaAnimal;
  return residents.every((criature) => criature.age > age);
};

const colaboradores = data.employees;
const employeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  return colaboradores.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
};

const createEmployee = (personalInfo, associatedWith) => {
  return { ...personalInfo, ...associatedWith };
};
// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

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
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
