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
  const mapAnimal = data.animals.find((pupet) => pupet.name === animal);
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
  return data.employees.some((el) => el.managers.includes(id));
}
// Tive ajuda do Diegho Moraes para interpretar as questões 2 e 5!

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
  data.animals.map((el) => {
    obj[el.name] = el.residents.length;
    return obj;
  });
  return species === undefined ? obj : numbers.residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined) return 0;
  const { prices } = data;
  let result = 0;
  Object.keys(entrants).forEach((el) => {
    result += entrants[el] * prices[el];
  });
  return result;
}

// function animalMap(options) {
//   // seu código aqui
// }

const scheduleAll = () => {
  const { hours } = data;
  const result = {};
  Object.keys(hours).forEach((el) => {
    if (el && el === 'Monday') result[el] = 'CLOSED';
    if (el && el !== 'Monday') {
      result[el] = `Open from ${hours[el].open}am until ${hours[el].close - 12}pm`;
    }
    return result;
  });
  return result;
};

function schedule(dayName) {
  const result = scheduleAll();
  const resultFilter = {};
  Object.keys(result).filter((day) => {
    if (day === dayName) resultFilter[dayName] = result[dayName];
    return resultFilter;
  });
  return dayName === undefined ? result : resultFilter;
}

function oldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((info) => info.id === id);
  const getAnimalId = findEmployee.responsibleFor[0];
  const getAnimalsData = animalsByIds(getAnimalId).shift();
  let maxAge = 0;
  getAnimalsData.residents.forEach((el) => {
    if (el.age >= maxAge) maxAge = el.age;
  });
  const result = getAnimalsData.residents.find((pupet) => pupet.age === maxAge);
  return [result.name, result.sex, result.age];
}

// Eu tive ajuda do colega Dângelo para resolução do requisito 11

function increasePrices(percentage) {
  const { prices } = data;
  let { Adult, Senior, Child } = prices;
  Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
  Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  data.prices = { Adult, Senior, Child };
}

// function employeeCoverage(idOrName) {
//   // seu código aqui
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
