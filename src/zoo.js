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

const precos = data.prices;

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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  empregados.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const contaAnimais = {};
  animais.forEach(({ name, residents }) => {
    contaAnimais[name] = residents.length;
  });
  if (!species) return contaAnimais;
  return contaAnimais[species];
}

function entryCalculator(entrants = 0) {
  let valor = 0;
  if (entrants.Adult) { valor += entrants.Adult * precos.Adult; }
  if (entrants.Senior) { valor += entrants.Senior * precos.Senior; }
  if (entrants.Child) { valor += entrants.Child * precos.Child; }

  return valor;
}

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
  entryCalculator,
  //   schedule,
  animalCount,
  //   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  //   oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
