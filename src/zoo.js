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

// Faz a desestructuringObjects para uso nas funções
const { animals, employees, prices, hours } = data;

function animalsByIds(...args) {
  // 1- Filter traz todos os animais e o some 
  // 2- Some utilizado junto com o filter retorna somente o animal que atender a condição
  // 3- ...args pode trazer um id ou vários ids, é o spread
  return animals.filter((animal) => (args.some(checkId => animal.id === checkId)));
}

function animalsOlderThan(animal, age) {
  // 1- Find retorna o primeiro objeto que atenda a condição passada
  // 2- Dentro do objeto retornado tem outro array com mais objetos onde é verificado o value da key age de cada um e comparado com o parâmetro passado isso com a função every.
  const resultado = animals.find((dataAnimal) => (dataAnimal.name === animal));
  return resultado.residents.every((dataAge) => (dataAge.age >= age))
}

function employeeByName(employeeName) {
  // 1- É verificado se employeeName é vazio ou nulo, se for é retornado um objeto vazio.
  if (!employeeName) return {};
  // 2- Find retorna o primeiro objeto que corresponda a condição passada
  return employees.find((employ) => (employeeName === employ.firstName) || (employeeName === employ.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  // 1- Utilizando o Spread é criado um objeto os itens passados por parâmetro, pode ser um único item, um array ou objeto
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // 1- Some retorna verdadeiro ou falso através da condição informada
  // 2- Includes verifica dentro de um array ou objeto se contém o item informado
  return employees.some((manager) => (manager.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // 1- Alterado os parâmetros recebido managers = [], responsibleFor = [] para que se nada for informado seja inserido por padrão um array vazio a cada.
  // 2- Através dos parâmetros passados é criado um novo objeto.
  // 3- Ao dar um push no array employees o novo objeto é adicionado ao final do array
  const newEmpployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmpployee);
}

function animalCount(species) {
  // 1- É verificado se species é vazio ou nulo, se for é retornado um objeto vazio.
  if (!species) return {};
  // 2- A função find traz o objeto com o parâmetro informado, dentro deste objeto tem um segundo array de objetos com o nome residents e usando residents.length verifica o tamanho do array
  return animals.find((speciesReturned) => (speciesReturned.name === species)).residents.length;
}

function entryCalculator(entrants) {
  // 1- Declarada uma variável que vai receber o valor total
  let totalValue = 0;
  // 2- É verificado se entrants é vazio ou nulo, se for é retornado 0.
  if (!entrants) return 0;
  // 3- Feito um for onde percorre o objeto e o Object.keys retorna as keys, ou seja Adult, Child e Senior
  // 4- entrants[value] retorna o valor contido (qtdade de pessoas) nas posições Adult no primeiro loop, Child  no segundo loop e Senior no terceiro loop.
  // Em cada loop ele recupera o valor da entrada em prices passando a chave do objeto como referência (Adult, Child e Senior) e multiplica esse valor com a quantidade de pessoas obtidas na chave e guarda na variável totalValue para retornar no fim do for.
  Object.keys(entrants).forEach(value => (totalValue += entrants[value] * prices[value]));
  return totalValue;
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
