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
  const animalsArray = [];
  ids.forEach((id) => {
    animalsArray.push(data.animals.find((animal) => animal.id === id));
  });
  return animalsArray;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const targetAnimal = data.animals.find((animalArray) => animalArray.name === animal);
  return targetAnimal.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employeeData = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return employeeData === undefined ? {} : employeeData;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith
  };
}

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

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
  createEmployee,
};
