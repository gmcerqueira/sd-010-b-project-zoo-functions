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

// const { stat } = require('node:fs');
// const { assert } = require('node:console');
// const assert = require('assert');
const data = require('./data');

function animalsByIds(...ids) {
  const animalsId = [];

  if (ids !== undefined) {
    ids.forEach((idF) => {
      animalsId.push(data.animals.find((curr) => curr.id === idF));
    });
  }
  return animalsId;
}

function animalsOlderThan(animal, age) {
  const setAnimal = data.animals.find((curr) => curr.name === animal);
  const minimalAge = setAnimal.residents.every((curr) => curr.age > age);
  return minimalAge;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const searchFName = data.employees.find((curr) => curr.firstName === employeeName);

  if (searchFName) return searchFName;

  const searchLName = data.employees.find((curr) => curr.lastName === employeeName);
  return searchLName;
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

function isManager(id) {
  const result = data.employees.some((curr) => (
    curr.managers.some((curr2) => curr2 === id)));
  return result;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
}

function animalCount(species) {
  if (species) {
    return data.animals.find((curr) => curr.name === species).residents.length;
  }
  const animalV = {};
  data.animals.forEach(({ name, residents }) => {
    animalV[name] = residents.length;
  });
  return animalV;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) return 0;

  let valueTotal = 0;
  const entrantsKeys = Object.keys(entrants);
  entrantsKeys.forEach((key) => {
    valueTotal += entrants[key] * data.prices[key];
  });

  return valueTotal;
}

/* function AMON() {
  const states = {};
  data.animals.forEach((animal) => states[animal.location] = []);

  Object.keys(states).forEach((state) => {
    data.animals.filter((animal) => {
      animal.location === state ? states[state].push(animal.name) : 0;
    });
  });

  return states;
}

function AMINT() {
  const states = {};
  data.animals.forEach((animal) => states[animal.location] = []);
  Object.keys(states).forEach((state) => {
    states[state] = [];
    const animals = data.animals.filter((animal) => animal.location === state);
    animals.forEach((aS, index) => {
      states[state].push({});
      states[state][index][aS.name] = aS.residents.map((animal2) => animal2.name);
    })
  });
  return states;
}

function AMINTS(sex) {
  const states = {};
  data.animals.forEach((animal) => states[animal.location] = []);
  Object.keys(states).forEach((state) => {
    states[state] = [];
    const animals = data.animals.filter((animal) => animal.location === state);
    animals.forEach((aS, index) => {
      states[state].push({});
      states[state][index][aS.name] = [];
      if (!sex) {
        states[state][index][aS.name].push(aS.residents.map((animal2) => animal2.name));
      } else {
        states[state][index][aS.name].push(aS.residents.map((animal2) => animal2.sex === sex ? animal2.name : 0));
      }
    })
    console.log(states.SE.penguins);
  });
}

console.log(AMINTS());

function AMINTON(list) {
  const disorder = list;
  Object.keys(disorder).forEach((state) => {
    disorder[state].forEach((animal, index) => {
      const aniN = Object.keys(animal)[0];
      disorder[state][index][aniN].sort();
    })
  })
  return disorder;
}
*/
function animalMap(options) {
  /* if (options.includeNames === true) {
    if (options.sorted === true) {

      return AMINTON;
    }
    return AMINT();
  }

  return AMON(); */
  return options;
}

function schedule(dayName) {
  const dH = data.hours;
  if (dayName && dayName !== 'Monday') {
    const day = dH[`${dayName}`];
    const agenda = {
      [dayName]: `Open from ${day.open}am until ${(day.close) - 12}pm`,
    };
    return agenda;
  }
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  const agenda = { Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  return agenda;
}

function oldestFromFirstSpecies(id) {
  const colab = data.employees.find((employee) => employee.id === id);
  const animal = data.animals.find((animalF) => animalF.id === colab.responsibleFor[0]);
  let oldest = animal.residents[0];
  animal.residents.forEach((resident) => {
    if (resident.age > oldest.age) oldest = resident;
  });
  return Object.values(oldest);
}

function increasePrices(percentage) {
  // seu código aqui
  return percentage;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  return idOrName;
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
