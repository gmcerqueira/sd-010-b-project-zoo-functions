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

// Importando informações sobre o Zoológico
const data = require('./data');

const {
  animals,
  employees,
  /* hours,
  prices, */
} = data;

// Retorna um animal pelo seu id. Pode ser passado mais de um id.
function animalsByIds(...ids) {
  // Filtrar o obj 'animals' pelo 'id' recebido.
  // Verificar se o 'id' do parametro é igual ao 'id' do animal.
  // Utilizar 'some' em vez de 'find', pois some retorna bool e find retorna o objeto.
  return animals.filter((animal) =>
    ids.some((id) => animal.id === id));
}

// Verifica se todos os animais com dado nome são mais velhos que a idade passada.
function animalsOlderThan(animalName, age) {
  // Procura se há um animal com o nome passado.
  const animalObj = animals.find((animal) => animal.name === animalName);
  // Verifica se o animal existe e verifica se todos os animais têm idade maior que 'age'.
  if (animalObj) return animalObj.residents.every((animal) => animal.age >= age);

  return undefined;
}

// Verifica se há um empregado pelo seu nome.
function employeeByName(employeeName) {
  if (!employeeName) return {};

  // Procura o empregado pelo primeiro ou último nome.
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

// Cria empregado através de dois objetos.
function createEmployee(personalInfo, associatedWith) {
  // Retorna um único objeto com todas as informações.
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

// Verifica se o 'id' é um gerente
function isManager(id) {
  // Verifica se tem algum empregado que tem algum gerente com o id dado.
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  return species;
}

function entryCalculator(entrants) {
  // seu código aqui
  return entrants;
}

function animalMap(options) {
  // seu código aqui
  return options;
}

function schedule(dayName) {
  // seu código aqui
  return dayName;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return id;
}

function increasePrices(percentage) {
  // seu código aqui
  return percentage;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  return idOrName;
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
