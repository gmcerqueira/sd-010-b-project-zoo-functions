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
  return animals.filter((animal) =>
    args.some((checkId) => animal.id === checkId));
}

function animalsOlderThan(animal, age) {
  // 1- Find retorna o primeiro objeto que atenda a condição passada
  // 2- Dentro do objeto retornado tem outro array com mais objetos onde é verificado o value da key age de cada um e comparado com o parâmetro passado isso com a função every.
  const resultado = animals.find((dataAnimal) => dataAnimal.name === animal);
  return resultado.residents.every((dataAge) => dataAge.age >= age);
}

function employeeByName(employeeName) {
  // 1- É verificado se employeeName é vazio ou nulo, se for é retornado um objeto vazio.
  if (!employeeName) return {};
  const n = employeeName;
  // 2- Find retorna o primeiro objeto que corresponda a condição passada
  return employees.find((employ) => (n === employ.firstName || n === employ.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  // 1- Utilizando o Spread é criado um objeto os itens passados por parâmetro, pode ser um único item, um array ou objeto
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // 1- Some retorna verdadeiro ou falso através da condição informada
  // 2- Includes verifica dentro de um array ou objeto se contém o item informado
  return employees.some((manager) => manager.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // 1- Alterado os parâmetros recebido managers = [], responsibleFor = [] para que se nada for informado seja inserido por padrão um array vazio a cada.
  // 2- Através dos parâmetros passados é criado um novo objeto.
  // 3- Ao dar um push no array employees o novo objeto é adicionado ao final do array
  const newEmpployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmpployee);
}

function animalCount(species) {
  // Se não passar o animal para pesquisar entra na função para verificar a quantidade de todos
  if (species === undefined) {
    const returnObj = {};
    animals.forEach((animal) => {
      // Retorna quantos animais de cada espécie tem
      returnObj[animal.name] = animal.residents.length;
    });
    return returnObj;
  }
  // se passar o animal a pesquisar ele só faz um find retornando quantos deste animal tem
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  // Efetua uma busca no objeto passado, nas chaves ex { Adult, Child, Senior }
  // É feito um reduce, onde é somado o valor com base na key prices[curr] multiplicando pelo entrants[curr]... curr é a key
  return Object.keys(entrants).reduce(
    (acc, curr) =>
      acc + (prices[curr] * entrants[curr]), 0,
  );
}

function animalMap(options) {
  // seu código aqui
  return options;
}

const schedule = (dayName) => {
  const hour = Object.entries(hours);
  // Desestruturando dentro do reduce [day, { open, close }]
  // O Reduce vai montar uma tabela/objeto com os horários da semana
  const table = hour.reduce((acc, [day, { open, close }]) => {
    // close % 12, retorna o valor em formato 12h
    // (open, close > 0) verifica se tem horário de aberto e fechamento, se não retorna fechado
    acc[day] = (open, close > 0) ? `Open from ${open}am until ${close % 12}pm` : 'CLOSED';
    return acc;
  }, {});

  // Guarda a objeto criado em days
  const days = table;
  // Se foi informado o dia retorna um objeto com o dia e horario informado
  // Se não retorna a tabela days
  return (!dayName) ? days : { [dayName]: days[dayName] };
};

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
