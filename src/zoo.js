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
  return (!ids) ? [] : animals.filter(({ id }) =>
    ids.find((value) => value === id));
}

function animalsOlderThan(animal, idadeMinima) {
  return animals.find(({ name }) =>
    name === animal).residents.every(({ age }) => age > idadeMinima);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
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
  if (!species) {
    return animals.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  return Object.entries(entrants).reduce((acc, [chave, valor]) => acc + prices[chave] * valor, 0);
}

// function animalMap(options) {

// }

function schedule(dayName) {
  const segunda = Object.entries(hours);
  const result = segunda.reduce((acc, [cur, { open, close }]) => {
    acc[cur] = cur === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
    return acc;
  }, {});
  return dayName ? { [dayName]: result[dayName] } : result;
}

function oldestFromFirstSpecies(id) {
  const idAnimal = employees.find((value) => id === value.id).responsibleFor[0];
  const animal = animals.find((value) => value.id === idAnimal);
  const animalMaisVelho = animal.residents.reduce((acc, cur) =>
    (acc.age > cur.age ? acc : cur));
  return Object.values(animalMaisVelho);
}

function increasePrices(percentage) {
  const precos = Object.entries(prices);
  precos.forEach((value) => {
    const porcent = Math.ceil((percentage + 100) * value[1] * 0.01 * 100) / 100;
    prices[value[0]] = porcent;
  })
  return prices;
}

// console.log(increasePrices(50));
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
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
