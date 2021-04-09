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
  return ids.map((currentId) => data.animals.find(((animal) => animal.id === currentId)));
}

function animalsOlderThan(animal, age) {
  const classAnimal = data.animals.find((actualAnimal) => actualAnimal.name === animal);
  return classAnimal.residents.every((namedAnimal) => namedAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) { return {}; }
  return data.employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((employee) =>
    employee.managers.some((managersId) => managersId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function animalCount(species) {
  if (species === undefined) {
    const objAnimals = {};
    data.animals.map((animalName) => {
      objAnimals[animalName.name] = animalName.residents.length;
      return objAnimals;
    });
    return objAnimals;
  }
  return data.animals.find((animalClass) => animalClass.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) { return 0; }
  const entries = Object.entries(entrants);
  return entries.reduce(((acc, entry) => acc + (data.prices[entry[0]] * entry[1])), 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const fullSchedule = Object.entries(data.hours);
  const objSchedule = {};
  if (!dayName) {
    fullSchedule.forEach((day) => {
      if (day[1].open === 0 && day[1].close === 0) {
        objSchedule[day[0]] = 'CLOSED';
      } else {
        objSchedule[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
      }
    });
    return objSchedule;
  }
  const requestedDay = fullSchedule.find((day) => day[0] === dayName);
  if (requestedDay[1].open === 0 && requestedDay[1].close === 0) {
    objSchedule[requestedDay[0]] = 'CLOSED';
    return objSchedule;
  }
  objSchedule[requestedDay[0]] = `Open from ${requestedDay[1].open}am until ${requestedDay[1].close - 12}pm`;
  return objSchedule;
}

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
