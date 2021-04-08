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
  const { animals } = data;
  return animals.filter((animal) => ids.includes(animal.id));
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const animalSelector = animals.find((selectedAnimal) => selectedAnimal.name === animal).residents;
  return animalSelector.every((selectedAnimal) => selectedAnimal.age >= age);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
}

function employeeByName(employeeName) {
  const { employees } = data;
  let findEmployee = {};
  if (employees.find((employee) => employee.firstName === employeeName)) {
    findEmployee = employees.find((employee) => employee.firstName === employeeName);
  } else if (employees.find((employee) => employee.lastName === employeeName)) {
    findEmployee = employees.find((employee) => employee.lastName === employeeName);
  }
  return findEmployee;
}
console.log(employeeByName('Nigel'));

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
