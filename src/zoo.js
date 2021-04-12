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
// requisitos 1,2 ,3 e 5 eu fiz com a ajuda do meu colega Alexandre Damasceno que me ajudou muito.  Link do PR:https://github.com/tryber/sd-010-b-project-zoo-functions/pull/66/commits

// OBS: no requisito 1 eu mantive os mesmos nomes de variáveis que o Alexandre porque achei que ele escolheu nomes perfeitos e concisos. Qualquer mudança de nome que eu fizesse só iria atrapalhar.
const data = require('./data');

const { employees } = data;
const { animals } = data;// é pra trazer as informações de animals que estão no data.js

function animalsByIds(...ids) { // esse ids será um conjunto de vários ID(ou pode não ser também).
  if (typeof (ids) === 'undefined') {
    return [];
  }
  // função map retorna um array e o map vai rodar sobre esse ids
  return ids.map((id) => animals.find((animal) => animal.id === id)); // o find  vai encontrar o PRIMEIRO animal que tenha um id idêntico ao ID que tá escrito no parâmetro de animalByIds. Aí descobrindo isso, o MAP vai me retornar um array com o objeto do animal especifico.
}

function animalsOlderThan(animal, age) {
  return animals.find((bicho) => bicho.name === animal)
    .residents.every((residente) => residente.age >= age); // o find vai encontrar em animals o primeiro objeto(bicho) que tiver o name igual ao que foi colocado no parâmetro. Descobrindo isso, logo depois acessa o residents deste objeto. Aí usa o every dentro do residents encontrado. O every retorna um booleano e dá true se TODOS atenderem alguma condição. Nesse caso, vai dar true se todo "residente"  tiver uma idade maior ou igual a idade colocada no parâmetro.
}

function employeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return employees.find((empregado) => {
    if (empregado.firstName === employeeName || empregado.lastName === employeeName) {
      return empregado;
    }
    return null; // usa esse return null pra não dar erro no lint. Eu entendi que, como eu comecei o IF, faltou usar o else e aí coloca o return null, de certa forma conclui o if/else. Usando o npx eslint --fix, automaticamente foi retirado o else e ficou só o return null.
  });
}

// function createEmployee(personalInfo, associatedWith) {
// seu código aqui
// }
// o requisito 5 pede pra que coloque um id como parâmetro, e a função precisa buscar algum outro funcionário que tenha como chefe a pessoa que tenha o ID que foi colocado no parâmetro.
// Como pede um valor booleano, é bom usar o some ou o every. Mas como basta que eu encontre APENAS UM funcionário que tenha como manager a pessoa com o id do parâmetro, então eu uso o SOME, e não o every.
function isManager(id) {
  return employees.some((funcionario) => funcionario.managers.find((idnumber) => idnumber === id));
  // tentei não usar o find aqui, mas não dava certo no teste. Então tive que usar.
  // Após definir que cada objeto de employees será um "funcionário", eu  alcanço o managers do objeto funcionário e uso o find: Assim eu devo buscar um funcionario.managers que tenha um valor igual ao ID do parâmetro. Essa é uma forma de fazer que deu certo. Aí depois que descobrir algum objeto que tenha um managers com o valor desse ID, aí a função some já vai dar true.
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
} // coloquei no parâmetro managers e responsibleFor = [] pra o caso de colocarem esses dois como algo sem valor, aí tem que fazer isso pra passar nos testes.
// Dentro do push tem que colocar {}.Como employees é um array de objetos, então um novo elemento nesse array também é pra ser dentro de chaves.

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
  // createEmployee,
};
