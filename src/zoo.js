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
  if (ids.length) {
    const { animals } = data;
    const arr = animals.filter((animal, index) => animal.id === ids[index]);
    return arr;
  }
  return [];
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const especie = animals.filter((e) => e.name === animal);
  const bool = especie[0].residents.every((e) => e.age >= age);
  return bool;
}

function employeeByName(employeeName) {
  if (employeeName) {
    const { employees } = data;
    const employee = employees.filter((e) => {
      const bool = (e.firstName === employeeName) || (e.lastName === employeeName);
      return bool;
    });
    return employee[0];
  }
  return {};
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
