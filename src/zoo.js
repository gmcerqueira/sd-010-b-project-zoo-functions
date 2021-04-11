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

const { animals, employees, prices, hours } = data;
function animalsByIds(...ids) {
  return animals.filter((animal) => ids.some((verificaId) => animal.id === verificaId));
  // Usei o spread no parametro da função para retorna os ids,
  // o filter para passar pelo array animals, e o some para retorna ao menos uma condição
  // Pesquisei e tive ajuda durante o projeto.
}
// console.log(animalsByIds())
function animalsOlderThan(animal, age) {
  const retorno = animals.find((animalD) => animalD.name === animal);
  return retorno.residents.every((ageD) => ageD.age >= age);
  // Usei o find para trazer a primeira condição dentro do array animals,
  // o every para verificar se toda condição age, dentro do objeto residents tem idade minima.
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((nameEmpl) =>
    (employeeName === nameEmpl.firstName || employeeName === nameEmpl.lastName));
  // Usei o find para retorna o objeto tanto pelo primeiro nome e último nome.
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
  // Usei o spread para criar o novo colaborador.
}

function isManager(id) {
  return employees.some((idManager) => idManager.managers.includes(id));
  // Usei o includes para verifica se dentro do array managers tem o item esperado 'id'.
  // o some para retorna a condição do array employees.
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
  // Troquei os parametros managers e responsibleFor adicionando Values de arrays.
  // e utilizei o push para adicionar um novo objeto no array employees.
}

function animalCount(species) {
  const total = {};
  animals.forEach(({ name, residents }) => {
    total[name] = residents.length;
  });
  if (!species) return total;
  return total[species];
  // Usei o for Each para iterar o array animals.
}

function entryCalculator(entrants = 0) {
  let total = 0;
  if (entrants.Adult) total += entrants.Adult * prices.Adult;
  if (entrants.Senior) total += entrants.Senior * prices.Senior;
  if (entrants.Child) total += entrants.Child * prices.Child;
  return total;
}
/*
function animalMap(options) {
  // seu código aqui
}
*/
function schedule(dayName) {
  const obj = {};
  Object.keys(hours).forEach((day) => {
    if (day === 'Monday') obj[day] = 'CLOSED';
    if (day !== 'Monday') {
      obj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      return obj;
    }
  });
  if (!dayName) return obj;
  return { [dayName]: obj[dayName] };
}

function oldestFromFirstSpecies(id) {
  const employee = employees.find((emplo) => emplo.id === id).responsibleFor[0];
  const animal = animalsByIds(employee).shift();
  const { residents } = animal;
  const ages = residents.reduce((acc, valor) => {
    if (acc.age > valor.age) return acc;
    return valor;
  });
  return [ages.name, ages.sex, ages.age];
}

function increasePrices(percentage) {
  const { prices } = data;
  let { Adult, Senior, Child } = prices;
  Adult = Math.ceil(prices.Adult * (percentage + 100)) / 100;
  Senior = Math.ceil(prices.Senior * (percentage + 100)) / 100;
  Child = Math.ceil(prices.Child * (percentage + 100)) / 100;
  data.prices = { Adult, Senior, Child };
}
/*
function employeeCoverage(idOrName) {
  // seu código aqui
}
*/
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
