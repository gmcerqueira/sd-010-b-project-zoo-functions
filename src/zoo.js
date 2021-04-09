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
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * 49.99 + Senior * 24.99 + Child * 20.99;
}

function animalMap(options = 'empty') {
  const locations = ['NE','NW','SE','SW']
  if (options === 'empty' || options.includeNames !== true) {
    return locations.reduce((locationA,locationB) => ({
        ...locationA,
        [locationB]: data.animals.filter((animal) => animal.location === locationB).map((animal) => animal.name),
    }),{});
  };
  if (options.includeNames === true && (options.sex === 'female' || options.sex === 'male') && options.sorted === true) {
    return locations.reduce((locationA,locationB) => ({
      ...locationA,
      [locationB]: data.animals.filter((animal) => animal.location === locationB).map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
      resident.sex === options.sex).map((resident) => resident.name).sort() })),
    }),{});
  };
  if (options.includeNames === true && options.sorted === true) {
    return locations.reduce((locationA,locationB) => ({
      ...locationA,
      [locationB]: data.animals.filter((animal) => animal.location === locationB).map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
      resident.name).sort() })),
    }),{});
  };
  if (options.includeNames === true && (options.sex === 'female' || options.sex === 'male')) {
    return locations.reduce((locationA,locationB) => ({
      ...locationA,
      [locationB]: data.animals.filter((animal) => animal.location === locationB).map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
      resident.sex === options.sex).map((resident) => resident.name)})),  
    }),{});
  };
  if (options.includeNames === true) {
    return locations.reduce((locationA,locationB) => ({
      ...locationA,
      [locationB]: data.animals.filter((animal) => animal.location === locationB).map((animal) =>
      ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
    }),{});
  };
}

// function schedule(dayName) {
//   // seu código aqui
// }

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
  // schedule,
  animalCount,
  animalMap,
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
