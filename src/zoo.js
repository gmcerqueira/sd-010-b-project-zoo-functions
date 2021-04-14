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
  const { animals } = data;
  return animals.filter((animal) => ids.includes(animal.id));
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const animalSelector = animals.find((selectedAnimal) => selectedAnimal.name === animal).residents;
  return animalSelector.every((selectedAnimal) => selectedAnimal.age >= age);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
}

function employeeByName(employeeName) {
  const { employees } = data;
  let findEmployee = {};
  if (employees.find((employee) => employee.firstName === employeeName)) {
    findEmployee = employees.find((employee) => employee.firstName === employeeName);
  } else if (employees.find((employee) => employee.lastName === employeeName)) {
    findEmployee = employees.find((employee) => employee.lastName === employeeName);
  }
  return findEmployee;
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

function isManager(Id) {
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(Id)); // agradecimento ao amigo Dangelo Miranda pela refatoração do código.
  // return employees.some((employee) => employee.managers.some((manager) => manager === Id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(species) {
  const { animals } = data;
  const allAnimals = {};
  animals.forEach((animal) => { allAnimals[animal.name] = animal.residents.length; });
  if (species === undefined) {
    return allAnimals;
  }
  return allAnimals[species];
}

function entryCalculator(entrants) {
  const { prices } = data;
  if (typeof entrants === 'undefined') {
    return 0;
  }
  const { Adult, Senior, Child } = entrants;
  let entryPrice = 0;
  if (typeof Adult === 'number') {
    entryPrice += Adult * prices.Adult;
  }
  if (typeof Senior === 'number') {
    entryPrice += Senior * prices.Senior;
  }
  if (typeof Child === 'number') {
    entryPrice += Child * prices.Child;
  }
  return entryPrice;
} // Agradecimento ao amigo Rafael Mathias pelo auxílio no entendimento da lógica.

// function animalMap(options) {
// }

function schedule(dayName) {
  const { hours } = data;
  const weekSchedule = {};
  Object.keys(hours).forEach((day) => {
    if (hours[day].open === hours[day].close) {
      weekSchedule[day] = 'CLOSED';
    } else {
      weekSchedule[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    }
  });
  if (dayName === undefined) {
    return weekSchedule;
  }
  return { [dayName]: weekSchedule[dayName] };
} // agradecimento ao amigo Dangelo Miranda pela comreensão da lógica. Foram 2h!

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

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
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
