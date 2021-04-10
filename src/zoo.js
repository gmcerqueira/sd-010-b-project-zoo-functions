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

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

// function isManager(id) {
//   // seu código aqui
// }
const isManager = (id) => {
  const colab = colaboradores.some((trab) => trab.managers.includes(id));
  return colab;
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const dados = { id, firstName, lastName };
  const response = { managers, responsibleFor };
  const employ = { ...dados, ...response };
  return colaboradores.push(employ);
};

const animalCount = (species) => {
  if (species) {
    return animais.find((ani) => ani.name === species).residents.length;
  }
  return animals.reduce((accumulator, current) => {
    accumulator[current.name] = current.residents.length;
    return accumulator;
  }, {});
};

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
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
