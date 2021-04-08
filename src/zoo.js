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

const { animals, employees, prices } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animal) => (ids.includes(animal.id)));
}

function animalsOlderThan(type, age) {
  // seu código aqui
  return animals.find((animal) => (animal.name === type)).residents
    .every((resident) => (resident.age >= age));
}

function employeeByName(employeeName) {
  // seu código aqui
  return employees.find(({ firstName, lastName }) => (
    firstName === employeeName || lastName === employeeName
  )) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => (employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return animals.find((animal) => (animal.name === species)).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) return 0;
  const entries = Object.keys(entrants);
  return entries.reduce((acc, cur) => acc + (entrants[cur] * prices[cur]), 0);
}

// function animalMap(options) {
 // // seu código aqui
// }

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

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  // schedule,
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
