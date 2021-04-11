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
  const array = [];
  ids.forEach((parmItem) => animals.filter((animal) => {
    if (parmItem === animal.id) {
      array.push(animal);
    }
    return array;
  }));
  return array;
}

function animalsOlderThan(animal, age) {
  const array = animals.filter((element) => element.name === animal);
  let boo = '';
  array.forEach((element) => {
    boo = element.residents.every((obj) => obj.age > age);
  });
  return boo;
}

function employeeByName(employeeName) {
  const employ = employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  const obj = { ...employ };
  return obj;
}

function createEmployee(personalInfo, associatedWith) {
  const obj = { ...personalInfo, ...associatedWith };
  return obj;
}

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function addEmployee(id, firstName, lastName,
  managers = [], responsibleFor = []) {
  const obj = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(obj);
}
function animalCount(species) {
  let number = 0;
  const obj = {};
  animals.forEach((element) => {
    if (element.name === species) {
      number = element.residents.length;
    } else if (species === undefined) {
      obj[element.name] = element.residents.length;
    }
  });
  if (species === undefined) {
    return obj;
  }
  return number;
} animalCount();

function entryCalculator(entrants) {
  let count = 0;
  if (entrants === undefined || Object.keys(entrants).length < 1) {
    return 0;
  }
  Object.keys(entrants).forEach((param) => {
    count += entrants[param] * prices[param];
  });
  return count;
}

// function animalMap(options) {
//   Digite seu codigo
// }

function schedule(dayName) {
  const obj = {};
  const key = Object.keys(hours);
  if (dayName === undefined) {
    key.forEach((element) => {
      obj[element] = `Open from ${hours[element].open}am until ${hours[element].close - 12}pm`;
      obj.Monday = 'CLOSED';
    });
    return obj;
  } if (dayName === 'Monday') {
    obj.Monday = 'CLOSED';
    return obj;
  }
  const { open, close } = hours[dayName];
  obj[dayName] = `Open from ${open}am until ${close - 12}pm`;
  return obj;
}

function oldestFromFirstSpecies(id) {
  const people = employees.filter((element) => element.id === id);
  let animal = '';
  people.forEach((element) => {
    animal = animalsByIds(element.responsibleFor[0]);
  });
  const array = Object.values(animal).map((element) => {
    const arr = Object.values(element.residents);
    return arr.reduce((acc, next) => ((acc.age > next.age) ? acc : next));
  });
  const saida = [array[0].name, array[0].sex, array[0].age];
  return saida;
}

function increasePrices(percentage) {
  const mult = percentage / 100;
  Object.keys(prices).forEach((element) => {
    prices[element] += prices[element] * mult + 0.001;
    prices[element] = parseFloat((prices[element]).toFixed(2));
  });
  return prices;
}

function employeeCoverage(idOrName) {
  function retornaAnimal(people) {
    let peopleFullName; let animal = ''; const ob = {};
    people.forEach((element) => {
      animal = animalsByIds(...element.responsibleFor);
      peopleFullName = `${element.firstName} ${element.lastName}`;
      const array = Object.values(animal).map((gatinho) => gatinho.name);
      ob[peopleFullName] = array;
    });
    return ob;
  }
  if (idOrName !== undefined) {
    const people = employees.filter((element) => element.firstName === idOrName
    || element.lastName === idOrName || element.id === idOrName);
    return retornaAnimal(people);
  } if (idOrName === undefined) {
    const people = employees.map((element) => element);
    return retornaAnimal(people);
  }
}

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
