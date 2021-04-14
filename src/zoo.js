/* eslint-disable no-unused-vars */
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

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  /* se a entrada for vazio, retornar array vazio;
  recuperar o objeto id
  retornar um array com as especies do id
  se receber mais de um id, retornar mais de uma especie */
  if (!ids) return [];
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // a partir do nome de uma espécie, verifica idade mínima
  // retornar booleano
  // verificar se TODOS tem idade mínima
  const animalKind = animals.filter((element) => element.name === animal);
  let checkAge = '';
  animalKind.forEach((element) => {
    checkAge = element.residents.every((obj) => obj.age > age);
  });
  return checkAge;
}

function employeeByName(employeeName) {
  // Sem parâmetros, retorna um objeto vazio
  // primeiro nome do funcionário retorna o objeto do funcionário
  // último nome do funcionário retorna o objeto do funcionário
  if (!employeeName) return {};
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // Cria um novo colaborador a partir de objetos contendo informações pessoais e gerentes e animais
  const createInfo = { ...personalInfo, ...associatedWith };
  return createInfo;
}

function isManager(id) {
  // fonte para este exercicio: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  // O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
  // Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
  // Deve retornar um valor booleano
  // testa se o id é de um gerente
  return employees.some((personId) => personId.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // A função irá adicionar uma nova pessoa colaboradora ao array employees, presente no arquivo data.js.
  // Adiciona um funcionário no fim da lista
  const newEmployee = employees.push({ id, firstName, lastName, managers, responsibleFor });
  return newEmployee;
}

function animalCount(species) {
  // Sem parâmetros, retorna um objeto
  // Com o nome de uma espécie de animal, retorna um número
  // Sem parâmetros, retorna animais e suas quantidades
  // Com o nome de uma espécie de animal, retorna somente a quantidade
  
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
