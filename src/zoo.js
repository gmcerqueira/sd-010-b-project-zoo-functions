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

const { animals, employees, hours, prices } = data; // Desconstrução dos objetos do data para facilitar a criação das funções nos requisitos.

function animalsByIds(...ids) {
  return animals.filter((animal) =>
    ids.some((verifyId) => animal.id === verifyId));
}
// (...ids) busca espécies de animais por ids, independente de quantos sejam.
// filter fará novo array de acordo com as condições true do some.
// para concluir este requisito precisei de auxilio do colega Emerson Saturnino via sala de estudos.

function animalsOlderThan(animalName, age) {
  const animalVerify = animals.find((animal) => animal.name === animalName);
  return animalVerify.residents.every((resident) => resident.age >= age);
}
// find encontra o aninalName o array de obsjetos data.animals
// every verifica se o nome do animal atende a idade min informada - age e retorna boleano

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const employeeVerify = employees.find((employee) => (employee.firstName === employeeName)
  || (employee.lastName === employeeName));
  return employeeVerify;
}
// busca das pessoas colaboradoras através do primeiro ou do último nome delas
// find retorna obj de acordo com a condição - filter não deu certo, pois retorna um array
// o ponto de exclamação no if, valida se o parametro é válido ou não, se falso entra no if
// neste requisito, recebi ajuda do colega Jonnes Bezerra na sala do plantão

function createEmployee(personalInfo, associatedWith) {
  const employee = ({ ...personalInfo, ...associatedWith });
  return employee;
}
// personalInfo recebe um objeto que contém o id, o firstName e o lastName
// associatedWith recebe um objeto que contém dois array: managers e responsibleFor

function isManager(idManager) {
  return employees.some((employee) => employee.managers.includes(idManager));
}
// some para verificar se algum dos employee possui no managers o idManager.
// includes testa se o id passado é de um gerente e returna boleano

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}
// Adiciona um funcionário no fim do array employees
// .push adiciona objeto

function animalCount(species) {
  if (!species) {
    const animalObject = {};
    animals.forEach((animal) => { animalObject[animal.name] = animal.residents.length; });
    return animalObject;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}
// if ! para vrf o parametro specie, se invalido entre no if, caso contrario o find localiza o nome e a qtd.
// Sem parâmetros, retorna um objeto de animais e qtds
// Com o nome de uma espécie de animal, retorna um número - qtd

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, type) => acc + entrants[type] * prices[type], 0);
}
// Retorna 0 se nenhum argumento for passado ou se for objeto vazio
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const dayAndHours = Object.keys(hours);
  const message = {};
  dayAndHours.forEach((day) => {
    if (day !== 'Monday') {
      message[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    } else {
      message[day] = 'CLOSED';
    }
  });
  if (!dayName) {
    return message;
  }
  return { [dayName]: message[dayName] };
}
// dayAndHours salva as chaves do objeto hours
// forEach verifica os elementos e retorna msg.
// Sem parâmetros, retorna o cronograma completo - formato do arquivo test
// Se um único dia for passado, retorna somente este dia - formato arquivo test
// Se monday, retorna fechado.
// para concluir este requisito consultei o repositorio da colega Valeria Andreoni, pois naõ conseguia achar o erro na escrita da minha descontrução do objeto hours.

function oldestFromFirstSpecies(id) {
  // seu código aqui
}
//

function increasePrices(percentage) {
  const { Adult, Child, Senior } = prices;
  prices.Adult = Math.round(((Adult) + (Adult * (percentage / 100))) * 100) / 100;
  prices.Child = Math.round(((Child) + (Child * (percentage / 100))) * 100) / 100;
  prices.Senior = Math.round(((Senior) + (Senior * (percentage / 100))) * 100) / 100;
  return prices;
}
// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  //   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  //   oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
