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
  // seu código aqui
  const animalsArray = [];
  ids.forEach((id) => {
    animalsArray.push(data.animals.find((animal) => animal.id === id));
  });
  return animalsArray;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const targetAnimal = data.animals.find((animalArray) => animalArray.name === animal);
  return targetAnimal.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employeeData = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return employeeData === undefined ? {} : employeeData;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.find((idCode) => idCode === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species = 'all') {
  // seu código aqui
  const allAnimals = data.animals.reduce((a, b) => ({
    ...a,
    [b.name]: b.residents.length,
  }), {});
  return species === 'all' ? allAnimals
    : data.animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants = undefined) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const {
    Adult = 0, Senior = 0, Child = 0,
  } = entrants;
  return Adult * 49.99 + Senior * 24.99 + Child * 20.99;
}

function filteredAnimalMap(animals, options) {
  return animals.map((animal) => {
    let {
      residents,
    } = animal;
    if (options.sex) {
      residents = residents.filter((resident) => resident.sex === options.sex);
    }
    residents = residents.map((resident) => resident.name);
    if (options.sorted === true) {
      residents = residents.sort();
    }
    return {
      [animal.name]: residents,
    };
  });
}

function animalMap(options = {}) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const result = locations.reduce((acc, curr) => {
    let animals = data.animals.filter((animal) => animal.location === curr);
    if (options.includeNames === true) {
      animals = filteredAnimalMap(animals, options);
    } else {
      animals = animals.map((animal) => animal.name);
    }
    const location = {
      ...acc,
      [curr]: animals,
    };
    return location;
  }, {});
  return result;
}

function schedule(dayName = 'def') {
  const schedules = Object.entries(data.hours);
  const time = schedules.reduce((weekDayA, weekDayB) => ({
    ...weekDayA,
    [weekDayB[0]]: `Open from ${weekDayB[1].open}am until ${weekDayB[1].close - 12}pm`,
  }), {});
  time.Monday = 'CLOSED';
  if (dayName === 'def') {
    return time;
  }
  const target = {};
  target[dayName] = time[dayName];
  return target;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const target = data.employees.find((employee) => employee.id === id);
  let targetAnimal = data.animals.find((animal) => animal.id === target.responsibleFor[0]);
  const { residents } = targetAnimal;
  // eslint-disable-next-line prefer-destructuring
  targetAnimal = residents.sort((a, b) => b.age - a.age)[0];
  return [targetAnimal.name, targetAnimal.sex, targetAnimal.age];
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
  animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
