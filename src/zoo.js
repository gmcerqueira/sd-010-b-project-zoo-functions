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

// const data = require('./data');

const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  // o filter vai retornar um objeto contendo todas as infos
  // do animal
  // foi realizado o find dentro do filter para especificar
  // que a busca pela info do animal será pelo id.
  const findIdAnimals = animals.filter((animal) =>
    ids.find((element) => element === animal.id));

  return findIdAnimals;
}

// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(
//   animalsByIds(
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     'e8481c1d-42ea-4610-8e11-1752cfc05a46'
//   )
// );

function animalsOlderThan(animal, age) {
  // seu código aqui
  // primeiro procurei o animal pelo nome
  // para verificar se o animal esta sendo procurado pelo
  // o nome guardado na variável foi buscado todos so animais
  // que tem uma idade maior que a determinada
  // ex pinguim 7 anos
  const teste = animals.find((specie) => specie.name === animal);
  return teste.residents.every((specie) => specie.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  // se o nome do emprego não for inserido retornara um objecto vazio
  if (employeeName === undefined || employeeName === null) {
    return {};
  }
  // objeto (infos) do empregado pode ser encontrada tanto pelo
  // primeiro nome ou sobrenome
  const findEmployeeByName = employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);

  return findEmployeeByName;
}

console.log(employeeByName());
console.log(employeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // usado o spread, porque ele automaticamente
  // adiciona todas chaves e valor para criar
  // um novo funcionario
  return { ...personalInfo, ...associatedWith };
}

console.log(createEmployee());

function isManager(id) {
  // seu código aqui
  // primeiro foi realizado some no objecto employee
  // verificando se existe um employee
  // apos foi verifica se existe algum employee
  // que é manager pelo id
  const managers = employees.some((employee) =>
    employee.managers.some((managerIs) => managerIs === id));

  return managers;
}

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const createEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(createEmployees);
}

// console.log(addEmployee());

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
