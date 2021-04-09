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
const { animals, employees, prices, hours } = require('./data');
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
  const keys = Object.keys(entrants);
  return keys.reduce((a, b) => a + entrants[b] * prices[b], 0);
}

// function animalMap(options) {

// }

function schedule(dayName) {
  const keys = Object.keys(hours);
  const obj = {};
  keys.forEach((k) => { obj[k] = `Open from ${hours[k].open}am until ${hours[k].close - 12}pm`; });
  obj.Monday = 'CLOSED';

  if (dayName === undefined) {
    return obj;
  }
  return { [dayName]: obj[dayName] };
}

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
  schedule,
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
