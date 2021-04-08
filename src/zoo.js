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
// daqui pra baixo as funções são da questão 1
const validateAnimals = (element, ids) => {
  for (let index = 0; index < ids.length; index += 1) {
    if (element.id === ids[index]) {
      return element;
    }
  }
};
const validateAnimal = (element, ids) => {
  if (element.id === ids[0]) {
    return element;
  }
};
const moreThanOneId = (ids) => animals.filter((element) => validateAnimals(element, ids));
const onlyOneId = (ids) => animals.filter((element) => validateAnimal(element, ids));
// fim das funções da questão 1

// funções da questão 2
const filterAnimalNames = (element, animal) => {
  if (element.name === animal) {
    return element;
  }
};
// fim das funções da questão 2

function animalsByIds(...ids) {
  // seu código aqui
  if (ids[0] === undefined) return [];
  if (ids.length === 1) onlyOneId(ids);
  return moreThanOneId(ids);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalNames = animals.filter((element) => filterAnimalNames(element, animal));
  const minAges = animalNames[0].residents.every((element) => element.age >= age);
  return minAges;
}

/*

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}
 */
module.exports = {
/*   entryCalculator,
  schedule,
  animalCount,
  animalMap,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee, */
  animalsByIds,
  animalsOlderThan,
};
