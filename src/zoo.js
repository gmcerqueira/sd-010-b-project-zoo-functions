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
  if (ids.length === 0) {
    return [];
  }
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  let output;
  animals.forEach((element) => {
    if (element.name === animal) {
      output = element.residents.every((values) => values.age >= age);
    }
  });
  return output;
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((par) => par.firstName === employeeName || par.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((worker) => worker.managers.find((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  const allAnimalsAndQuantity = {};
  if (!species) {
    animals.forEach(({ name, residents }) => {
      allAnimalsAndQuantity[name] = residents.length;
    });
    return allAnimalsAndQuantity;
  }
  return animals.find((param) => param.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  let priceSum = 0;
  const paramKeys = Object.keys(entrants);
  paramKeys.forEach((keys) => {
    priceSum += prices[keys] * entrants[keys];
  });
  return priceSum;
}
// Utilizei o conceito de Object.keys para guardar as chaves do objeto de entrada em uma variável e o site é o seguinte:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

/* function animalMap(options) {
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
} */

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  /* oldestFromFirstSpecies,
  increasePrices, */
  createEmployee,
};
