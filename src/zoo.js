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

const { animals } = data;
function animalsByIds(...ids) {
  const newArray = [];
  ids.forEach((element) => {
    newArray.push(animals.find((animal) => element === animal.id));
  });
  return newArray;
}
// console.log(animalsByIds(animals));

function animalsOlderThan(animal, age) {
  return animals.find((element) => element.name === animal)
    .residents.every((elementAge) => elementAge.age >= age);
}

const { employees } = data;
function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
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
