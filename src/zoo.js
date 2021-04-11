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

const search = (arr, arg, key) => arr.find((e) => e[key] === arg);

const animalsByIds = (...ids) => ids.map((e) => search(animals, e, 'id'));

const animalsOlderThan = (animal, ageAnimal) =>
  search(animals, animal, 'name').residents.every(({ age }) => age > ageAnimal);

const employeeByName = (employeeName) =>
  employeeName
    ? employees.find((e) => e.firstName === employeeName || e.lastName === employeeName)
    : {};

const createEmployee = (arg1, arg2) => ({ ...arg1, ...arg2 });

const isManager = (id) => employees.some(({ managers }) => managers.some((e) => e === id));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

const animalCount = (species) => {
  return !species
    ? animals.reduce((acc, { name, residents }) => (acc[name] = residents.length) && acc, {})
    : search(animals, species, 'name').residents.length;
};

// console.log(animalCount('lions'))

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

function employeeCoverage(idOrName) {}

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
