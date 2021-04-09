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

const { animals } = data;
const { employees } = data;

// Requirement 1
function animalsByIds(...ids) {
  // seu código aqui
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

// Requirement 2
function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find((specie) => specie.name === animal).residents
    .map((resident) => resident.age > age)
    .reduce((_, curr) => curr);
}
// const specie = 'otters';
// animalsOlderThan(specie, 7);

// Requirement 3
function employeeByName(employeeName) {
  // seu código aqui
  // let obj = {};
  const searchEmployee = employees.find((employee) =>
    (employee.firstName === employeeName)
    || (employee.lastName === employeeName));
  // console.log(obj);

  return searchEmployee || {};
}
// const emp = 'Wishart';
// console.log(employeeByName(emp));

// Requirement 4
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo, associatedWith);
}
// const info = {
//   id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const ass = {
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992',
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//   ],
// };
// console.log(createEmployee(info, ass));

// Requirement 5
function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers
    .some((manager) => manager === id));
}
// id, firstName, lastName, managers = [], responsibleFor
// Requirement 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor) {
  // seu código aqui
  // console.log(data.employees.length);
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
  };
  data.employees.push(newEmployee);
  // console.log(newEmployee);
  // console.log(data.employees.length);
  // const last = data.employees[8];
  // console.log(last.id);
  return newEmployee;
}
// const id1 = '39800c14-4b76-454a-858d-2f8d168146a7';
// const n = 'John';
// const s = 'Doe';
// const vec = ['1', '2', '3'];
// addEmployee(id1, n, s);

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
