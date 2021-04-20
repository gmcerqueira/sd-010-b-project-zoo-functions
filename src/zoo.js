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

const employee = data.employees;

function animalsByIds(...ids) { // vamos colocar o rest como foi mencionado no texto abaixo.
  // seu código aqui
  // nenhum parametro? retornar um array vazio!
  // um único parâmetro? retornar? retorna um array com a espécie referente a este id!
  // ao receber mais de 1 parâmetro? retorna um array com as espécies referente aos Id's passados!
  const foundAnimals = ids.map((actualId) => {
    const findAnimal = data.animals.find((animal) =>
      actualId === animal.id);// retorno implícito. se o id atual do parametro for igual ao id de data.animals.id, entao o find vai retornar o
      // objeto inteiro que ele achou para dentro do array 'findAnimal do nosso primeiro map ali em cima'
    return findAnimal;
  });
  // transformar string em objetos.
  return foundAnimals; // ao ser chamada a função animalsByIds ela irá retornar oque esta alocado na variavel foundAnimals
  // que nada mais é o array vazio caso nao tenha nenhum parametro "pois o rest sempre retorna um array", ou um array de objetos com os animais
  // que conseguimos filtrar com nossa função Map + find;
}

// /\/\/\/\/\
// após assistir a aula do isaac chegamos a conclusão de que ao analisar os outros 2 quesitos do problema, teremos que lidar com ele de
// forma unificada, pois nao sabemos quantos prametros esperar, pode ser 1, 2 ou 1000, portanto existe um operador que usamos que converte
// X quantidades de parametros em um unico array contendo todos esses parametros separadamente, seu nome é REST, e seu uso se da exclusivamente
// para declarações de parametros das funções sua sintaxe é literalmente "...parametro", entao ele pega todos parametros passados e joga dentro
// da variavel parametros em formato de array.
// resolvido este quesito agora precisamos de uma forma para comparar o id recebido pelo array nos parametros, com o id que está la em data,
// e se os 2 ids bater, nos retorna um array de objeto, entao basicamente vamos transformar um array em array de objetos, e a melhor função
// que chegamos a conclusao na aula para este tipo de problema é o MAP.

function animalsOlderThan(animal, age) {
  // seu código aqui
  const pesquisaAnimal = data.animals.find((animale) => animale.name === animal);
  const { residents } = pesquisaAnimal;
  return residents.every((animale) => animale.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const searchEmployee = employee.find((person) => (person.firstName === employeeName)
  || (person.lastName === employeeName));
  return searchEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const spreadToEmployeeInfo = { ...personalInfo, ...associatedWith };
  return spreadToEmployeeInfo;
}

function isManager(id) {
  // recuperar o objeto do funcionario pelo id
  // comparar se no managers for <= 1 então a pessoa é gerente
  const searchPerson = employee.find((person) => person.id === id);
  return searchPerson.managers.length <= 1;
}
/*
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
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
