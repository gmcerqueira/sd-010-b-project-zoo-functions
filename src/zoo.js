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

const { animals, employees } = data;

// add hours, prices in data DONT FORGET

function animalsByIds(...ids) {
  const idsAnimals = [];
  ids.forEach((id) => animals.filter((animal) => {
    if (animal.id === id) {
      idsAnimals.push(animal);
    }
    return idsAnimals;
  }));
  return idsAnimals;
}

// request 1 feito com ajuda do meu amigo André de Bem da turma 10-B com a autorização de consulta do seu código para melhor entendimaneto da questão.

function animalsOlderThan(animal, age) {
  const animalIndex = animals.find((thisAnimal) => thisAnimal.name === animal);
  const isOlder = animalIndex.residents.every((thisAnimal) => thisAnimal.age >= age);
  return isOlder;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employeeIndex = employees.find((thisEmployee) => {
    const cpr = (thisEmployee.firstName === employeeName || thisEmployee.lastName === employeeName);
    return cpr;
  });
  return employeeIndex;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const employeeManagers = employees.some((employee) =>
    employee.managers.some((managerEmployee) => managerEmployee === id));

  return employeeManagers;
}

// Exercício resolvido com a ajuda da visualização do código do meu colega Igor Machado, da turma 10-B para o entendimento do .some

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(addEmployees);
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
