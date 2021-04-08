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

function animalsByIds(ids) {
  // seu código aqui
const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals
    .find(zooAnimal => zooAnimal.name === animal)
    .residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find(
    employee =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  return employees.filter(employee => employee.managers.includes(id))
  .length > 0;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce((accObj, animal) => {
      accObj[animal.name] = animal.residents.length;
      return accObj;
    }, {});
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entries = Object.keys(entrants);
  return entries.reduce((total, each) => total + (entrants[each] * prices[each]), 0);
}
//-------------------------------------------------------------------
function reduce(arrayOfLocations) {
  const result = arrayOfLocations.reduce((acc, cur) => {
    const key = Object.keys(cur);
    if (!acc[key]) {
      acc[key] = [cur[key]];
    } else {
      acc[key].push(cur[key]);
    }
    return acc;
  }, {});
  return result;
}

function animalsByLocation() {
  const locations = animals.map(animal => ({
    [animal.location]: animal.name,
  }));
  return locations;
}

function animalMap(options) {
  // seu código aqui
  const { includeNames = false, sorted = false, sex } = options || {};

  let reducedList = reduce(animalsByLocation());

  const animalsList = animals.map(animal => ({
    [animal.location]: { [animal.name]: animal.residents },
  }));
  if (includeNames) {
    reducedList = reduce(animalsList);
    const regions = Object.keys(reducedList);
    regions.forEach(region =>
      reducedList[region].forEach((species) => {
        const type = Object.keys(species)[0];
        if (sex) {
          species[type] = species[type]
            .filter(resident => resident.sex === sex)
            .map(animal => animal.name);
        } else {
          species[type] = species[type].map(name => name.name);
        }
        if (sorted) {
          species[type].sort();
        }
      }),
    );
  }
  return reducedList;
}

function schedule(dayName) {
  // seu código aqui
  const weekdays = Object.keys(hours);
  const result = weekdays.reduce((agenda, day) => {
    if (day === 'Monday') {
      agenda[day] = 'CLOSED';
      return agenda;
    }
    agenda[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    return agenda;
  }, {});
  if (dayName) return { [dayName]: result[dayName] };
  return result;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const firstResponsibleFor = employees.find(employee => employee.id === id).responsibleFor[0];
  const caredAnimals = animals.find(animal => animal.id === firstResponsibleFor).residents;
  const oldest = caredAnimals.sort((animal1, animal2) => animal2.age - animal1.age)[0];
  const { name, sex, age } = oldest;
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  const pricesKeys = Object.keys(prices);
  pricesKeys.forEach((price) => {
    prices[price] = Math.round(prices[price] * (1 + (percentage / 100)) * 100) / 100;
  });
}

function getAnimalsById(animalIds) {
  return animalIds.map(id => animals.find(animal => animal.id === id).name);
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const employeesTable = {};
  employees.forEach((employee) => {
    const { firstName, lastName, responsibleFor } = employee;
    const fullName = `${firstName} ${lastName}`;
    const response = getAnimalsById(responsibleFor);
    employeesTable[fullName] = response;
  });
  if (!idOrName) return employeesTable;
  const result = {};
  const names = employees.find(
    employee =>
      idOrName === employee.firstName || idOrName === employee.lastName || idOrName === employee.id,
  );
  const fullName = `${names.firstName} ${names.lastName}`;
  const responsible = employeesTable[fullName];
  result[fullName] = responsible;
  return result;
}
