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

const { employees, prices, hours } = require('./data');
const data = require('./data');

const { animals } = data;

function animalsByIds(...ids) {
  return data.animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals
    .find((animalBuscado) => animalBuscado.name === animal)
    .residents.every((habitante) => habitante.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employee) => {
    const result = employee.firstName === employeeName || employee.lastName === employeeName;
    return result;
  });
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employee = Object.assign(personalInfo, associatedWith);
  return employee;
}

function isManager(id) {
  // seu código aqui
  const arrManagers = [];
  employees.forEach((employee) => arrManagers.push(...employee.managers));
  return arrManagers.some((manager) => id === manager);
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  return data.employees.push({
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
    return animals.reduce(
      (acc, { name, residents }) =>
        Object.assign(acc, { [name]: residents.length }),
      {},
    );
  }
  const specie = animals.find((animal) => animal.name === species);
  return specie.residents.length;
}

function entryCalculator(entrants = {}) {
  // seu código aqui
  const entrantsKey = Object.keys(entrants);
  return entrantsKey.reduce((acc, cur) => acc + prices[cur] * entrants[cur], 0);
}

function animalMap(options) {
  // seu código aqui
  if (!options) return animals();
  const { includeNames, sex, sorted } = options;
  return animals(includeNames, sex, sorted);
}

function schedule(dayName) {
  // seu código aqui
  const itens = Object.entries(hours);
  const result = {};
  itens.forEach((element) => {
    if (element[0] === 'Monday') {
      result[element[0]] = 'CLOSED';
    }
    result[element[0]] = `Open from ${hours[element[0]].open} am until ${
      hours[element[0]].close - 12
    }pm`;
  });
  if (dayName !== undefined) return { [dayName]: result[dayName] };
  return result;
}

// function oldestFromFirstSpecies''(id) {
// seu código aqui
// }

// function increasePrices(percentage) {
// seu código aqui
// }

// function employeeCoverage(idOrName) {
// seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
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
