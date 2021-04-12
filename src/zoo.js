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
  // armamazenei todos os valores de managers de 'employee', a partir do forEach numa variavel 'managers';
  // comparei cada valor dessa nova lista com o id passado, caso fossem iguais: return true;
  const managers = [];
  employees.forEach((info) => managers.push(...info.managers));
  return managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
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

function animalCount(species) {
  // Tive o auxilio da Alessandra Resende nesse requisito;
  // criei o obj allAnimals para armazenar todos os animais e sua quantidade, pro caso de não receber um parametro;
  // para popular allAnimals usei o forEach com um parametro composto das key necessarias de animals, através do destructuring;
  // em seguida criei uma condicional para caso não receba parametros a function retorna allAnimals,
  // e caso receba, ela executa um find em animals que busca o animal passado em species e retorna o tamanho de seu array 'residents';
  const allAnimals = {};
  animals.forEach(({ name, residents }) => {
    allAnimals[name] = residents.length;
  });

  if (!species) return allAnimals;
  return animals.find((animal) => animal.name === species).residents.length;
}

// tive auxilio da Alessandra Resende neste requisito;
// default param em caso de parametro vazio = 0;
// Object.entries transforma 'entrants' em um array de arrays. No reduce, o acc é padrão mas o curr é tratado para receber uma lista vindos de 'entrants';
// logo, acc soma a si o resultado de: 'prices[tipo]'(que acessa data e traz o valor da entrada de cada tipo de visitante) X 'quantidade'(que é o parametro vindo de entrants e tratado no reduce)
// passando tbm o value '0' para o inico do acc;
function entryCalculator(entrants = 0) {
  return Object.entries(entrants).reduce((acc, [tipo, quantidade]) =>
    acc + (prices[tipo]) * quantidade, 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
  const arrKeys = Object.keys(hours);
  const hoursTable = {};
  arrKeys.map((day) => {
    if (hours[day].open === hours[day].close) {
      hoursTable[day] = 'CLOSED';
    } else {
      hoursTable[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    }
    return hoursTable;
  });
  const dale = dayName;
  const dayHours = {};
  dayHours[dayName] = hoursTable[dale];

  if (!dayName) return hoursTable;
  return dayHours;
}
console.log(schedule('Wednesday'));

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
