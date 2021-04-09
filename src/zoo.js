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

// const data = require('./data');
const { animals, employees, prices } = require('./data');
// hours
function animalsByIds(...ids) {
  if (!ids) return [];
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, ageExpected) {
  const { residents } = animals.find((a) => a.name === animal);
  return residents.every(({ age }) => age > ageExpected);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) => firstName === employeeName
  || lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  let test = false;
  employees.forEach((employee) => employee.managers.forEach((manager) => {
    if (manager === id) test = true;
  }));
  return test;
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
  if (!species) {
    return animals.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.entries(entrants).reduce((acc, [type, amount]) => acc + amount * prices[type], 0);
}

function getAnimalNamesObject(uName, residents, uSex, sorted) {
  let firstResidentsCheck = residents;
  if (uSex) {
    firstResidentsCheck = Object.values(residents).filter(({ sex }) => sex === uSex);
  }
  const arrayOfNames = Object.values(firstResidentsCheck).map(({ name }) => name);
  if (sorted) arrayOfNames.sort();
  const obj = {};
  obj[uName] = arrayOfNames;

  return obj;
}

function getAnimalsByLocation({ includeNames, sex, sorted }, comparableLocation) {
  return animals.reduce((arr, { name, location, residents }) =>
    // this reduce will get all animals from that upper location and concat or create a object even if its overwrited
    (comparableLocation === location ? arr.concat(!includeNames
      ? name
      : getAnimalNamesObject(name, residents, sex, sorted)) : arr),

  []);
}

function getAnimals(includeNames = false, sex = false, sorted = false) {
  const params = { includeNames, sex, sorted };
  return animals.reduce((acc, { location }) => {
    // create the location key and call another function that will add all animals from those location key
    acc[location] = getAnimalsByLocation(params, location);
    return acc;
  }, {});
}

function animalMap(options) {
  if (!options) return getAnimals();
  const { includeNames, sex, sorted } = options;
  return getAnimals(includeNames, sex, sorted);
}

console.log(animalMap({ includeNames: true }));

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
