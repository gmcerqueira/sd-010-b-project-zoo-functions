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

const { animals, employees, prices, hours } = require('./data');

// const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter((animal, index) => animal.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  const findName = animals.find((name) => name.name === animal);
  return findName.residents.every((element) => element.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((p) => p.firstName === employeeName || p.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const allEmployee = { ...personalInfo, ...associatedWith };
  return allEmployee;
}

function isManager(id) {
  return employees.some((manager, index) => id === manager.managers[index]);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  let numberOfAnimals = {};
  if (species === undefined) {
    animals.forEach((nome) => {
      numberOfAnimals[nome.name] = nome.residents.length;
      return numberOfAnimals;
    });
  } else {
    const lookForAnimal = animals.find((name) => name.name === species);
    numberOfAnimals = lookForAnimal.residents.length;
    return numberOfAnimals;
  }
  return numberOfAnimals;
}

function entryCalculator(entrants) {
  if (entrants === {} || entrants === undefined) {
    return 0;
  }
  const { Adult: Ad, Child: Ch, Senior: Se } = prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Ad * Adult + Ch * Child + Se * Senior;
}

// function animalMap(options) {

// }

function allDaysMessage() {
  const allDays = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  return allDays;
}

function pmToAm(hora) {
  let novaHora = hora;
  if (novaHora > 12) {
    novaHora -= 12;
  }
  return novaHora;
}

function schedule(dayName) {
  const whatDay = hours[`${dayName}`];
  if (dayName === 'Monday') {
    return {
      Monday: 'CLOSED',
    };
  }
  if (dayName === undefined) {
    return allDaysMessage();
  }
  return { [dayName]: `Open from ${pmToAm(whatDay.open)}am until ${pmToAm(whatDay.close)}pm` };
}

function oldestFromFirstSpecies(id) {
  let older = 0;
  const animalToLook = employees.find((employee) => employee.id === id);
  const animalID = animalToLook.responsibleFor.find((animal) => animal[0]);
  const getAnimal = animals.find((animal) => animal.id === animalID).residents;
  getAnimal.forEach((an) => {
    if (an.age > older) {
      older = an.age;
    }
  });
  const olderAnimal = getAnimal.find((value) => value.age === older);
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}

function percentageCalc(valor, percentage) {
  const multiply = (valor * percentage) / 100;
  const total = valor + multiply;
  return total;
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round(percentageCalc(prices[key], percentage) * 100) / 100;
  });
}

function employeeCoverage(idOrName) {
  if (idOrName === undefined) {
    return employees;
  }
}
console.log(employeeCoverage());

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
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
