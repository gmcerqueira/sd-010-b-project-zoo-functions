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

const getHours = (acc, [day, hour]) => {
  let msg = 'CLOSED';
  if (hour.open > 0 && hour.close > 0) {
    msg = `Open from ${hour.open}am until ${hour.close - 12}pm`;
  }
  Object.assign(acc, { [day]: msg });
  return acc;
};

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

/*
function animalMap(options) {
  if (options === undefined) {
    const locations = [...new Set(data.animals.map(({ location }) => location))];

  }
}
*/

// hours: {
//  Tuesday: { open: 8, close: 18 },
// }
// 'Tuesday': 'Open from 8am until 6pm',

function schedule(dayName) {
  const arrayHours = Object.entries(data.hours);
  const formattedHours = arrayHours.reduce(getHours, {});

  if (dayName !== undefined) {
    return { [dayName]: formattedHours[dayName] };
  }

  return formattedHours;
}

/*
function oldestFromFirstSpecies(id) {
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
