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
  // seu código aqui
  return ids.map((param) => data.animals.find((animal) => param === animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = data.animals.find(({
    name,
  }) => name === animal);
  return findAnimal.residents.every((elemento) => elemento.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find((param) =>
    param.firstName === employeeName || param.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((param) => param.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const novoFunc = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(novoFunc);
}

function animalCount(species) {
  // seu código aqui
  const objeto = {};
  data.animals.forEach(({
    name,
    residents,
  }) => {
    objeto[name] = residents.length;
  });
  if (!species) return objeto;
  return objeto[species];
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  return Object.entries(entrants).reduce((acc, [tipo, quantidade]) =>
    acc + (data.prices[tipo] * quantidade), 0);
}

function animalMap(options) {
  // seu código aqui
  return options;
}

function schedule(dayName) {
  // seu código aqui
  const objeto = {};
  Object.keys(data.hours).forEach((day) => {
    if (day === 'Monday') {
      objeto[day] = 'CLOSED';
    } else {
      objeto[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    }
  });
  if (dayName) return {[dayName]: objeto[dayName]};
  return objeto;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return id;
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data.prices).forEach((tipo) => {
    data.prices[tipo] += (data.prices[tipo] * percentage) / 100;
    data.prices[tipo] = Math.round(data.prices[tipo] * 100) / 100;
  });
}

function employeeCoverage(idOrName) {
  // seu código aqui;
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
