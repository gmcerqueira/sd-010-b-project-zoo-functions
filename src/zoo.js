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

function animalsByIds(...ids) {
  // seu código aqui
  let messege = null;
  if (ids === undefined) {
    messege = [];
  } else {
    messege = [];
    ids.forEach((id) => messege.push(...data.animals.filter((animal) => animal.id === id)));
  }
  return messege;
}

// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
/* console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46')); */

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = data.animals.find((animalItem) => animalItem.name === animal);
  return animalName.residents.every((resident) => resident.age > age);
}

// console.log(animalsOlderThan('otters', 7));

function employeeByName(employeeName) {
  // seu código aqui
  let messege = null;
  if (employeeName === undefined) {
    messege = {};
  } else {
    messege = data.employees.find((employee) => (
      employee.firstName === employeeName || employee.lastName === employeeName));
  }
  return messege;
}

// console.log(employeeByName());

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  // seu código aqui
  return ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

/* const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  ]
};
createEmployee(personalInfo, associatedWith); */

// Não entendi como resolver:
function isManager(id) {
  // seu código aqui
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return data.employees;
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
