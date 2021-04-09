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
// daqui pra baixo as funções são da questão 1
const validateAnimals = (element, ids) => {
  for (let index = 0; index < ids.length; index += 1) {
    if (element.id === ids[index]) {
      return element;
    }
  }
};
const validateAnimal = (element, ids) => {
  if (element.id === ids[0]) {
    return element;
  }
};
const moreThanOneId = (ids) => animals.filter((element) => validateAnimals(element, ids));
const onlyOneId = (ids) => animals.filter((element) => validateAnimal(element, ids));
// fim das funções da questão 1

// funções da questão 2
const filterAnimalNames = (element, animal) => {
  if (element.name === animal) {
    return element;
  }
};
// fim das funções da questão 2

// inicio funçoes 7
const undefinedAnimals = (item) => {
  const newObj = {};
  item.forEach((element) => {
    newObj[element.name] = element.residents.length;
  });
  return newObj;
};
// fim funções 7

// inicio funções 8
const calculateValue = (entrants) => {
  let value = 0;
  if (entrants.Adult) value += (entrants.Adult * prices.Adult);
  if (entrants.Child) value += (entrants.Child * prices.Child);
  if (entrants.Senior) value += (entrants.Senior * prices.Senior);
  return value;
};
// fim funções 8

// inicio funções 10
const hoursDay = (day) => {
  let pmHour = day.close;
  if (day.close > 12) {
    pmHour -= 12;
  }
  if (day.close === 0 && day.open === 0) return 'CLOSED';
  const daySchedule = `Open from ${day.open}am until ${pmHour}pm`;
  return daySchedule;
};
const otherDays = (day) => {
  if (day === 'Friday') return { Friday: hoursDay(hours.Friday) };
  return { Sunday: hoursDay(hours.Sunday) };
};

const accessSchedule = (day) => {
  if (day === 'Monday') return { Monday: hoursDay(hours.Monday) };
  if (day === 'Tuesday') return { Tuesday: hoursDay(hours.Tuesday) };
  if (day === 'Wednesday') return { Wednesday: hoursDay(hours.Wednesday) };
  if (day === 'Thursday') return { Thursday: hoursDay(hours.Thursday) };
  return otherDays(day);
};

const createSchedule = {
  Friday: hoursDay(hours.Friday),
  Monday: hoursDay(hours.Monday),
  Saturday: hoursDay(hours.Saturday),
  Sunday: hoursDay(hours.Sunday),
  Tuesday: hoursDay(hours.Tuesday),
  Thursday: hoursDay(hours.Thursday),
  Wednesday: hoursDay(hours.Wednesday),
};
// fim funções 10
function animalsByIds(...ids) {
  // seu código aqui
  if (!ids[0]) return [];
  if (ids.length === 1) onlyOneId(ids);
  return moreThanOneId(ids);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalNames = animals.filter((element) => filterAnimalNames(element, animal));
  return animalNames[0].residents.every((element) => element.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((el) => el.firstName === employeeName || el.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  employees.personalInfo = personalInfo;
  return Object.assign(employees.personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  const arrayOfManagers = employees.map((el) => el.managers);
  const managersFlattenArray = [].concat(...arrayOfManagers);
  return managersFlattenArray.some((element) => element === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species = animals) {
  // seu código aqui
  if (species === animals) return undefinedAnimals(animals);
  for (let x = 0; x < animals.length; x += 1) {
    if (animals[x].name === species) return animals[x].residents.length;
  }
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return calculateValue(entrants);
}

function schedule(dayName) {
  // seu código aqui
  if (!dayName) return createSchedule;
  return accessSchedule(dayName);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const findEmployee = employees.find((item) => item.id === id);
  const animal = animals.find((element) => element.id === findEmployee.responsibleFor[0])
  return Object.values(animal.residents.reduce((prev, at) => prev.age > at.age ? prev : at))
}

/*

function animalMap(options) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}
 */
module.exports = {
/*
employeeCoverage,
increasePrices,
animalMap,
*/
  oldestFromFirstSpecies,
  schedule,
  entryCalculator,
  animalCount,
  isManager,
  animalsByIds,
  createEmployee,
  animalsOlderThan,
  employeeByName,
  addEmployee,
};
