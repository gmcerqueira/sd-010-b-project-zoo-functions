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
  const allEmployee = { ...personalInfo, ...associatedWith };
  return allEmployee;
}

function isManager(id) {
  return employeesList.some((manager, index) => id === manager.managers[index]);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employeesList.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  let numberOfAnimals = {};
  if (species === undefined) {
    animalsList.forEach((nome) => {
      numberOfAnimals[nome.name] = nome.residents.length;
      return numberOfAnimals;
    });
  } else {
    const lookForAnimal = animalsList.find((name) => name.name === species);
    numberOfAnimals = lookForAnimal.residents.length;
    return numberOfAnimals;
  }
  return numberOfAnimals;
}

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
  animalCount,
  //   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  //   oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
