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

// 1. IMPLEMENTE A FUNÇÃO animalsByIds
// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.
// Observações técnicas

// O parâmetro desta função pode ser alterado para atender ao requisito proposto
// O que será avaliado

// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids

// const data = require('./data');
// const {animals, employees} = data;
function animalsByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  return ids.map((valor) => animals.find(({ id }) => id === valor));
  // const retorno = animals.filter((animal) => ids.find((id) => animal.id === id));
  // return retorno; OBS: Alternativa
}
// console.log(animalsByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

// 2. IMPLEMENTE A FUNÇÃO animalsOlderThan
// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada
// Observações técnicas

// Deve retornar um valor booleano
// O que será avaliado

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada
// const data = require('./data');
// const {animals, employees} = data;
function animalsOlderThan(animal, idadeMinima) {
  // seu código aqui
  return animals.find(({ name }) => name === animal).residents.every(({ age }) =>
    age > idadeMinima);
}
// console.log(animalsOlderThan('penguins', 2));

// 3. IMPLEMENTE A FUNÇÃO employeeByName
// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

// O que será avaliado

// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário

// const data = require('./data');
// const {animals, employees} = data;
function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}
// console.log(employeeByName('Nelson'))

// 4. IMPLEMENTE A FUNÇÃO createEmployee
// A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o

// Observações técnicas

// O parâmetro personalInfo recebe um objeto que contém o id, o firstName e o lastName
// O parâmetro associatedWith recebe um objeto que contém dois array: managers e responsibleFor
// O que será avaliado

// Cria um novo colaborador a partir de objetos contendo informações pessoais e gerentes e animais gerenciados.

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

// 5. IMPLEMENTE A FUNÇÃO isManager
// Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.

// Observações técnicas

// Deve retornar um valor booleano
// O que será avaliado

// Testa se o id passado é de um gerente

// const data = require('./data');
// const {animals, employees} = data;
function isManager(parametro) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(parametro));
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

// 6. IMPLEMENTE A FUNÇÃO addEmployee
// A função irá adicionar uma nova pessoa colaboradora ao array employees, presente no arquivo data.js.

// O que será avaliado

// Adiciona um funcionário no fim da lista

// const data = require('./data');
// const {animals, employees} = data;
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}
// console.log(addEmployee('odod', 'joao', 'bastiao', 'dfsf', 'dfsf' ))

// 7. IMPLEMENTE A FUNÇÃO animalCount
// Esta função é responsável por contabilizar a quantidade de animais.

// Observações técnicas

// Sem parâmetros, retorna um objeto
// Com o nome de uma espécie de animal, retorna um número
// O que será avaliado

// Sem parâmetros, retorna animais e suas quantidades
// Com o nome de uma espécie de animal, retorna somente a quantidade

// const data = require('./data');
// const {animals, employees} = data;
function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return animals.find(({ name }) => species === name).residents.length;
}
// console.log(animalCount('lions'));

// 8. IMPLEMENTE A FUNÇÃO entryCalculator
// A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado

// Observações técnicas

// O parâmetro entrants recebe um objeto que contém as chaves Adult, Child e Senior, com suas respectivas quantidades de pessoas
// O que será avaliado

// Retorna 0 se nenhum argumento for passado
// Retorna 0 se um objeto vazio for passado
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

// const data = require('./data');
// const {animals, employees, prices} = data;
// let entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  return Object.entries(entrants).reduce((acc, [tipo, quantidade]) =>
    acc + prices[tipo] * quantidade, 0);
}
// console.log(entryCalculator(entrants));

// 9. IMPLEMENTE A FUNÇÃO animalMap
// A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo

// Observações técnicas

// Analise o teste unitário para entender os retornos que são esperados para esta função
// O que será avaliado

// Sem parâmetros, retorna animais categorizados por localização
// Com a opção includeNames: true especificada, retorna nomes de animais
// Com a opção sorted: true especificada, retorna nomes de animais ordenados
// Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea
// Com a opção sex: 'female' ou sex: 'male' especificada e a opção sort: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados
// Só retorna informações ordenadas e com sexo se a opção includeNames: true for especificada

// function animalMap(options) {
//   // seu código aqui
// }

// 10. IMPLEMENTE A FUNÇÃO schedule
// A função é responsável por disponibilizar as informações de horário para uma consulta, que pode querer ter acesso a todo o cronograma da semana ou apenas o cronograma de um dia específico

// Observações técnicas

// Analise o teste unitário para entender os retornos que são esperados para esta função
// O que será avaliado

// Sem parâmetros, retorna um cronograma legível para humanos
// Se um único dia for passado, retorna somente este dia em um formato legível para humanos

function schedule(dayName) {
  // seu código aqui
  const horas = Object.entries(hours);
  const result = horas.reduce((acc, [cur, { open, close }]) => {
    acc[cur] = cur === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
    return acc;
  }, {});
  return dayName ? { [dayName]: result[dayName] } : result;
}
// console.log(schedule('Monday'));
// 11. IMPLEMENTE A FUNÇÃO oldestFromFirstSpecies
// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro

// O que será avaliado

// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const idAnimal = employees.find((value) => id === value.id).responsibleFor[0];
  const animal = animals.find((value) => value.id === idAnimal);
  const animalMaisVelho = animal.residents.reduce((acc, cur) =>
    (acc.age > cur.age ? acc : cur));
  return Object.values(animalMaisVelho);
}

function increasePrices(percentage) {
  // seu código aqui
  const precos = Object.entries(prices);
  precos.forEach((value) => {
    const porcent = Math.ceil((percentage + 100) * value[1] * 0.01 * 100) / 100;
    prices[value[0]] = porcent;
  });
  return prices;
}

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
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
