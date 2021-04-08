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

const { animals } = data;
const { employees } = data;
const { prices } = data;

function animalsByIds(...ids) {
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

// ----------------------------------------------------------------------------------

function animalsOlderThan(animalName, age) {
  return animals
    .find((animal) => animal.name === animalName)
    .residents.every((resident) => resident.age >= age);
}

// ----------------------------------------------------------------------------------

function employeeByName(employeeName) {
  return employeeName
    ? employees.find((employee) =>
      employee.firstName === employeeName
      || employee.lastName === employeeName)
    : {};
}

// ----------------------------------------------------------------------------------

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// ----------------------------------------------------------------------------------

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
}

// ----------------------------------------------------------------------------------

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// ----------------------------------------------------------------------------------

function animalCount(species) {
  return species
    ? animals.find((animal) => animal.name === species).residents.length
    : animals.reduce((result, currentAnimal) => {
      const object = result;
      object[currentAnimal.name] = currentAnimal.residents.length;
      return object;
    }, {});
}

// ----------------------------------------------------------------------------------

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const keys = Object.keys(entrants);
  const values = Object.values(entrants);

  return keys.reduce((result, key, index) =>
    result + (prices[key] * values[index]),
  0);
}

// ----------------------------------------------------------------------------------

function listOfRegions() {
  return animals.reduce((result, animal) => {
    const region = result;
    if (!region[animal.location]) region[animal.location] = [];
    return region;
  }, {});
}

function defaultList() {
  const list = listOfRegions();
  animals.map((animal) => list[animal.location].push(animal.name));
  return list;
}

function animalsNames(specie, args) {
  let names = animals.find((animal) => animal.name === specie)
    .residents.map((resident) => resident.name);
  if (args.sex) {
    names = animals.find((animal) => animal.name === specie)
      .residents.filter((resident) => resident.sex === args.sex)
      .map((resident) => resident.name);
  }
  if (args.sorted) names.sort();
  return names;
}

function listAnimalsWithParams(args) {
  const list = listOfRegions();
  animals.map((animal) =>
    list[animal.location].push({ [animal.name]: animalsNames(animal.name, args) }));
  return list;
}

function animalMap(options = '') {
  if (options.includeNames) return listAnimalsWithParams(options);

  return defaultList();
}

// ----------------------------------------------------------------------------------

// function schedule(dayName) {
//   // seu código aqui
// }

// ----------------------------------------------------------------------------------

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// ----------------------------------------------------------------------------------

// function increasePrices(percentage) {
//   // seu código aqui
// }

// ----------------------------------------------------------------------------------

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  createEmployee,
  isManager,
  addEmployee,
  animalCount,
  entryCalculator,
  animalMap,
  // schedule,
  // employeeCoverage,
  // oldestFromFirstSpecies,
  // increasePrices,
};
