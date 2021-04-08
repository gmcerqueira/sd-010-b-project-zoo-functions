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

const { animals, employees } = data;

function animalsByIds(...ids) {
  // seu código aqui
  const animalsById = animals.filter((animal, index) => animal.id === ids[index]);
  return animalsById;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalsList = animals.find((creature) => creature.name === animal).residents;
  return animalsList.every((creature) => creature.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const verifyEmployee = (emp) => (emp.firstName === employeeName || emp.lastName === employeeName);
  return employeeName ? employees.find((employee) => verifyEmployee(employee)) : {};
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

function isManager(id) {
  // seu código aqui
  const verifyEmployee = employees.find((emp) => emp.id === id).id;
  return employees.some((emp) => emp.managers.includes(verifyEmployee));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employeeToAdd = { id, firstName, lastName, managers, responsibleFor };
  employees.push(employeeToAdd);
}

// function animalCount(species) {
//   // seu código aqui
// }

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

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = {
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
