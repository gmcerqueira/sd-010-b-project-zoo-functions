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

function animalsByIds(...ids) {
  // Caso receba nenhum parâmetro, necessário retornar um array vazio
  // Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
  // Ao receber mais de um id, retorna um array com as espécies referentes aos ids
  if (!ids) return [];
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada
  // Deve retornar um valor booleano
  // Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada
  const animalSpecies = animals.find((specie) => specie.name === animal);
  return animalSpecies.residents.every((ageNumb) => ageNumb.age >= age);
}

/* function employeeByName(employeeName) {
  // seu código aqui
  return employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return personalInfo, associatedWith;
}

function isManager(id) {
  // seu código aqui
  return id;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  return id, firstName, lastName, managers, responsibleFor;
}

function animalCount(species) {
  // seu código aqui
  return species;
}

function entryCalculator(entrants) {
  // seu código aqui
  return entrants;
}

function animalMap(options) {
  // seu código aqui
  return options;
}

function schedule(dayName) {
  // seu código aqui
  return dayName;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return id;
}

function increasePrices(percentage) {
  // seu código aqui
  return percentage;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  return idOrName;
} */

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
