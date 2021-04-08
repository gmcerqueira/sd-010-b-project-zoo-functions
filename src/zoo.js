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

// const lion = {id} = data.animals[0]
// // console.log( lion)
// // console.log(data.animals[0])
const { animals } = data;

function animalsByIds(...ids) {
  // seu código aqui
  const param = ids; // coloquei o parametro dentro dessa const para ficar mais organizado

  const animalsMapped = param.map((IdCode) => // criei uma nova váriavel e apliquei dentro dela um map com os parametros para que eu possa transformar em something brand new
    animals.find((animal) => animal.id === IdCode)); // dentro do map apliquei um find que vai procurar na variavel animals o primeiro id que possui o mesmo valor que o id do param do meu map

  return animalsMapped; // no final da função pedi para retornar a minha const
}
animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'ef3778eb-2844-4c7c-b66c-f432073e1c6b');

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
