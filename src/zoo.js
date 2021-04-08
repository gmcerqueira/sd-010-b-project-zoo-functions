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
console.log(employeeByName());
/*
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
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
