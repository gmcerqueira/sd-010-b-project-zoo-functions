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

const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (ids === null) {
    return [];
  }
  return animals.filter((animal) => ids.some((id) => animal.id === id));
}
function animalsOlderThan(animal, age) {
  const filtrado = data.animals.filter((animals) => animals.name === animal );
  console.log(filtrado.residents)
  //return filtrado.residents.every((ani, index) => ani[index].age < age);
}
//console.log(animalsOlderThan('otters', 7));
function employeeByName(employeeName) {
  if (employeeName === null) {
    return [];
  }
  return data.employees.filter((pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName);
}

//console.log(employeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  return [...personalInfo, ...associatedWith];
}

function isManager(id) {
  return id;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return id + firstName + lastName + managers + responsibleFor;
}

function animalCount(species) {
  return species;
}

function entryCalculator(entrants) {
  return entrants;
}

function animalMap(options) {
  return options;
}

function schedule(dayName) {
  return dayName;
}

function oldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  return percentage;
}

function employeeCoverage(idOrName) {
  return idOrName;
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
