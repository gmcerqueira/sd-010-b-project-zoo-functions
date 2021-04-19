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

function animalsByIds(id1, id2) {
  const newArray = [];
  const ids = [id1, id2];

  ids.forEach((item) => {
    if (typeof item !== 'undefined') {
      newArray.push(data.animals.find((teste) => teste.id === item));
    }
  });

  return newArray;
}

function animalsOlderThan(animal, age) {
  const ageUp = [];

  const animalEscolhido = data.animals.find((param) => param.name === animal).residents;

  animalEscolhido.forEach((item) => ageUp.push(item.age));

  return ageUp.every((element) => element >= age);
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
  /*
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,

  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
  */
  animalsByIds,
  animalsOlderThan,

};
