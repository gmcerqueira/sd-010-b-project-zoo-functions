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

const { hours } = require('./data');
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
  // tive também ajuda para realizar este exercício
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
  const emptyObject = {};
  let counter = 0;
  animals.forEach((animalZoo) => {
    if (animalZoo.name === species) {
      counter = animalZoo.residents.length;
    } else if (species === undefined) {
      emptyObject[animalZoo.name] = animalZoo.residents.length;
    }
  });
  if (!species) return emptyObject;
  return counter;
}

function entryCalculator(entrants = 0) {
  // Retorna 0 se nenhum argumento for passado
  // Retorna 0 se um objeto vazio for passado
  // Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
  // Obs: o amigo Anderson Pedrosa me ajudou neste exercício
  return Object.entries(entrants)
    .reduce((acc, [person, amount]) => acc + (prices[person] * amount), 0);
}

// function animalMap(options) {
//   if (!options) return
// }

function schedule(dayName) {
  // Analise o teste unitário para entender os retornos que são esperados para esta função
  // Sem parâmetros, retorna um cronograma legível para humanos
  // Se um único dia for passado, retorna somente este dia em um formato legível para humanos
  const time = Object.keys(hours);
  const initObj = {};
  time.forEach((infoTime) => {
    initObj[infoTime] = `Open from ${hours[infoTime].open}am until ${hours[infoTime].close - 12}pm`;
  });
  initObj.Monday = 'CLOSED';
  if (!dayName) return initObj;
  return { [dayName]: initObj[dayName] };
}

function oldestFromFirstSpecies(id) {
  // A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro
  // Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
  // obs: esse exercício eu consultei o repositório de uma outra pessoa estudante para fazê-lo
  const zooKeeper = employees.filter((element) => element.id === id);
  let zooAnimal = '';
  zooKeeper.forEach((element) => {
    zooAnimal = animalsByIds(element.responsibleFor[0]);
  });
  const array = Object.values(zooAnimal).map((element) => {
    const arr = Object.values(element.residents);
    return arr.reduce((acc, next) => ((acc.age > next.age) ? acc : next));
  });
  const saida = [array[0].name, array[0].sex, array[0].age];
  return saida;
}

function increasePrices(percentage) {
  // Se o parâmetro da função recebe o valor 20, o aumento é de 20%
  const rate = percentage / 100;
  const increase = Object.keys(prices);
  increase.forEach((item) => { prices[item] *= (1 + rate); });
  increase.forEach((value) => { prices[value] = Math.round(prices[value] * 100) / 100; });
}

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
