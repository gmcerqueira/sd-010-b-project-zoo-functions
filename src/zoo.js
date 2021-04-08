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

  if (ids.length === 0) {
    return [];
  }
  const animalReduce = [...ids];
  const animalSeach = animalReduce.reduce((animalIdAcc, id) => {
    // onde estão os animais?
    const animals = data.animals;
    // pegue o id e vá de encontro ao animal.
    const locator = animals.find((animal) => animal.id === id);
    // armazene o animal
    return animalIdAcc.concat(locator);
  }, []);
  // retorne todos animais.
  return animalSeach;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  //onde está o animal?
  const {animals} = data;
  // qual é este animal?
  const animalSeach = animals.find(({
    name
  }) => name === animal);
  // array com todos da mesma especie;
  const sameSpecies = animalSeach.residents.reduce((espAcc, espAnimal) => {
    if (espAnimal.age < age) {
      return espAcc = false;
    }
    // ele sempre retornará o ultimo valor.
    return espAcc;
  }, true);
  return sameSpecies;
}

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

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
