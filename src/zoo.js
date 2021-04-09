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

function animalsByIds(...ids) {
  return animals.filter((getId) => ids.some((animalId) => (animalId === getId.id)));
}

function animalsOlderThan(animal, age) {
  const filteredAnimal = animals.find((animalName) => animalName.name === animal);
  return (filteredAnimal.residents.every((animalAge) => animalAge.age >= age));
}

function employeeByName(employeeName) {
  let result;
  const fname = (name) => name.firstName === employeeName;
  const lname = (name) => name.lastName === employeeName;
  if (employeeName) {
    result = employees.find((name) => (fname(name) || lname(name)));
  } else {
    result = {};
  }
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  const managers = [stephanieId, olaId, burlId];
  return managers.some((ids) => ids === id);
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

function oldestFromFirstSpecies(id) {
  const animalId = employees.find((employeeId) => (employeeId.id === id)).responsibleFor[0];
  const animalArray = animals.find((getId) => (getId.id === animalId)).residents;
  const oldestAnimal = animalArray.sort((yearA, yearB) => yearB.age - yearA.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}
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
  oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
