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
  return data.animals
    .filter((animal, index) => (ids[index] === animal.id ? animal : false));
}

function animalsOlderThan(animal, age) {
  const animals = data.animals.find((animal2) => (animal === animal2.name ? animal : false));

  return animals.residents.every((animal3) => animal3.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const result = data.employees
    .find((employe) =>
      (employeeName === employe.firstName || employeeName === employe.lastName ? employe : false));

  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo, ...associatedWith,
  };
}
function isManager(id) {
  return data.employees
    .some((employe) => employe.managers.some((manager) => id === manager));
}

/* function isManager(id) {
  return data.employees
    .some((employe, index) => id === employe.managers[index]);
} */

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

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
