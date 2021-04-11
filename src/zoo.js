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
const { prices } = data;

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
  // console.log(searchEmployee);

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
    .some((manager) => manager === id)); // I took this simplified syntax from @gmcerqueira's repository
}

// Requirement 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor });
}

// addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
//   [
//     '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
//     'a67a36ee-3765-4c74-8e0f-13f881f6588a',
//   ],
//   [
//     'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
//     '210fcd23-aa7b-4975-91b7-0230ebb27b99',
//   ]);

// Requirement 7
function animalCount(species) {
  // seu código aqui
  const amount = {};
  if (species) {
    const obj = animals.find((specie) => specie.name === species);
    amount[species] = obj.residents.length;
  } else {
    animals.forEach((ani) => {
      amount[ani.name] = ani.residents.length;
    });
  }
  // console.log(amount);

  return species ? amount[species] : amount;
}
// console.log(animalCount('lions'));
// console.log(animalCount());

// Requirement 8
function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) return 0;
  const totalValue = Object.keys(entrants).reduce((acc, curr) => (
    acc + (entrants[curr] * prices[curr])
    // access the object value by using obj[varWithPropertyName] sintax
    // and multiplies entrants{} value by prices{} value
  ), 0);
  // console.log(totalValue);
  return totalValue;
}
// const people = { 'Adult': 1 };
// entryCalculator(people);

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
  entryCalculator,
  // schedule,
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
