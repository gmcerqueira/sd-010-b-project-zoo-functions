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
scheduleAll();

function schedule(dayName) {
  const result = scheduleAll();
  const resultFilter = {};
  if (Object.keys(result).includes(dayName)) {
    resultFilter[dayName] = result[dayName];
  }
  return dayName === undefined ? result : resultFilter;
}

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
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
