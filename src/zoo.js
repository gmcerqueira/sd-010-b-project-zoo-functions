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

function animalsByIds(...ids) {
  return data.animals.filter((animal) => ids.find((id) => id === animal.id));
}

function animalsOlderThan(animal, age) {
  const animalFind = data.animals.find((searchAnimal) => searchAnimal.name === animal).residents;
  return animalFind.every((searchAge) => searchAge.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((value) => value.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) return 0;
  return Object.keys(entrants).reduce((acc, curr) => acc + data.prices[curr] * entrants[curr], 0);
}

function animalMap(options) {
  return options;
  // seu código aqui
}

function schedule(dayName) {
  const days = Object.entries(data.hours);
  return days.reduce((acc, cur) => {
    let [key, value] = cur;
    const vlHour = value.open > 0 ? value = `Open from ${value.open}am until ${value.close - 12}pm`
      : value = 'CLOSED';
    if (!dayName) {
      acc[key] = vlHour;
    } else if (dayName === key) {
      acc[dayName] = vlHour;
    }
    key = '';
    return acc;
  }, {});
}

function oldestFromFirstSpecies(id) {
  const firstAnimal = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalEmployee = data.animals.find((animal) => animal.id === firstAnimal).residents;
  const oldestAnimal = animalEmployee.map((animal) => animal).reduce((acc, cur) => {
    if (acc.age > cur.age) {
      return acc;
    }
    return cur;
  }, 0);
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  const price = Object.entries(data.prices);
  price.forEach(([type, value]) => {
    const perc = (percentage / 100) + 1;
    data.prices[type] = Math.round(value * perc * 100) / 100;
  });
}

function employeeCoverage(idOrName) {
  return idOrName;
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

// Referências: Projeto realizado em conjunto com Paulo Xavier
