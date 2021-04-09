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
// Abimael Rocha de Albuquerque
const data = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }

  const { animals } = data;
  const animalList = animals.filter((animal, index) => animal.id === ids[index]);

  return animalList;
}

function animalsOlderThan(animalName, age) {
  const animalObj = data.animals.find((animal) => animal.name === animalName);
  const isOlder = animalObj.residents.map((animal) => animal.age > age);
  return !!isOlder.reduce((previous, current) => previous * current, true);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const cond = ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName;
  return data.employees.find(cond);
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;
  const searchResult = [];

  const elements = employees.forEach((managers) => { searchResult.push(...managers.managers); });

  const find = searchResult.find((idOf) => idOf === id);
  if (find !== undefined) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const add = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  if (managers === undefined) add.managers = [];
  if (responsibleFor === undefined) add.responsibleFor = [];
  data.employees.push(add);
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
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
