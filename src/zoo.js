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
  if (!ids) {
    return [];
  }
  return animals.filter((animal) => ids.some((id) => animal.id === id));
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const result = animals.find((dataAnimal) => dataAnimal.name === animal);
  return result.residents.every((dataAge) => dataAge.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species) {
    const animal = animals.find((element) => element.name === species);
    return animal.residents.length;
  }
  return animals.reduce((acc, cur) => {
    const { name } = cur;
    return {
      ...acc,
      [name]: cur.residents.length,
    };
  }, {});
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants) {
    const guests = Object.keys(entrants);
    return guests.reduce((acc, curr) =>
      acc + (prices[curr] * entrants[curr]), 0);
  }
  return 0;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const days = hours;
  const timetable = {};

  Object.keys(days).forEach((day) => {
    if (day === 'Monday') timetable[day] = 'CLOSED';
    else timetable[day] = `Open from ${days[day].open}am until ${days[day].close - 12}pm`;
  });

  if (dayName) return { [dayName]: timetable[dayName] };

  return timetable;
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((elment) => elment.id === id);
  const animal = animals.find((element) => element.id === employee.responsibleFor[0]);
  return Object.values(animal.residents.reduce((prev, actual) => {
    if (prev.age > actual.age) {
      return prev;
    }
    return actual;
  }));
}
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
  //   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
