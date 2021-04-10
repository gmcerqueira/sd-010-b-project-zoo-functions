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

// const data = require('./data');

const { animals } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  // o filter vai retornar um objeto contendo todas as infos
  // do animal
  // foi realizado o find dentro do filter para especificar
  // que a busca pela info do animal será pelo id.
  const findIdAnimals = animals.filter((animal) =>
    ids.find((element) => element === animal.id));

  return findIdAnimals;
}

// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(
//   animalsByIds(
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     'e8481c1d-42ea-4610-8e11-1752cfc05a46'
//   )
// );

function animalsOlderThan(animal, age) {
  // seu código aqui
  const teste = animals.find((specie) => specie.name === animal);
  return teste.residents.every((specie) => specie.age > age);
}

console.log(animalsOlderThan());

// function employeeByName(employeeName) {
//   // seu código aqui
// }

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
  // employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
