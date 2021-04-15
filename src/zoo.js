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

const { employees, animals } = require('./data');
const data = require('./data');


function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find((animalname) => animalname.name === animal);
  return findAnimal.residents.every((ageAnimals) => ageAnimals.age >= age);
}

function employeeByName(employeeName = {}) {
  return employees.find((employee) => {
    employee.firstName === employeeName || employee.lastName === employeeName});
}

function createEmployee(personalInfo, associatedWith) {
  return  { ...personalInfo, ...associatedWith};
}

// function isManager(id) {
//  return 
// }

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmployeer = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(addEmployeer);
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
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
