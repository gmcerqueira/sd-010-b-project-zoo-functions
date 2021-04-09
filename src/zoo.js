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
// 01
function animalsByIds(ids) {
  // seu código aqui
  const searchId = [];
  ids.forEach((id) => {
    searchId.push(data.animals.find((animalId) => animalId === id));
  });
  console.log(searchId);
  return searchId;
}
// 02
function animalsOlderThan(animal, age) {
  // seu código aqui
  const minAge = data.animals.filter((animalAge) => animalAge.data.name === animal);
  console.log(minAge);
  minAge.data.residents.every((animalResident) => animalResident.data.age >= age);
}
// 03
function employeeByName(employeeName) {
  // seu código aqui
  const nameFirstOrLast = data.employees.filter((firstOrLast) =>
    firstOrLast.data.firstName === employeeName || firstOrLast.data.lastName === employeeName);
  console.log(nameFirstOrLast);
  return nameFirstOrLast === undefined ? {} : nameFirstOrLast;
}
// 4
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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
