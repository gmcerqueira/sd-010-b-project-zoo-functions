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

// hours, prices
const { animals, employees } = data;

function animalsByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  // Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada. Deve retornar um valor booleano
  // capturar os animais da mesma espécie
  const sameEspecie = animals.filter((especies) => (especies.name === animal));
  // capturar as idades de cada um
  const getAges = sameEspecie.map((especie) => especie.residents.map((resident) => resident.age));
  // verificar idade dos animais da espécie
  const [ages] = getAges;
  return ages.every((ag) => ag > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  // Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
  // Sem parâmetros, retorna um objeto vazio
  // Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // Quando provido o último nome do funcionário, retorna o objeto do funcionário
  if (!employeeName) return {};
  return employees.find((nam) => nam.firstName === employeeName || nam.lastName === employeeName);
  // fild - buscar pelo primeiro ou ultimo nome
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o
  // - O parâmetro `personalInfo` recebe um objeto que contém o `id`, o `firstName` e o `lastName`
  // - O parâmetro `associatedWith` recebe um objeto que contém dois array: `managers` e `responsibleFor`
  // Cria um novo colaborador a partir de objetos contendo `informações pessoais` e `gerentes e animais gerenciados`.
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  // Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
  // Deve retornar um valor booleano. Testa se o id passado é de um gerente
  // capturar o id do funcionario verificar se o cargo é gerencia(só responder a uma pessoa - 1 manager)
  const employee = employees.find((employe) => employe.id === id); // infos funcionário
  return employee.managers.length === 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  // A função irá adicionar uma nova pessoa colaboradora ao array `employees`, presente no arquivo `data.js`.
  // Adiciona um funcionário no fim da lista
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

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
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
