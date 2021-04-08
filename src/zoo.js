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

const animalsList = data.animals;
const employeesList = data.employees;

function animalsByIds(...ids) {
  return animalsList.filter((animal, index) => animal.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  const findName = animalsList.find((name) => name.name === animal);
  return findName.residents.every((element) => element.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employeesList.find((p) => p.firstName === employeeName || p.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newPersonal = employeesList.map((emp) => {
    emp.id = personalInfo[0],
    emp.firstName = personalInfo[1],
    emp.lastName = personalInfo[1];
    return newPersonal;
  });
  const newAssoc = employeesList.map((empl) => {
    empl.managers = associatedWith[0],
    empl.responsibleFor = associatedWith[1];
    return newAssoc;
  });
}

// function isManager(id) {

// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {

// }

// function animalCount(species) {

// }

// function entryCalculator(entrants) {

// }

// function animalMap(options) {

// }

// function schedule(dayName) {

// }

// function oldestFromFirstSpecies(id) {

// }

// function increasePrices(percentage) {

// }

// function employeeCoverage(idOrName) {

// }

module.exports = {
//   entryCalculator,
//   schedule,
//   animalCount,
//   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  //   addEmployee,
  //   isManager,
  animalsOlderThan,
  //   oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
