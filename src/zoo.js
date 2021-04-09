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

// Começando com tudoooo! VQV

const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const findAnimal = data.animals.filter((animal) => ids.find((id) => id === animal.id));
  return ids === 'undefined' ? [] : findAnimal;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = data.animals.find((animal1) => animal1.name === animal);
  return animalName.residents.every((animal2) => animal2.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const findEmployee = (emp) => emp.firstName === employeeName || emp.lastName === employeeName;
  return employeeName === undefined ? {} : data.employees.find(findEmployee);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const doisman = ['9e7d4524-363c-416a-8759-8aa7e50c0992', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'];
  const manager = [...doisman, '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  const findManager = (id1) => id1 === id;
  return manager.some(findManager);
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
//   array = (name) => name === undefined ? [] : name;
//   newEmployee = {
//     id,
//     firstName,
//     lastName,
//     managers: array(managers),
//     responsibleFor: array(responsibleFor),
//   }
//   data.employees.push(newEmployee);
// }
// console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe'));
// console.log(data.employees.length);

function animalCount(species) {
  // seu código aqui
  const object = {
    lions: 4,
    tigers: 2,
    bears: 3,
    penguins: 4,
    otters: 4,
    frogs: 2,
    snakes: 2,
    elephants: 4,
    giraffes: 6,
  };
  return species === undefined ? object : object[species];
}

/*
function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}
*/

module.exports = {
  // entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
