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
const { hours } = data;

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
function specificWeekDay(day) {
  const line = {};
  if (hours[day].open === 0 || hours[day].close === 0) line[day] = 'CLOSED';
  else line[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  return line;
}
function defaultSchedule() {
  const days = Object.entries(hours);
  const scheduleTable = days.reduce((result, day) => {
    const line = result;
    if (day[1].open === 0 || day[1].close === 0) line[day[0]] = 'CLOSED';
    else line[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    return line;
  }, {});
  return scheduleTable;
}

function schedule(dayName) {
  if (dayName) return specificWeekDay(dayName);

  return defaultSchedule();
}

// ----------------------------------------------------------------------------------

function oldestFromFirstSpecies(id) {
  const employeeResponsible = employees.find((employee) => employee.id === id);
  const firstAnimalId = employeeResponsible.responsibleFor[0];
  const { name, sex, age } = animals.find((animal) => animal.id === firstAnimalId)
    .residents.reduce((result, resident) => {
      if (resident.age > result.age) return resident;
      return result;
    });
  return [name, sex, age];
}

// ----------------------------------------------------------------------------------

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] = parseFloat(Math.round((prices[key]
      * (1 + percentage / 100)) * 100) / 100);
  });
}

// ----------------------------------------------------------------------------------

function animalsCovered(employee) {
  const ids = employee.responsibleFor;
  const listAnimals = ids.map((id) => animals.find((animal) => animal.id === id).name);
  return listAnimals;
}

function employeeResponsibilities(searchParam) {
  const employeeResponsible = employees.find((employee) =>
    employee.id === searchParam
    || employee.firstName === searchParam
    || employee.lastName === searchParam);
  return {
    [`${employeeResponsible.firstName} ${employeeResponsible.lastName}`]:
      animalsCovered(employeeResponsible),
  };
}

function employeeCoverage(idOrName) {
  if (idOrName) return employeeResponsibilities(idOrName);

  return employees.reduce((result, employee) => {
    const line = result;
    line[`${employee.firstName} ${employee.lastName}`] = animalsCovered(employee);
    return line;
  }, {});
}

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
  schedule,
  oldestFromFirstSpecies,
  increasePrices,
  employeeCoverage,
};
