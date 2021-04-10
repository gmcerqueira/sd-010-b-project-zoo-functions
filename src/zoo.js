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

const {
  animals,
  employees,
  prices,
  hours,
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

  const total = Object.keys(entrants).reduce((acc, curr) => acc + prices[curr] * entrants[curr], 0);
  return total;
}

/* function animalMap(options) {

} */
function noParameterSchedule(value, days) {
  const retorno = {};
  days.forEach((day) => {
    if (day !== 'Monday') {
      retorno[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    } else {
      retorno[day] = 'CLOSED';
    }
  });
  return retorno;
}

function schedule(dayName) {
  const days = Object.keys(hours);
  const retorno = {};
  if (!dayName) {
    return noParameterSchedule(dayName, days);
  }
  if (dayName !== 'Monday') {
    retorno[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  } else {
    retorno[dayName] = 'CLOSED';
  }
  return retorno;
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

/* function employeeCoverage(idOrName) {

} */

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
