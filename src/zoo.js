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
  // seu código aqui
  const animalsById = animals.filter((animal, index) => animal.id === ids[index]);
  return animalsById;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalsList = animals.find((creature) => creature.name === animal).residents;
  return animalsList.every((creature) => creature.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const verifyEmployee = (emp) => (emp.firstName === employeeName || emp.lastName === employeeName);
  return employeeName ? employees.find((employee) => verifyEmployee(employee)) : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };//  Retomando após ver o conteúdo do dia 5. POis acabei não vendo no dia certo visando terminar de enviar os dados do MSC
}

function isManager(id) {
  // seu código aqui
  const verifyEmployee = employees.find((emp) => emp.id === id).id;
  return employees.some((emp) => emp.managers.includes(verifyEmployee));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employeeToAdd = { id, firstName, lastName, managers, responsibleFor };
  employees.push(employeeToAdd);
}

function animalCount(species) {
  // seu código aqui
  if (species !== undefined) {
    return animals.find((animal) => animal.name === species).residents.length;
  }
  return animals.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  let { Adult, Senior, Child } = entrants;
  if (Adult === undefined) Adult = 0;
  if (Senior === undefined) Senior = 0;
  if (Child === undefined) Child = 0;
  return (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
}

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((emp) => emp.id === id);
  const animal = animals.find((ani) => ani.id === Object.values(employee.responsibleFor)[0]);//  Fonte do Object: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
  let oldestAnimal;
  let animalAge = 0;
  animal.residents.map((pet) => {
    if (animalAge < pet.age) {
      animalAge = pet.age;
      oldestAnimal = Object.values(pet);
    }
    return oldestAnimal;
  });
  return oldestAnimal;
}

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

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
  // increasePrices,
  createEmployee,
};
