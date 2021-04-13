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

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const animalFind = animals.find((animalName) => (animalName.name === animal));
  const answer = animalFind.residents.filter((item) => item.age < age);
  return answer.length < 1;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const employeeN = employeeName;
  return employees.find((item) => employeeN === item.firstName || employeeN === item.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const checkManager = employees.filter((manager) => manager.managers.includes(id));
  return checkManager.length > 0;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    const animalInfo = {};
    animals.forEach((animal) => {
      animalInfo[animal.name] = animal.residents.length;
      // animal.name, animal.residents.length
      console.log(animalInfo);
    });
    return animalInfo;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}
// animalCount('frogs')
animalCount();

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const price = Object.keys(entrants);
  return price.reduce((accumulator, number) =>
    accumulator + (prices[number] * entrants[number]), 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const { name, sex, age } = animals
    .find((animal) => animal.id === employees.find((emp) =>
      emp.id === id).responsibleFor[0])
    .residents.sort((acc, curr) => acc.age - curr.age)[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  return Object.entries(prices).forEach(([acc, curr]) => {
    prices[acc] = Math.round(curr * ((percentage / 100) + 1) * 100) / 100;
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
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
