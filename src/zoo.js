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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

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

function entryCalculator(entrants) {
  // seu código aqui
  const valor = (acumu, atual) => acumu + (data.prices[atual] * entrants[atual]);
  return !entrants ? 0 : Object.keys(entrants).reduce(valor, 0);
}

// function animalMap(options) {
//   // seu código aqui

// }

function schedule(dayName) {
  // seu código aqui
  const h = data.hours;
  const final = {};
  const object = {
    Tuesday: `Open from ${h.Tuesday.open}am until ${h.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${h.Wednesday.open}am until ${h.Wednesday.close - 12}pm`,
    Thursday: `Open from ${h.Thursday.open}am until ${h.Thursday.close - 12}pm`,
    Friday: `Open from ${h.Friday.open}am until ${h.Friday.close - 12}pm`,
    Saturday: `Open from ${h.Saturday.open}am until ${h.Saturday.close - 12}pm`,
    Sunday: `Open from ${h.Sunday.open}am until ${h.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  final[dayName] = object[dayName];
  return !dayName ? object : final;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const whoEmployee = data.employees.find((employeeId1) => employeeId1.id === id);
  console.log(whoEmployee.responsibleFor);
  const whoAnimal = data.animals.find((animal) => whoEmployee.responsibleFor[0] === animal.id);
  const oldSpec = whoAnimal.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldSpec[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  const array = Object.values(data.prices).map((price) => price + (price * (percentage)) / 100);
  data.prices.Adult = Math.round(array[0] * 100) / 100;
  data.prices.Child = Math.round(array[2] * 100) / 100;
  data.prices.Senior = Math.round(array[1] * 100) / 100;
}

/*
function employeeCoverage(idOrName) {
  // seu código aqui
}
*/

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
