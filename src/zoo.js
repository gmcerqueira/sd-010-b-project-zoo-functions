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

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');



function animalsByIds(...ids) {
  return animals.filter((animal, index) => animal.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  const findName = animals.find((name) => name.name === animal);
  return findName.residents.every((element) => element.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((p) => p.firstName === employeeName || p.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const allEmployee = { ...personalInfo, ...associatedWith };
  return allEmployee;
}

function isManager(id) {
  return employees.some((manager, index) => id === manager.managers[index]);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  let numberOfAnimals = {};
  if (species === undefined) {
    animals.forEach((nome) => {
      numberOfAnimals[nome.name] = nome.residents.length;
      return numberOfAnimals;
    });
  } else {
    const lookForAnimal = animals.find((name) => name.name === species);
    numberOfAnimals = lookForAnimal.residents.length;
    return numberOfAnimals;
  }
  return numberOfAnimals;
}

function entryCalculator(entrants) {
  if (entrants === {} || entrants === undefined) {
    return 0;
  }
  const { Adult: Ad, Child: Ch, Senior: Se } = prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Ad * Adult + Ch * Child + Se * Senior;
}

// function animalMap(options) {

// }

function schedule(dayName) {

}

// function oldestFromFirstSpecies(id) {

// }

// function increasePrices(percentage) {

// }

// function employeeCoverage(idOrName) {

// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
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
