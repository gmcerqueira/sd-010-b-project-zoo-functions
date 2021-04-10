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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) { // ...ids
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  return animals.filter((idAnimal) => (ids.includes(idAnimal.id)));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const specieAnimal = animals.find((animalName) => animalName.name === animal);

  return specieAnimal.residents.every((animalAge) => animalAge.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  return employeeByName;
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
//   return personalInfo + associatedWith;
// }

// function isManager(id) {
//   // seu código aqui
//   return id;
// }

// // function addEmployee(id, firstName, lastName, managers, responsibleFor) {
// //   // seu código aqui
// // }

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
  // createEmployee,
};
