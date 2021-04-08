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

const { animals, employees } = require('./data');
// const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const animalObj = animals.find((element) => element.name === animal); // Pega apenas o objeto do parametro animal dentro de animals
  const animalAges = animalObj.residents.map((element) => element.age); // Cria uma array com as idades de todos os animais dentro do objeto
  return animalAges.every((value) => value > age); // Verifica se todos os valores da array de idades contempla o parametro age
}

function employeeByName(employeeName) {
  let result = {};
  if (employees.find((employee) => employee.firstName === employeeName)) {
    result = employees.find((employee) => employee.firstName === employeeName);
  } else if (employees.find((employee) => employee.lastName === employeeName)) {
    result = employees.find((employee) => employee.lastName === employeeName);
  }
  return result;
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

module.exports = {
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  // createEmployee,
  // isManager,
  // addEmployee,
  // animalCount,
  // entryCalculator,
  // animalMap,
  // schedule,
  // oldestFromFirstSpecies,
  // increasePrices,
  // employeeCoverage,
};
