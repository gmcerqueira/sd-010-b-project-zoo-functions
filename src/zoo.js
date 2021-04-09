/*
esio-nascimento
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

const { animals, employees } = data;

function animalsByIds(...ids) {
  if (ids === 'undefined') {
    return [];
  }
  const findAnimal = animals.filter(({ id }) => ids.find((value) => value === id));
  return findAnimal;
}

function animalsOlderThan(animal, ageParametro) {
  let aux = false;
  /* //find retorna false true se .residents.age > age minima */
  aux = animals.find(({ name }) => name === animal);
  return aux.residents.every(({ age }) => age > ageParametro);
}

function employeeByName(aux) {
  if (!aux) return {};
  return employees.find(({ firstName, lastName }) => firstName === aux || lastName === aux);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

/* function isManager(id) {
  // seu código aqui
} */

/* function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
} */

/* function animalCount(species) {
  // seu código aqui
} */

/* function entryCalculator(entrants) {
  // seu código aqui
} */

/* function animalMap(options) {
  // seu código aqui
} */

/* function schedule(dayName) {
  // seu código aqui
} */

/* function oldestFromFirstSpecies(id) {
  // seu código aqui
} */

/* function increasePrices(percentage) {
  // seu código aqui
} */

/* function employeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  /* entryCalculator,
  schedule,
  animalCount,
  animalMap, */
  animalsByIds,
  employeeByName,
  /* employeeCoverage,
  addEmployee,
  isManager, */
  animalsOlderThan,
  /* oldestFromFirstSpecies,
  increasePrices, */
  createEmployee,
};
