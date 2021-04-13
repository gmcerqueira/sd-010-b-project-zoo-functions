/* eslint-disable no-unused-vars */
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

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  /* se a entrada for vazio, retornar array vazio;
  recuperar o objeto id
  retornar um array com as especies do id
  se receber mais de um id, retornar mais de uma especie */
  if (!ids) return [];
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // a partir do nome de uma espécie, verifica idade mínima
  // retornar booleano
  // verificar se TODOS tem idade mínima
  const animalKind = animals.filter((element) => element.name === animal);
  let checkAge = '';
  animalKind.forEach((element) => {
    checkAge = element.residents.every((obj) => obj.age > age);
  });
  return checkAge;
}

function employeeByName(employeeName) {
  // Sem parâmetros, retorna um objeto vazio
  // primeiro nome do funcionário retorna o objeto do funcionário
  // último nome do funcionário retorna o objeto do funcionário
  if (!employeeName) return {};
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

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
