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

const { animals, employees } = require('./data');
// const data = require('./data');

// 1. IMPLEMENTE A FUNÇÃO animalsByIds
// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids
function animalsByIds(...ids) {
  if (ids !== null && ids !== undefined) {
    return animals.filter((animal) => ids.includes(animal.id));
  }
  return [];
}
// let filterResult = animalsByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274' , 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
// console.log(filterResult)

// 2. IMPLEMENTE A FUNÇÃO animalsOlderThan
// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada
function animalsOlderThan(animal, age) {
  return animals.find((especieName) => especieName.name === animal)
    .residents.every((animalAge) => animalAge.age >= age);
}

// 3. IMPLEMENTE A FUNÇÃO employeeByName
// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário
function employeeByName(employeeName) {
  if (employeeName !== null && employeeName !== undefined) {
    return employees.find((name) =>
      name.firstName === employeeName || name.lastName === employeeName);
  }
  return {};
}

// 4. IMPLEMENTE A FUNÇÃO createEmployee
// Cria um novo colaborador a partir de objetos contendo informações pessoais e gerentes e animais gerenciados.
function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith};
}
// Como os parâmetros da função irão receber objetos com diferentes informações, o operador Spread "..." será utilizado para "espalhar" estes dados dentro do novo objeto retornado.


// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function animalCount(species) {
//   // seu código aqui
// }

// function entryCalculator(entrants) {
//   // seu código aqui
// }

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
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
