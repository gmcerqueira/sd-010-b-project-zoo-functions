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
  // filter: passa a função em todos os elementos de animals até ela ser satisfeita;
  // some: testa se o ID do elemento é igual ao parametro e retorna o objeto que satisfaz essa condição;
  return animals.filter((animal) =>
    ids.some((testId) => animal.id === testId));
}

function animalsOlderThan(animal, age) {
  // uso do parametro 'animal' para achar(find) a especie especificada;
  // em seguida, uso o retorno do findAnimal e vejo dentre todos(every) suas keys a que corresponde a 'age' e a comparo com o parametro;
  const findAnimal = animals.find((element) => element.name === animal);
  return findAnimal.residents.every((info) => info.age >= age);
}

function employeeByName(employeeName) {
  // usei esse 'if' no inicio para retornar um obj vazio caso não recebesse um parametro;
  // Utilizei o find para percorrer todos elementos de employess e comparar os valores de firstName e lastName com o parametro passado, quando os valores são os mesmos que o passado, o obj respectivo é retornado;
  if (employeeName === undefined) return {};
  return employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName ? employee : 0));
}

function createEmployee(personalInfo, associatedWith) {
  // Utilizei o spread operator para compor o novo obj a partir dos parametros passados;
  const create = () => ({ ...personalInfo, ...associatedWith });
  return create();
}

function isManager(id) {
  // seu código aqui
  const managers = [];
  employees.forEach((info) => managers.push(...info.managers));
  return managers.some((manager) => manager === id);
}
// console.log(isManager());
function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  // alterei os parametros da função para que recebessem [] caso o valor respectivo fosse 'undefined' (metodo destructuring default);
  // criei um novo employee a partir dos parametros da função e retornei o push do novo elemento no 'employees';
  const newEmployee = ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return employees.push(newEmployee);
}

// function animalCount(species) {
//   // seu código aqui
//   const allAnimals = {};
//   const buildAnimals = animals.reduce((acc, curr, index) =>
//     );
//   if (species === undefined) return allAnimals;
//   return animals[species];
// }

function entryCalculator(entrants = 0) {
  // seu código aqui
  // tive auxilio da Alessandra Resende neste requisito;
  // default param em caso de parametro vazio = 0;
  // Object.entries transforma 'entrants' em um array de arrays. No reduce, o acc é padrão mas o curr é tratado para receber parametros variaveis vindos de 'entrants';
  // logo, acc soma a si o resultado de: 'prices[tipo]'(que acessa data e traz o valor da entrada de cada tipo de visitante) X 'quantidade'(que é o parametro vindo de entrants e tratado no reduce)
  // passando tbm o value '0' para o inico do acc;
  return Object.entries(entrants).reduce((acc, [tipo, quantidade]) =>
    acc + (prices[tipo]) * quantidade, 0);
}

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
  entryCalculator,
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
