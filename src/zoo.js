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

// -------------------------------- second functions --------------------------------
const getHours = (acc, [day, hour]) => {
  let msg = 'CLOSED';
  if (hour.open > 0 && hour.close > 0) {
    msg = `Open from ${hour.open}am until ${hour.close - 12}pm`;
  }
  Object.assign(acc, { [day]: msg });
  return acc;
};

const getAnimalsLocarions = (acc, current) => ({
  ...acc,
  [current.location]: [...acc[current.location],
    { [current.name]: current.residents }],
});
const objDefault = { NE: [], NW: [], SE: [], SW: [] };

const getOldAnimal = (acc, { name, sex, age }) => {
  if (age > acc[2]) {
    return [name, sex, age];
  }
  return acc;
};

function getAnimals(idAnimals) {
  const namesAnimals = [];
  idAnimals.forEach((idAnimal) => {
    namesAnimals.push(data.animals.find(({ id }) => id === idAnimal).name);
  });
  return namesAnimals;
}

const getEmployeesreduce = (acc, { firstName, lastName, responsibleFor }) => {
  Object.assign(acc, { [`${firstName} ${lastName}`]: getAnimals(responsibleFor) });
  return acc;
};

// -------------------------------- Main Functions --------------------------------
function animalsByIds(...ids) {
  return ids.map((idParameter) => data.animals
    .find(({ id }) => id === idParameter));
}

function animalsOlderThan(animal, ageP) {
  const objAnimal = data.animals.find(({ name }) => name === animal);
  return objAnimal.residents.every(({ age }) => age > ageP);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  return data.employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];

  return managers.some((ele) => ele === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species === undefined) {
    return data.animals.reduce((acc, { name, residents }) => {
      Object.assign(acc, { [name]: residents.length });
      return acc;
    }, {});
  }
  return data.animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  return Object.entries(entrants)
    .reduce((acc, entrant) => acc + (data.prices[entrant[0]] * entrant[1]), 0);
}

function animalMap(options) {
  const objAnimalsLocations = data.animals.reduce(getAnimalsLocarions, objDefault);

  console.log(objAnimalsLocations, options);
}

function schedule(dayName) {
  const arrayHours = Object.entries(data.hours);
  const formattedHours = arrayHours.reduce(getHours, {});

  if (dayName !== undefined) {
    return { [dayName]: formattedHours[dayName] };
  }

  return formattedHours;
}

function oldestFromFirstSpecies(idp) {
  const firstAnimal = data.employees.find(({ id }) => id === idp).responsibleFor[0];
  const animals = data.animals.find(({ id }) => id === firstAnimal).residents;
  const oldAnimal = animals.reduce(getOldAnimal, ['', '', 0]);

  return oldAnimal;
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((key) => {
    const price = data.prices[key] + ((data.prices[key] * percentage) / 100);
    data.prices[key] = parseFloat((price + 0.001).toFixed(2));
  });
}

function employeeCoverage(idOrName) {
  const objEmployeeCoverage = data.employees
    .reduce(getEmployeesreduce, {});

  if (idOrName === undefined) return objEmployeeCoverage;

  const employee = data.employees
    .find(({ id, firstName, lastName }) => (
      id === idOrName || firstName === idOrName || lastName === idOrName
    ));

  const fullName = `${employee.firstName} ${employee.lastName}`;
  return { [fullName]: objEmployeeCoverage[fullName] };
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
