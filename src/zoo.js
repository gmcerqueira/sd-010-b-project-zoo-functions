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

function animalsByIds(...ids) {
  const info = [];
  ids.forEach((id) => {
    info.push(data.animals.find((animal) => animal.id === id));
  });
  return info;
}

function animalsOlderThan(animal, age) {
  const animalObj = data.animals.find((animal1) => animal1.name === animal);
  return animalObj.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
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
  if (species === undefined) {
    return data.animals.reduce((obj, animal) => {
      const objectOfAnimals = obj;
      objectOfAnimals[animal.name] = animal.residents.length;
      return objectOfAnimals;
    }, {});
  }
  const animal = data.animals.find((pet) => pet.name === species);
  return animal.residents.length;
}

function entryCalculator(entrants = {}) {
  if (entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * 49.99) + (Child * 20.99) + (Senior * 24.99));
}

function animalMap(options) {
  return options;
}

function schedule(dayName) {
  const weekDays = Object.keys(data.hours);

  const hours = Object.entries(data.hours).map((entrie) => ({ [entrie[0]]: entrie[0]
    === 'Monday' ? 'CLOSED' : `Open from ${entrie[1].open}am until ${entrie[1].close - 12}pm` }));

  const fullHours = {};

  for (let i = 0; i < weekDays.length; i += 1) {
    fullHours[weekDays[i]] = hours[i][weekDays[i]];
  }
  if (dayName === undefined) return fullHours;
  return hours.find((element) => Object.keys(element).includes(dayName));
}

function oldestFromFirstSpecies(id) {
  const employee = data.employees.find((colaborator) => colaborator.id === id);
  const firstSpecie = data.animals.find((specie) => specie.id === employee.responsibleFor[0]);
  const animalsSorted = firstSpecie.residents.sort((animal1, animal2) => animal2.age - animal1.age);
  const oldestAnimal = animalsSorted[0];
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  const { prices } = data;
  prices.Adult += (prices.Adult * (percentage / 100));
  prices.Child += prices.Child * (percentage / 100);
  prices.Senior += prices.Senior * (percentage / 100);

  prices.Adult = Math.round((prices.Adult * 100)) / 100;
  prices.Child = Math.round((prices.Child * 100)) / 100;
  prices.Senior = Math.round((prices.Senior * 100)) / 100;
  return prices;
}

function employeeCoverage(idOrName) {
  return idOrName;
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
