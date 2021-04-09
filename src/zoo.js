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
  return data.animals.filter((value, index) => value.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find((value) => value.name === animal)
    .residents.every((idade) => idade.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const pessoa = data.employees.find((value) =>
    (value.firstName === employeeName || value.lastName === employeeName ? value : false));
  return pessoa;
  // return data.employees.reduce((acc, curr) => {
  //   if (curr.firstName === employeeName || curr.lastName === employeeName) {
  //     acc = curr;
  //   }
  //   return acc;
  // }, {});
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
  return data.employees.some((value) => value.managers.some((someValue) =>
    (someValue === id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  return data.animals.reduce((acc, cuur, value) => {
    if (species === value.name) acc = cuur.residents.length;
  }, 0);
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  const valores = [];
  const precos = Object.entries(data.prices);
  precos.forEach((value) => {
    const quantidadeEntrada = entrants[value[0]];
    if (quantidadeEntrada) {
      valores.push(quantidadeEntrada * value[1]);
    }
  });
  return valores.reduce((acc, curr) => acc + curr, 0);
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
