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

const { animals } = require('./data');
const { employees } = require('./data');
// const data = require('./data');

// Referência: https://app.betrybe.com/course/live-lectures/sd-cohort-10-b
function animalsByIds(...ids) {
  const selectedAnimalsById = [];
  ids.forEach((id) => {
    selectedAnimalsById.push(animals.find((animal) => animal.id === id));
  });
  return selectedAnimalsById;
}

// Referẽncia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Referência: https://app.betrybe.com/course/live-lectures/sd-cohort-10-b
function animalsOlderThan(animal, age) {
  const selectedAnimal = animals.find((e) => e.name === animal);
  return selectedAnimal.residents.every((resident) => resident.age >= age);
}

// Referência: https://pt.stackoverflow.com/questions/173221/como-checar-se-uma-string-est%C3%A1-vazia-em-javascript/173226
function employeeByName(employeeName) {
  console.log(employeeName);
  if (!employeeName) {
    return {};
  }
  return employees.find((e) => ((e.firstName === employeeName) || (e.lastName === employeeName)));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
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
