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
  const resul = [];
  for (let i = 0; i < ids.length; i += 1) {
    resul.push(...data.animals.filter((animalId) => animalId.id === ids[i]));
  }
  return resul;
}

function animalsOlderThan(animal, age) {
  const mapAnimal = data.animals.find((animals) => animals.name === animal);
  return mapAnimal.residents.every((value) => value.age >= age);
}

function employeeByName(employeeName) {
  const filter = data.employees.filter((person) =>
    person.firstName === employeeName || person.lastName === employeeName);
  return employeeName === undefined ? {} : filter.shift();
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const dataPush = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(dataPush);
}

function animalCount(species) {
  const obj = {};
  const numbers = data.animals.filter((number) => number.name === species).shift();
  data.animals.map((animalNumber) => {
    obj[animalNumber.name] = animalNumber.residents.length;
    return obj;
  });
  return species === undefined ? obj : numbers.residents.length;
}

function entryCalculator(entrants) {
  // Entendimento da função com a ajuda de colegas nos plantões.
  if (entrants === undefined) return 0;
  const { prices } = data;
  let result = 0;
  Object.keys(entrants).forEach((index) => {
    result += entrants[index] * prices[index];
  });
  return result;
}

// function animalMap(options) {
//  // seu código aqui
// }

function schedule(dayName) {
  const { hours } = data;
  const obj = {};
  Object.keys(hours).forEach((day) => {
    if (day === 'Monday') obj[day] = 'CLOSED';
    if (day !== 'Monday') {
      obj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      return obj;
    }
  });
  if (!dayName) return obj;
  return { [dayName]: obj[dayName] };
}

function oldestFromFirstSpecies(id) {
  const employRespons = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = animalsByIds(employRespons).shift();
  const { residents } = animal;
  const ages = residents.reduce((acc, curr) => {
    if (acc.age > curr.age) return acc;
    return curr;
  });
  return [ages.name, ages.sex, ages.age];
}

function increasePrices(percentage) {
  const { prices } = data;
  let { Adult, Senior, Child } = prices;
  Adult = Math.ceil(prices.Adult * (percentage + 100)) / 100;
  Senior = Math.ceil(prices.Senior * (percentage + 100)) / 100;
  Child = Math.ceil(prices.Child * (percentage + 100)) / 100;
  data.prices = { Adult, Senior, Child };
}

// function employeeCoverage(idOrName) {
// // seu código aqui
// }

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
