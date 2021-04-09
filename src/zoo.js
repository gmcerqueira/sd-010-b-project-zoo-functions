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
  const resul = [];
  for (let i = 0; i < ids.length; i += 1) {
    resul.push(...data.animals.filter((animalId) => animalId.id === ids[i]));
  }
  return resul;
}

function animalsOlderThan(animal, age) {
  const mapAnimal = data.animals.find((pupet) => pupet.name === animal);
  return mapAnimal.residents.every((value) => value.age >= age);
}

function employeeByName(employeeName) {
  const filter = data.employees.filter((person) =>
    person.firstName === employeeName || person.lastName === employeeName);
  return employeeName === undefined ? {} : filter.shift();
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((el) => el.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const dataPush = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(dataPush);
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
  createEmployee,
};
