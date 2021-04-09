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

const {
  hours
} = require('./data');
const data = require('./data');

const {
  animals,
  employees,
  prices,
} = data;

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.find((id) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const animalFilter = animals.find((specie) => specie.name === animal).residents;
  console.log(animalFilter);
  return animalFilter.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const manangers = employees.some((emp) => emp.managers.find((man) => man === id));
  return manangers;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const animal = {};
  if (!species) {
    animals.forEach((an) => {
      animal[an.name] = an.residents.length;
    });
    return animal;
  }
  return animals.find((an) => an.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  return Object.keys(entrants).reduce((acc, curr) => acc + prices[curr] * entrants[curr], 0);
}

function animalMap(options) {
  const local = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  if (!options) {
    animals.forEach(({
      location,
      name,
    }) => local[location].push(name));
    return local;
  }
  if (options.includeNames === true) {
    animals.forEach(({
      location,
      name,
    }) => {});
  }
}

function schedule(dayName) {
  const mesage = {};
  const days = Object.keys(hours);
  days.forEach((day) => {
    const {
      open,
      close,
    } = hours[day];
  });
}


function oldestFromFirstSpecies(id) {
  const first = employees.find((emploee) => emploee.id === id).responsibleFor[0];
  const per = animals.find((an) => an.id === first).residents.sort((a, b) => b.age - a.age)[0];
  return [per.name, per.sex, per.age];
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((element) => {
    prices[element] = Math.ceil(prices[element] * (100 + percentage)) / 100;
  });
}

function employeeCoverage(idOrName) {

  if (!idOrName) {
    const fullName = {};
    employees.forEach((employee) => {
      fullName[`${employee.firstName} ${employee.lastName}`];
    });
  }
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
