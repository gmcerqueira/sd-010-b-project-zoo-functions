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
const {animals, employees} = data;
function animalsByIds(...ids) {
  return animals.filter((animal) => ids.some((verificaId) => animal.id === verificaId));  
}
// console.log(animalsByIds())
function animalsOlderThan(animal, age) {
  const retorno = animals.find((animalD) => animalD.name === animal);
  return retorno.residents.every((ageD) => ageD.age >= age);
}
/*Esta função, a partir do nome de uma espécie e uma idade mínima, 
verifica se todos os animais daquela espécie possuem a idade mínima especificada

  **Observações técnicas**

  - Deve retornar um valor booleano 

  **O que será avaliado**

  - Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta
 espécie possuem a idade mínima especificada


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
