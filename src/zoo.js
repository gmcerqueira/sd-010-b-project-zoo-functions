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
  // seu código aqui
  let animalsById = animals.filter((animal, index) => animal.id === ids[index]);
  return animalsById;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  let animalsList = animals.find((creature) => creature.name === animal).residents;
  return animalsList.every((creature) => creature.age >= age);
}

// function employeeByName(employeeName) {
//   // seu código aqui
// }

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

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

// // console.log(animalsOlderThan('otters', 7));

// module.exports = {
//   entryCalculator,
//   schedule,
//   animalCount,
//   animalMap,
//   animalsByIds,
//   employeeByName,
//   employeeCoverage,
//   addEmployee,
//   isManager,
//   animalsOlderThan,
//   oldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
// };
