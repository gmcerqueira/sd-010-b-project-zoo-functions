/* eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter((eachSpecies) => ids.some((eachId) => eachId === eachSpecies.id));
}

function animalsOlderThan(animal, age) {
  const { residents } = animals.find((eachSpecies) => eachSpecies.name === animal);
  return residents.every((resident) => resident.age > age);
}

function employeeByName(employeeName) {
  let result = {};
  employees.forEach((eachEmployee) => {
    if (employeeName === eachEmployee.firstName || employeeName === eachEmployee.lastName) {
      result = eachEmployee;
    }
  });
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  const newObject = { ...personalInfo, ...associatedWith };
  return newObject;
}

function isManager(id) {
  return employees.some((eachEmployee) => eachEmployee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newObject = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newObject);
}

function animalCount(species) {
  let result = {};
  if (species !== undefined) {
    result = animals.find((eachSpecies) => eachSpecies.name === species).residents.length;
  } else {
    animals.forEach((eachSpecies) => {
      result[eachSpecies.name] = eachSpecies.residents.length;
    });
  }
  return result;
}

function entryCalculator(entrants = {}) {
  const verifyLength = Object.keys(entrants);
  if (verifyLength.length === 0) return 0;
  let total = 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  total += Adult * prices.Adult;
  total += Child * prices.Child;
  total += Senior * prices.Senior;
  return total;
}

/* function animalMap(options) {
  // seu código aqui
}
*/
function schedule(dayName) {
  // seu código aqui
  const result = Object.entries(hours).reduce((acc, [key, val]) => {
    const { open, close } = val;
    acc[key] = close - open > 0 ? `Open from ${open}am until ${close % 12}pm` : 'CLOSED';
    return acc;
  }, {});
  if (dayName !== undefined) return { [dayName]: result[dayName] };
  return result;
}

function oldestFromFirstSpecies(id) {
  const firstAnimalId = employees.find((eachEmployee) => eachEmployee.id === id).responsibleFor[0];
  const residentsAnimals = animals.find((eachAnimal) => eachAnimal.id === firstAnimalId).residents;
  const oldestAge = residentsAnimals.reduce((acc, current) => {
    if (current.age > acc) {
      return current.age;
    }
    return acc;
  }, 0);
  const matchedAge = residentsAnimals.find((eachResident) => eachResident.age === oldestAge);
  const arrayAnimal = Object.values(matchedAge);
  return arrayAnimal;
}

function increasePrices(percentage) {
  const pricesKeys = Object.keys(data.prices);
  pricesKeys.forEach((eachPrice) => {
    data.prices[eachPrice] = Math.ceil(data.prices[eachPrice] * (percentage + 100)) / 100;
  });
}

/* function employeeCoverage(idOrName) {
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
