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

function animalsByIds(...ids) {
  if (ids === 'undefined') {
    return [];
  }
  const findAnimal = data.animals.filter((animal) => ids.find((id) => animal.id === id));
  return findAnimal;
}

function animalsOlderThan(animal, age) {
  let aux = false;
  /* //find retorna false true se .residents.age > age minima */
  aux = data.animals.find((x) => x.name === animal);
  return aux.residents.every((auxB) => auxB.age > age);
}

/* function employeeByName(employeeName) {
  // seu código aqui
} */

/* function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
} */

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
  /* employeeByName,
  employeeCoverage,
  addEmployee,
  isManager, */
  animalsOlderThan,
  /* oldestFromFirstSpecies,
  increasePrices,
  createEmployee, */
};
