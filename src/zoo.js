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
  // seu código aqui
  return ids.map((param) => data.animals.find((animal) => param === animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = data.animals.find(({
    name,
  }) => name === animal);
  return findAnimal.residents.every((elemento) => elemento.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find((param) =>
    param.firstName === employeeName || param.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((param) => param.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const novoFunc = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(novoFunc);
}

function animalCount(species) {
  // seu código aqui
  const objeto = {};
  data.animals.forEach(({
    name,
    residents,
  }) => {
    objeto[name] = residents.length;
  });
  if (!species) return objeto;
  return objeto[species];
}

function entryCalculator(entrants) {
  // seu código aqui
  return entrants;
}

function animalMap(options) {
  // seu código aqui
  return options;
}

function schedule(dayName) {
  // seu código aqui
  return dayName;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return id;
}

function increasePrices(percentage) {
  // seu código aqui
  return percentage;
}

function employeeCoverage(idOrName) {
  // seu código aqui;
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
