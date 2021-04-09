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
  return animals.filter((animal) => ids.some((id) => animal.id === id));
}

function animalsOlderThan(animalName, age) {
  const selected = animals.find(({ name }) => name === animalName);
  return selected.residents.every((res) => res.age >= age);
}

function employeeByName(name) {
  let select = employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
  if (select === undefined) { select = {}; }
  return select;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(idd) {
  const selected = employees.find(({ id }) => id === idd);
  return employees.some(({ managers }) => managers.includes(selected.id));
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species = 'all') {
  const obj = {};
  animals.map(({ name, residents }) => {
    obj[name] = residents.length;
    return '';
  });
  if (species === 'all') {
    return obj;
  }
  return obj[species];
}

function toMoney(type, unity) {
  const total = prices[type] * unity;
  return total;
}

function entryCalculator(entrants) {
  if (entrants === undefined) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  let total = toMoney('Adult', Adult);
  total += toMoney('Child', Child);
  total += toMoney('Senior', Senior);
  return total;
}
console.log(entryCalculator());
// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

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
