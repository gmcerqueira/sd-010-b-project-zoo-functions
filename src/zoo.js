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
  // Caso receba nenhum parâmetro, necessário retornar um array vazio
  // Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
  // Ao receber mais de um id, retorna um array com as espécies referentes aos ids
  if (!ids) return [];
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada
  // Deve retornar um valor booleano
  // Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada
  const animalSpecies = animals.find((specie) => specie.name === animal);
  return animalSpecies.residents.every((ageNumb) => ageNumb.age >= age);
}

function employeeByName(employeeName) {
  // Sem parâmetros, retorna um objeto vazio
  // Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // Quando provido o último nome do funcionário, retorna o objeto do funcionário
  if (!employeeName) {
    return {};
  }
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // O parâmetro personalInfo recebe um objeto que contém o id, o firstName e o lastName
  // O parâmetro associatedWith recebe um objeto que contém dois array: managers e responsibleFor
  // Cria um novo colaborador a partir de objetos contendo informações pessoais e gerentes e animais gerenciados.
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
  // Deve retornar um valor booleano
  // Testa se o id passado é de um gerente
  const managers = employees.some((manager) => manager.managers.includes(id));
  return managers;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // A função irá adicionar uma nova pessoa colaboradora ao array employees, presente no arquivo data.js.
  // Adiciona um funcionário no fim da lista
  const dadosPess = { id, firstName, lastName };
  const func = { managers, responsibleFor };
  const lastEmployee = { ...dadosPess, ...func };
  return employees.push(lastEmployee);
}

function animalCount(species) {
  // Sem parâmetros, retorna um objeto
  // Com o nome de uma espécie de animal, retorna um número
  // Sem parâmetros, retorna animais e suas quantidades
  // Com o nome de uma espécie de animal, retorna somente a quantidade
  const obj = {};
  animals.forEach(({
    name,
    residents,
  }) => {
    obj[name] = residents.length;
  });
  if (!species) {
    return obj;
  }
  return obj[species];
}

function entryCalculator(entrants = 0) {
  // O parâmetro entrants recebe um objeto que contém as chaves Adult, Child e Senior, com suas respectivas quantidades de pessoas
  // Retorna 0 se nenhum argumento for passado
  // Retorna 0 se um objeto vazio for passado
  // Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
  return Object.entries(entrants)
    .reduce((acc, [person, quant]) => acc + (prices[person] * quant), 0);
  // Tive bastante dificuldade nessa questão, fui ajudado por um colega.
}

/* function animalMap(options) {
  // seu código aqui
  return options;
} */

/* function schedule(dayName) {
  // seu código aqui
  return dayName;
} */

const findAnimal = (idAnimal) => {
  const { residents } = animals.find((animal) => animal.id === idAnimal);
  const olderAnimal = residents.reduce((acc, curr) => {
    if (curr.age < acc) {
      return acc;
    }
    return curr.age;
  }, 0);
  return Object.values(residents.find((age) => age.age === olderAnimal));
};

function oldestFromFirstSpecies(id) {
  // Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
  const { responsibleFor } = employees.find((funcion) => funcion.id === id);
  return findAnimal(responsibleFor[0]);
}

function increasePrices(percentage) {
  // Se o parâmetro da função recebe o valor 20, o aumento é de 20%
  // Altera o objeto prices do arquivo data.js
  // Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais
  const increase = (percentage / 100);
  prices.Adult *= (1 + increase);
  prices.Senior *= (1 + increase);
  prices.Child *= (1 + increase);
  prices.Adult = Math.round(prices.Adult * 100) / 100;
  prices.Senior = Math.round(prices.Senior * 100) / 100;
  prices.Child = Math.round(prices.Child * 100) / 100;
  // Feita com ajuda de um colega
}

/* function employeeCoverage(idOrName) {
  // seu código aqui
  return idOrName;
} */

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
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
