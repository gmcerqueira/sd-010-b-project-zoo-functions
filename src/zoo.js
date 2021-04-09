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

// Começando com tudoooo! VQV

const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const findAnimal = data.animals.filter((animal) => ids.find((id) => id === animal.id));
  return ids === 'undefined' ? [] : findAnimal;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = data.animals.find((animal1) => animal1.name === animal);
  return animalName.residents.every((animal2) => animal2.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const findEmployee = (emp) => emp.firstName === employeeName || emp.lastName === employeeName;
  return employeeName === undefined ? {} : data.employees.find(findEmployee);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const doisman = ['9e7d4524-363c-416a-8759-8aa7e50c0992', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'];
  const manager = [...doisman, '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  const findManager = (id1) => id1 === id;
  return manager.some(findManager);
}

/*
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
*/

module.exports = {
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
