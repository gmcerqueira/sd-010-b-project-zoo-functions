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

const { employees } = require('./data');
const data = require('./data');

/*
   Essa função recebe um ou mais ids e retorna um array contendo as espécies referentes aos ids passados como parâmetro. Caso não receba parâmetro, retorna um array vazio.
  */
function animalsByIds(...ids) {
  if (ids.length) { // se há id na lista ids
    // retorna uma lista de objetos contendo apenas
    return data.animals.filter( // os animais filtrados de data
      (animal) => ids.includes(animal.id), // sendo que animal.id está listado em ids
    );
  }
  return []; // retorna um array vazio caso não receba parâmetro
}

/*
   Essa função recebe o nome de uma espécie e uma idade mínima e verifica se todos os animais daquela espécie possuem a idade mínima especificada.
  */
function animalsOlderThan(animal, age) {
  // retorna o resultado de
  return data.animals.find( // encontrar a espécie
    (specie) => specie.name === animal, // que possui o nome recebido
  ).residents.every( // e verificar se todos os animiais residentes
    (resident) => resident.age >= age, // possuem a idade >= a mínima especificada
  );
}

/*
   Essa função recebe o primeiro ou último nome das pessoas colaboradoras e retorna o objeto do funcionário. Caso não receba parâmetro, retorna um objeto vazio.
  */
function employeeByName(employeeName) {
  if (employeeName !== undefined) { // se recebeu um nome como parâmetro
    // retorna o objeto resultado de
    return employees.find( // encontrar o funcionário
      (employe) => (employe.firstName === employeeName || employe.lastName === employeeName), // que possui o primeiro ou último nome igual ao recebido por parâmetro
    );
  }
  return {}; // retorna um objeto vazio caso não receba parâmetro
}

/*
   Essa função, a partir de informações recebidas nos parâmetros, cria um objeto equivalente ao de uma pessoa colaboradora, retornando-o.
  */
function createEmployee(personalInfo, associatedWith) {
  // retorna um objeto equivalente ao de uma pessoa colaboradora que contém as informações recebidas nos parâmetros
  return { ...personalInfo, ...associatedWith };
}

/*
   Essa função verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
  */
function isManager(id) {
  // retorna o resultado de
  return employees.some( // verificar se há algum
    ({ managers }) => managers.includes(id), // funcionário que tenha aquele 'id' como gerente
  );
}

/*
   Essa função adiciona uma nova pessoa colaboradora ao final do array employees, presente no arquivo data.js.
  */
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // adiciona ao final do array employees (presente no arquivo data)
  employees.push({ // um novo objeto funcionário que possui as informações recebidas nos parâmetros
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

/*
   Essa função recebe o nome de uma espécie e contabiliza a quantidade de animais dela. Caso não receba parâmetro, retorna um objeto que contém o nome dos animais e suas quantidades.

   Material consultado sobre reduce
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

   Créditos pela sugestão de usar reduce
   @Denis Rossati Ramos- Turma 10 - Tribo B
  */
function animalCount(species) {
  if (species !== undefined) { // se recebeu um nome de espécie como parâmetro
    // retorna após
    return data.animals.find( // encontrar a espécie
      (animal) => animal.name === species, // que possui nome igual ao recebido por parâmetro
    )
      .residents.length; // sua a quantidade de animais residentes
  }

  // const { animals: [{ name: residents }] } = data;

  // retorna um objeto resultado de reduce que
  return data.animals.reduce(
    (acc, obj) => {
      acc[obj.name] = obj.residents.length; // contém o nome dos animais e suas quantidades
      return acc; // retorna o objeto acumulado após inserir nova entrada
    }, {}, // valor inicial é um objeto vazio
  );
}

/*
  Essa função verifica se o argumento recebido é um objeto.

  Material consultado sobre como diferenciar object dos demais tipos
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
const isObject = (element) => toString.call(element) === '[object Object]';

/*
  Essa função verifica se o elemento está na lista
 */
const hasElement = (element, list) => list.includes(element);
/*
   Essa função recebe um objeto que contém a quantidade de visitantes e a faixa etária de cada um e retorna o preço total a ser cobrado.
  */
function entryCalculator(entrants) {
  if (isObject(entrants) // se entrants é um objeto
  && Object.keys(entrants).length // não está vazio
  && Object.keys(entrants).every( // e cada faixa etária sua
    (key) => hasElement(key, Object.keys(data.prices)), // é chave em data.prices
  )) {
    // retorna o resultado de reduce que
    return Object.keys(entrants).reduce( // para cada faixa etaria em entrants
      (acc, curr) => acc + data.prices[curr] * entrants[curr], 0, // acumula o preço total a ser cobrado dela
    );
  }
  return 0; // retorna 0 caso não receba um parâmetro ou seja um objeto vazio
}

/* function animalMap(options) {
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
