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
const steph = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const data = require('./data');

function animalsByIds(...ids) {
  const resul = [];
  for (let i = 0; i < ids.length; i += 1) {
    resul.push(...data.animals.filter((animalId) => animalId.id === ids[i]));
  }
  return resul;
}

function animalsOlderThan(animal, age) {
  const mappingResidents = data.animals.map((animals) => animals.residents);
  // const getAge = mappingResidents.forEach((...value) => value);
  // console.log(getAge);
  const minimalAge = data.animals.every((specie) =>
    specie.name === animal && mappingResidents >= age);
  return minimalAge;
}
// console.log(animalsOlderThan('otters', 7));
// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  const filter = data.employees.filter((person) =>
    person.firstName === employeeName || person.lastName === employeeName);
  return employeeName === undefined ? {} : filter.shift();
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const ftrId = data.employees.filter((obj) => obj.id === id).shift();
  const { managers } = ftrId;
  console.log(managers);
  return managers.shift() === steph || managers.shift() === olaId || managers.shift() === burlId;
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
