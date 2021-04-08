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
  if (employeeName === undefined) return {};
  // seu código aqui
  return employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName ? employee : 0));
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

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
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
