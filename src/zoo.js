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
// const { TestScheduler } = require("@jest/core");
const { animals, employees, prices } = require('./data');
// const data = require("./data");

function animalsByIds(...ids) {
  const spreadedArray = ids;
  const result = [];
  spreadedArray.forEach((id) => {
    result.push(animals.find((animal) => animal.id === id));
  });
  return result;
}

function animalsOlderThan(animal, age) {
  const arrayAnimal = animals.find((item) => item.name === animal).residents;
  return arrayAnimal.every((value) => value.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName !== undefined) {
    return employees.find(
      (employee) =>
        employee.firstName === employeeName
        || employee.lastName === employeeName,
    );
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const mapped = employees.map((employee) => employee.managers);
  const array = [].concat(...mapped);
  return array.some((value) => value === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const animalResidentAmount = {};
  animals.forEach((animal) => { animalResidentAmount[animal.name] = animal.residents.length; });
  return species === undefined ? animalResidentAmount : animalResidentAmount[species];
}

function entryCalculator(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const keys = Object.keys(entrants);
  return keys.reduce((a, b) => a + entrants[b] * prices[b], 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {

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
  entryCalculator,
  // schedule,
  animalCount,
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
