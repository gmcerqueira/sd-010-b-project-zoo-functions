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

// Usei o filter no array de objetos, pois o filter já retorna um array caso algum elemento atenda a condição passada.
// Includes verifica se no array tem um determinado elemento. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function animalsByIds(...ids) {
  return data.animals.filter((value) => ids.includes(value.id));
}

// Primeiro uso o find para fazer a busca da especie passado. find retorna apenas o primeiro elemento que satisfaça a contição.
// Depois uso a const criada com o elemento achado para fazer um filter. Filter vai retornar todos aqueles que atenderam a condição, no caso mior do que a idade passada no parametro.
function animalsOlderThan(animal, age) {
  const species = data.animals.find((specie) => specie.name === animal);
  return species.residents.every((value) => value.age >= age);
}

// Fiz a verificação se há um parametro, caso não tenha retorna um objeto vazio.
// Caso seja passado um parametro, é feito um find(retorna o primeiro elemento encontrado).
// Retorna o abjeto em que o elemneto na qual atendeu a condição.
function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const checkName = (name) => name.firstName === employeeName || name.lastName === employeeName;
  return data.employees.find(checkName);
}

// Ao usar o spread operator, consigo criar um novo objeto com os parametros passado
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Com a HOf some, estou procurando no array pelo menos um elemento que retorna true na condição passada
// A condição verifica se o elemento iterado (managers) tem o mesmo id passado no parametro da função.
function isManager(id) {
  return data.employees.some((value) => value.managers.includes(id));
}

// Foi passado como parametro padrão dois arrays vazios para mangers e responsibleFor.
// Necessario passar o parametro padrão, pois essa chaves tem como valor arrays.
// Foi criado um novo objeto com os parametros. Por ultimo foi dado um push no array employees do novo objeto
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

// Solução encontrada com a ajuda e com code review do Emerson Saturnino e Diego Moraes
// Primeiro verifica se há parametro, se não houver é itera os elementos e cria um novo objeto
// com as especificações do requisito
// Caso tenha um parametro(nome da especie) retorna a quantidade dessa especie
function animalCount(species) {
  const newObject = {};
  if (species === undefined) {
    data.animals.forEach((value) => { newObject[value.name] = value.residents.length; });
    return newObject;
  }
  return data.animals.find((value) => value.name === species).residents.length;
}

// Primeiro verifica o parrametro, caso undefinid ou objeto vazio no parrametro, retorna zero
// Se for passado parametro, transforma esse objeto(parametro) passado em array.
// Com o objeto transfoemdo em um array é feito o reduce.
// No reduce faz o calculo do preço * a quantidade de pessoas(seja ela adulto, criança e senior).
function entryCalculator(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const cathObject = Object.keys(entrants);
  return cathObject.reduce((acc, curr) => acc + (data.prices[curr] * entrants[curr]), 0);
}

/* function animalMap(options) {
  const {}
  if (options === undefined){

  }
} */

// if (dayName === undefined) {
//   for (const key in data.hours) {
//     newObj[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close}pm`;
//   }
//   return newObj;

function schedule(dayName) {
  const newObj = {};
  const listDay = Object.keys(data.hours);
  listDay.forEach((valueKey) => {
    newObj[valueKey] = `Open from ${data.hours[valueKey].open}
    am until ${data.hours[valueKey].close - 12}pm`;
  });
  newObj.Monday = 'CLOSED';
  if (dayName === undefined) {
    return newObj;
  }
  return {
    [dayName]: newObj[dayName],
  };
}

console.log(schedule('Tuesday'));

/* function oldestFromFirstSpecies(id) {
  // seu código aqui
} */

/* function increasePrices(percentage) {
  // seu código aqui
} */

/* function employeeCoverage(idOrName) {
  // seu código aqui
} */

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
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
