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
// requisitos 1,2 e 3 eu fiz com a ajuda do meu colega Alexandre Damasceno que me ajudou muito.  Link do PR:https://github.com/tryber/sd-010-b-project-zoo-functions/pull/66/commits

// OBS: no requisito 1 eu mantive os mesmos nomes de variáveis que o Alexandre porque achei que ele escolheu nomes perfeitos e concisos. Qualquer mudança de nome que eu fizesse só iria atrapalhar.
const data = require('./data');

const { animals } = data;// é pra trazer as informações de animals que estão no data.js
function animalsByIds(...ids) { // esse ids será um conjunto de vários ID(ou pode não ser também).
  if (typeof (ids) === 'undefined') {
    return [];
  }
  // função map retorna um array
  return ids.map((id) => animals.find((animal) => animal.id === id)); // o find  vai encontrar o PRIMEIRO animal que tenha um id idêntico ao ID que tá escrito no parâmetro de animalByIds. Aí descobrindo isso, o MAP vai me retornar um array com o objeto do animal especifico.
}

function animalsOlderThan(animal, age) {
  // seu código aqui
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
