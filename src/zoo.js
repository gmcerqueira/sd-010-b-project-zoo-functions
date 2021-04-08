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

const { animals } = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');
// const data = require('./data');

// 1. IMPLEMENTE A FUNÇÃO animalsByIds
// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies
// referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

function animalsByIds(...ids) {
  return ids.map((ID) => animals.find(({ id }) => id.includes(ID)));
}
// console.log(animalsByIds());

// 2. IMPLEMENTE A FUNÇÃO animalsOlderThan
// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela
// espécie possuem a idade mínima especificada

function animalsOlderThan(animal, age) {
  return animals.find(({ name }) => name.includes(animal)).residents
    .every((resident) => resident.age >= age);
}
// console.log(animalsOlderThan('otters', 7));

// 3. IMPLEMENTE A FUNÇÃO employeeByName
// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

function employeeByName(employeeName) {
  const empty = {};

  if (employeeName) {
    return employees.find(({ firstName, lastName }) =>
      (firstName.includes(employeeName) || lastName.includes(employeeName)));
  }
  return empty;
}
// console.log(employeeByName('Emery'));

// 4. IMPLEMENTE A FUNÇÃO createEmployee
// A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente
// ao de uma pessoa colaboradora, retornando-o

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// 5. IMPLEMENTE A FUNÇÃO isManager
// Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// 6. IMPLEMENTE A FUNÇÃO addEmployee
// A função irá adicionar uma nova pessoa colaboradora ao array employees, presente no arquivo data.js

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}
// console.log(addEmployee('122', 'Ad', 'Jr', ['1234', '444'], ['1255', '455']));

// 7. IMPLEMENTE A FUNÇÃO animalCount
// Esta função é responsável por contabilizar a quantidade de animais.

function animalCount(species) {
  if (species) {
    return (animals.find(({ name }) =>
      name.includes(species)).residents.length);
  }
  return animals.reduce((acc, currAnimal) => {
    acc[currAnimal.name] = currAnimal.residents.length;
    return acc;
  }, {});
}
// console.log(animalCount('penguins'));
// console.log(animalCount());

// 8. IMPLEMENTE A FUNÇÃO entryCalculator
// A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável
// por retornar o preço total a ser cobrado

function entryCalculator(entrants) {
  return (!entrants) ? 0 : Object.keys(entrants)
    .reduce((acc, currVal) => acc + (entrants[currVal] * prices[currVal]), 0);
}
// console.log(entryCalculator({ Adult: 1, Senior: 2 }));

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
