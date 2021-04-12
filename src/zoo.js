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

const { animals } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return (animals.find((animalDoZoo) => animalDoZoo.name === animal)
    .residents.every((habitante) => habitante.age > age)
  );
}

function employeeByName(employeeName) {
  if (!employeeName) { return { }; }
  return employees.find((employee) => {
    const resultado = employee.firstName === employeeName || employee.lastName === employeeName;
    return resultado;
  });
}

function createEmployee(personalInfo, associatedWith) {
  const employee = Object.assign(personalInfo, associatedWith);
  return employee;
}

function isManager(id) {
  const empData = data.employees;
  const getManager = empData.some((man) => man.managers.find((manId) => manId === id));
  return getManager;
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  const employee = createEmployee(personalInfo, associatedWith);
  employees.push(employee);
}

function animalCount(species) {
  if (!species) {
    const animalsBySpecies = {};

    data.animals.forEach((animal) => {
      animalsBySpecies[animal.name] = animal.residents.length;
    });

    return animalsBySpecies;
  }

  const specie = data.animals.find((it) => it.name === species);
  const numberOfResidents = specie.residents.length;

  return numberOfResidents;
}

function entryCalculator(entrants = {}) {
  const keyEntrants = Object.keys(entrants);
  return keyEntrants.reduce((acc, cur) => (acc + (prices[cur] * entrants[cur])), 0);
}

function getSpecieByName(specieName) {
  return animals.find((specie) => specie.name === specieName);
}

function getSpecieResidentsName(specieName, sorted, sex) {
  let { residents } = getSpecieByName(specieName);
  if (sex) residents = residents.filter((resident) => resident.sex === sex);
  const names = residents.map((resident) => resident.name);
  if (sorted) names.sort();
  return { [specieName]: names };
}

function animalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;
  const results = animals.reduce((acc, { name, location }) => {
    if (!acc[location]) acc[location] = [];
    acc[location].push(name);
    return acc;
  }, {});
  if (includeNames) {
    return Object.entries(results).reduce((acc, [key, animalNames]) => {
      acc[key] = animalNames.map((animalName) => getSpecieResidentsName(animalName, sorted, sex));
      return acc;
    }, {});
  }
  return results;
}

function schedule(dayName) {
  const itens = Object.entries(hours);
  const result = {};
  itens.forEach((element) => {
    if (element[0] === 'Monday') {
      result[element[0]] = 'CLOSED';
    } else {
      result[element[0]] = `Open from ${hours[element[0]]
        .open}am until ${hours[element[0]].close - 12}pm`;
    }
  });
  if (dayName !== undefined) return { [dayName]: result[dayName] };
  return result;
}

function oldestFromFirstSpecies(id) {
  const especieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const especie = data.animals.find((animal) => animal.id === especieId);
  const olderAnimalAge = Math.max(...especie.residents.map((resident) => resident.age));
  return Object.values(especie.residents.find((resident) => resident.age === olderAnimalAge));
}

function increasePrices(p) {
  prices.Adult = Number(((prices.Adult + (Math.ceil(prices.Adult) * (p / 100)))).toFixed(2));
  prices.Child = Number(Math.round(prices.Child * (1 + (p / 100)) * 100) / 100);
  prices.Senior = Number(Math.round(prices.Senior * (1 + (p / 100)) * (99 + 1)) / 100);
  return prices;
}

function employeeById(id) {
  return employees.find((employee) => employee.id === id);
}

function getEmployeeFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

function employeeCoverage(idOrName) {
  const result = employees.reduce((acc, employee) => {
    acc[getEmployeeFullName(employee)] = employee.responsibleFor
      .map((animalsId) => animalsByIds(animalsId)[0])
      .map(({ name }) => name);
    return acc;
  }, {});
  if (idOrName !== undefined) {
    const employee = employeeById(idOrName) || employeeByName(idOrName);
    const employeeFullName = getEmployeeFullName(employee);
    if (employee) return { [employeeFullName]: result[employeeFullName] };
  }
  return result;
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
