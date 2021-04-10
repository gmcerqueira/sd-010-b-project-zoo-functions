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

const { employees } = data;

function animalsByIds(...ids) {
  return data.animals.filter((animal) => ids.some((elementId) => animal.id === elementId));
}
// Tive auxilio do Diegho Moraes para realizar o animalsOlderThan
function animalsOlderThan(animal, age) {
  const animalInfo = data.animals.find((species) => species.name === animal);
  return animalInfo.residents.every((species) => species.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employ) => (employ.firstName === employeeName
|| employ.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const managerId = employees.map(((employ) => employ.managers));
  const identification = [];
  managerId.forEach((manager) => manager.filter((mngID) => {
    if (mngID === id) identification.push(mngID);
    return identification;
  }));
  return identification.length > 0;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
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
