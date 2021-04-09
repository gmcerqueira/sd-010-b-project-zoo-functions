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
  const { animals } = data;
  const [id1, id2] = ids;
  return animals.filter((value) => value.id === id1 || value.id === id2);
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const animalName = animals.find((value) => value.name === animal);
  return animalName.residents.every((value) => value.age >= age);
}

function employeeByName(employeeName) {
  const { employees } = data;
  const searchByName = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);

  const conditionToSearch = employeeName === undefined ? {} : searchByName;
  return conditionToSearch;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function isManager(id) {
  const { employees } = data;
  return employees.some(({ managers }) => managers.find((value) => value === id));
}

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
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
