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

function AMON() {
  const states = {};
  data.animals.forEach((animal) => {
    states[animal.location] = [];
  });

  Object.keys(states).forEach((state) => {
    data.animals.forEach((animal) => {
      if (animal.location === state) states[state].push(animal.name);
    });
  });
  return states;
}

function AMINT() {
  const states = {};
  data.animals.forEach((animal) => {
    states[animal.location] = [];
  });

  Object.keys(states).forEach((state) => {
    states[state] = [];
    const animals = data.animals.filter((animal) => animal.location === state);
    animals.forEach((aS, index) => {
      states[state].push({});
      states[state][index][aS.name] = aS.residents.map((animal2) => animal2.name);
    });
  });
  return states;
}

function AMINTS(sex) {
  const states = {};
  data.animals.forEach((animal) => {
    states[animal.location] = [];
  });
  Object.keys(states).forEach((state) => {
    states[state] = [];
    const animals = data.animals.filter((animal) => animal.location === state);
    animals.forEach((aS, index) => {
      states[state].push({});
      states[state][index][aS.name] = [];
      aS.residents.forEach((resident) => {
        if (resident.sex === sex) {
          states[state][index][aS.name].push(resident.name);
        }
      });
    });
  });
  return states;
}

function AMINTON(list) {
  const disorder = list;
  Object.keys(disorder).forEach((state) => {
    disorder[state].forEach((animal, index) => {
      const aniN = Object.keys(animal)[0];
      disorder[state][index][aniN].sort();
    });
  });
  return disorder;
}

function AMOptions(options) {
  if (options.sorted === true && options.sex) return AMINTON(AMINTS(options.sex));
  if (options.sorted === true) return AMINTON(AMINT());
  if (options.sex) return AMINTS(options.sex);
  return AMINT();
}

function animalMap(options) {
  if (options) {
    return (options.includeNames === true ? AMOptions(options) : AMON());
  }
  return AMON();
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
  const { prices } = data;
  let adultValue;
  let seniorValue;
  let childValue;

  Object.values(prices).forEach((price, index) => {
    const calculator = Math.ceil(price * (100 + percentage)) / 100;
    if (index === 0) adultValue = calculator;
    if (index === 1) seniorValue = calculator;
    if (index === 2) childValue = calculator;
  });

  data.prices = { Adult: adultValue, Senior: seniorValue, Child: childValue };
  return data.prices;
}

function employeeListResponsibleFor() {
  const coverageList = {};
  data.employees.forEach((emplo) => {
    coverageList[`${emplo.firstName} ${emplo.lastName}`] = [];
    emplo.responsibleFor.forEach((aniId) => {
      data.animals.forEach((animal) => {
        if (animal.id === aniId) {
          coverageList[`${emplo.firstName} ${emplo.lastName}`].push(animal.name);
        }
      });
    });
  });
  return coverageList;
}

function employeeById(id) {
  return data.employees.find((emplo) => emplo.id === id);
}

function employeeByFirstName(firstName) {
  return data.employees.find((emplo) => emplo.firstName === firstName);
}

function employeeByLastName(lastName) {
  return data.employees.find((emplo) => emplo.lastName === lastName);
}

function employeeResponsibleBy(employeeArr) {
  const employee = employeeArr.find((emplo) => emplo);
  const employeeName = `${employee.firstName} ${employee.lastName}`;
  const emploObj = {};
  emploObj[employeeName] = [];

  employee.responsibleFor.forEach((animalId) => {
    data.animals.forEach((animal) => {
      if (animal.id === animalId) {
        emploObj[employeeName].push(animal.name);
      }
    });
  });

  return emploObj;
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return employeeListResponsibleFor();
  }
  const findEmployee = [];

  findEmployee.push(employeeById(idOrName));
  findEmployee.push(employeeByFirstName(idOrName));
  findEmployee.push(employeeByLastName(idOrName));

  return employeeResponsibleBy(findEmployee);
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
