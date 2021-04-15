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

const { animals, employees, prices } = data;

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

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
}

function animalCount(species) {
  const countAnimals = {};
  animals.forEach(({ name, residents }) => {
    (countAnimals[name] = residents.length);
  });
  if (!species) return countAnimals;
  return countAnimals[species];
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const entrant = Object.keys(entrants);
  return entrant.reduce((acc, curr) =>
    acc + (entrants[curr] * prices[curr]), 0);
}

/* function animalMap(options) {
  // seu código aqui
} */

/* function schedule(dayName) {
  // seu código aqui
} */

function oldestFromFirstSpecies(id) {
  const employerId = employees.find((callback) => callback.id === id).responsibleFor[0];
  const animalResidents = animals.find((callback) => callback.id === employerId).residents;
  const maiorAge = animalResidents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);
  const arrayAnimal = Object.values(maiorAge);
  return arrayAnimal;
}

function increasePrices(percentage) {
  const price = Object.keys(prices);
  const newPrice = price.map((preco) =>
    Math.round(((prices[preco] * (percentage / 100)) + prices[preco]) * 100) / 100);
  price.forEach((element, i) => {
    prices[element] = newPrice[i];
  });
}

/* function employeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  entryCalculator,
  /* schedule, */
  animalCount,
  /* animalMap, */
  animalsByIds,
  employeeByName,
  /* employeeCoverage, */
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
