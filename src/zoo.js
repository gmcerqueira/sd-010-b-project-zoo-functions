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

// Requisito 1
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

// Requisito 2
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

// Requisito 3
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

function createEmployee(personalInfo, associatedWith) {
  let response = []; const obj = {};

  Object.assign(obj, personalInfo);
  Object.assign(obj, associatedWith);

  response = obj;
  console.log(response);

  return response;
}

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

const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992',
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
  ],
};

createEmployee(personalInfo, associatedWith);

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
  createEmployee,
};
