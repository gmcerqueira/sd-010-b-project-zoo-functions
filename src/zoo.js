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
  if (!ids) {
    return [];
  }
  return animals.filter((animal) => ids.some((id) => animal.id === id));
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const resultado = animals.find((dataAnimal) => dataAnimal.name === animal);
  return resultado.residents.every((dataAge) => dataAge.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species) {
    const animal = animals.find((element) => element.name === species);
    return animal.residents.length;
  }
  return animals.reduce((acc, cur) => {
    const { name } = cur;
    return {
      ...acc,
      [name]: cur.residents.length,
    };
  }, {});
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants) {
    const guests = Object.keys(entrants);
    return guests.reduce((acc, curr) =>
      acc + (prices[curr] * entrants[curr]), 0);
  }
  return 0;
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
