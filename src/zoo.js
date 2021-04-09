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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return animals.filter((id) => ids.some((checaId) => id.id === checaId));
}

function animalsOlderThan(animal, age) {
  return animals
    .find((animais) => animais.name === animal)
    .residents.every((idadeAnimal) => idadeAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    (empregado) =>
      empregado.firstName === employeeName
      || empregado.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((ids) => ids.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // Henrique Zózimo ajudou
  const count = {};
  animals.forEach(({ name, residents }) => {
    count[name] = residents.length;
  });
  if (!species) return count;
  return count[species];
}
function entryCalculator(entrants = 0) {
  let total = 0;
  if (entrants.Adult) total += entrants.Adult * prices.Adult;
  if (entrants.Senior) total += entrants.Senior * prices.Senior;
  if (entrants.Child) total += entrants.Child * prices.Child;
  return total;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const semana = Object.keys(hours);
  const result = {};
  semana.forEach((dia) => {
    const { open, close } = hours[dia];
    (dia === 'Monday')
      ? result[dia] = 'CLOSED'
      : result[dia] = `Open from ${open}am until ${close - 12}pm`;
  });
  if (dayName) return { [dayName]: result[dayName] };

  return result;
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
