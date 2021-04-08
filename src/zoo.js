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

function animalsByIds(idone, idtwo) {
  const response = [];

  if (idone === undefined && idtwo === undefined) { return response; }

  data.animals.forEach((animals) => {
    if (animals.id === idone || animals.id === idtwo) {
      console.log(animals);
      response.push(animals);
    }
  });

  return response;
}

function animalsOlderThan(animal, age) {
  let animalsresidents = []; let response = true;

  data.animals.forEach((animals) => {
    if (animals.name === animal) { animalsresidents = animals.residents; }
  });

  animalsresidents.forEach((residents) => {
    if (residents.age <= age) {
      response = false;
    }
  });

  return response;
}

function employeeByName(employeeName) {
  let response = {};

  if (employeeName === undefined) { return response; }

  data.employees.forEach((employees) => {
    if (employees.firstName === employeeName || employees.lastName === employeeName) {
      response = employees;
    }
  });

  return response;
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

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

// const id = '0938aa23-f153-4937-9f88-4858b24d6bce';

// animalsByIds(id);
// animalsOlderThan('otters', 7);
employeeByName('Emery');

module.exports = {
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
