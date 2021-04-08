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

function animalsByIds(...ids) {
  let array = [];
  ids.forEach((parmItem) => animals.filter((element) => {
    if (parmItem === element.id) {
      array.push(element);
    }
  }));
  return array;
}

function animalsOlderThan(animal, age) {
  const array = animals.filter((element) => element.name == animal);
  let boo = '';
  array.forEach((element) => {
    boo = element.residents.every((element) => element.age > age);
  })
  return boo;
}

function employeeByName(employeeName) {
  let employ = employees.find((element) => element.firstName == employeeName|| element.lastName == employeeName);
  let obj = {...employ};
  return obj;
}

function createEmployee(personalInfo, associatedWith) {
  let obj = {...personalInfo, ...associatedWith};
  return obj;
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

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
