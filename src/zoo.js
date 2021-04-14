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

const {
  animals,
  employees,
  hours,
  prices,
} = data;

const findAnimalById = (animalId) => animals.find((animal) => animal.id === animalId);

function animalsByIds(...ids) {
  return ids.map((animalId) => findAnimalById(animalId));
}

const findByAnimalName = (animalName) => animals.find((animal) => animal.name === animalName);

function animalsOlderThan(animal, age) {
  return findByAnimalName(animal).residents.every((isOlder) => age < isOlder.age);
}

const findEmpName = (empName) =>
  employees.find((emp) => emp.firstName === empName || emp.lastName === empName);

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return findEmpName(employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const employ = {
    ...personalInfo,
    ...associatedWith,
  };
  return employ;
}

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.find((employeeId) => employeeId === id));
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
  if (species === undefined) {
    /* o return a baixo deve retornar um objeto da seguinte forma:
    {"bears": 3,
    "elephants": 4,
    "frogs": 2,
    "giraffes": 6,
    "lions": 4,
    "otters": 4,"penguins": 4,
    "snakes": 2,
    "tigers": 2,} */
    return animals.reduce((accumulator, animal) =>
      ({
        ...accumulator,
        [animal.name]: animal.residents.length,
      }), {});
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  let toPay = 0;
  Object.keys(entrants).forEach((element) => {
    const ticket = entrants[element] * prices[element];
    toPay += ticket;
  });
  return toPay;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const daysOpen = {};
  Object.keys(hours).forEach((element) => {
    if (element === 'Monday') {
      daysOpen[element] = 'CLOSED';
    } else {
      daysOpen[element] = `Open from ${hours[element].open}am until ${hours[element].close - 12}pm`;
    }
  });
  if (dayName) {
    return {
      [dayName]: daysOpen[dayName],
    };
  }
  return daysOpen;
}

function oldestFromFirstSpecies(id) {
  const getEmpById = employees.find((employee) => employee.id === id);
  const specieOne = getEmpById.responsibleFor[0];
  const getAnimal = animals.find((animal) => animal.id === specieOne);
  const oldestAnimal = getAnimal.residents.reduce((older, other) => {
    let olderAnimals = older;
    if (older.age < other.age) {
      olderAnimals = other;
    }
    return olderAnimals;
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  prices.Adult += prices.Adult * (percentage / 100);
  /*
   * creditos a Alessandra Rezende - Turma 10 - Tribo B
   * achei o arredondamento graças a uma thread no slack
   * link com explicação:
   * https://www.gilsonpaulo.com.br/artigos/arredondar-decimal-javascript
   */
  prices.Adult = Math.round(prices.Adult * 100) / 100;
  prices.Child += prices.Child * (percentage / 100);
  prices.Child = Math.round(prices.Child * 100) / 100;
  prices.Senior += prices.Senior * (percentage / 100);
  prices.Senior = Math.round(prices.Senior * 100) / 100;
  return prices;
}

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  //   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
