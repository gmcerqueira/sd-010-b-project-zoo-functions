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

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

/* function isManager(id) {
  // seu código aqui
} */

/* function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
} */

/* function animalCount(species) {
  // seu código aqui
} */

/* function entryCalculator(entrants) {
  // seu código aqui
} */

/* function animalMap(options) {
  // seu código aqui
} */

/* function schedule(dayName) {
  // seu código aqui
} */

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
