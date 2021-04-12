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

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployees = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployees);
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

function entryCalculator() {
//
}

function animalMap(locations, options) {
  const map = locations;

  if (options.sorted && options.sorted === true) {
    Object.keys(map).forEach((key) => {
      map[key] = map[key].map((specie) => {
        const entries = Object.entries(specie);
        entries[0][1] = entries[0][1].sort();
        return Object.fromEntries(entries);
      });
    });
  }

  return map;
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

function employeeCoverage() {
// codigo
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
