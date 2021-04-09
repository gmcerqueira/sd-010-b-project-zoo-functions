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

function showAnymalsByLocalization() {
  const locations = animals.reduce((acc, animal) => {
    if (!acc[animal.location]) {
      acc[animal.location] = [animal.name];
    } else {
      acc[animal.location] = [...acc[animal.location], animal.name];
    }
    return acc;
  }, {});
  return locations;
}

function showAnymalsByLocalizationAndNames() {
  const locations = showAnymalsByLocalization();
  console.log(locations);
  const valuesSeparated = Object.values(locations);
  const newData = valuesSeparated
    .reduce((acc, group) => acc.concat(...group), [])
    .reduce((acc, animal) => {
      acc[animal] = animals.find((name) => name.name === animal).residents.map((data) => data.name);
      return acc;
    }, {});
  valuesSeparated.forEach((group) => group.forEach((animal) =>))
  
}

function animalMap(includeNames = false) {
  if (!includeNames) {
    return showAnymalsByLocalization();
  }
  showAnymalsByLocalizationAndNames();
}

animalMap(true);

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
