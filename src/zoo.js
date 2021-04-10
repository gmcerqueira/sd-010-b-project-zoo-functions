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
  const identifications = ids;
  if (identifications.length === 0) { return identifications; }
  // Código original:
  // const animals = [];
  // identifications.forEach((element) => {
  //   const animal = data.animals.filter((element2) => element2.id === element);
  //   animals.push(animal[0]);
  // });
  // Constante abaixo modificada a partir do código do Vinicius Bodra, postado no Slack na thread: https://trybecourse.slack.com/archives/C01LCSLCZ8D/p1617911347298100
  const animals = data.animals.filter((item, index) => (item.id === identifications[index]));
  return animals;
}

function animalsOlderThan(animal, age) {
  const animals = data.animals.filter((entry) => entry.name === animal);
  const residents = animals.map((entry) => entry.residents);
  const ages = residents[0].map((entry) => entry.age);
  let response = true;
  ages.forEach((element) => {
    if (element < age) { response = false; }
  });
  return response;
}

function employeeByName(employeeName) {
  if (!employeeName) { return {}; }
  const firstNameObject = data.employees.filter((entry) => entry.firstName === employeeName);
  const lastNameObject = data.employees.filter((entry) => entry.lastName === employeeName);
  if (firstNameObject[0]) { return firstNameObject[0]; }
  return lastNameObject[0];
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  const managers = data.employees.map((entry) => entry.managers);
  const managersArray = [];
  managers.forEach((element) => {
    managersArray.push(...element);
  });
  if (managersArray.find((element) => element === id)) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployee);
  return data.employees;
}

function animalCount(species) {
  if (!species) {
    const animals = data.animals.map((entry) => entry.name);
    const residents = data.animals.map((entry) => entry.residents);
    const count = [];
    residents.forEach((element) => {
      count.push(element.length);
    });
    const animalsCount = animals.map((entry, index) => [entry, count[index]]);
    const result = {};
    animalsCount.forEach(([animal, elemento]) => {
      result[animal] = elemento;
    });
    return result;
  }
  const animals = data.animals.filter((entry) => entry.name === species);
  const residents = animals.map((entry) => entry.residents);
  return residents[0].length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const prices = Object.entries(data.prices).sort();
  const people = Object.entries(entrants);
  let grossProfit = 0;
  people.forEach((element) => {
    switch (element[0]) {
    case 'Adult': grossProfit += element[1] * prices[0][1];
      break;
    case 'Child': grossProfit += element[1] * prices[1][1];
      break;
    default: grossProfit += element[1] * prices[2][1];
      break;
    }
  });
  return grossProfit;
}

function animalMapNoOptions() {
  const response = {};
  const animals = data.animals.map((entry) => [entry.location, entry.name]);
  const directions = ['NE', 'NW', 'SE', 'SW'];
  directions.forEach((direction) => {
    const directionAnimals = [];
    animals.forEach((animal) => {
      if (direction === animal[0]) {
        directionAnimals.push(animal[1]);
      }
    });
    response[direction] = directionAnimals;
  });
  return response;
}

function directionsUnsorted(directions, animals) {
  const response = {};
  directions.forEach((direction) => {
    const animalsDirection = animals.filter((element) => element[0] === direction);
    const animalsArray = [];
    animalsDirection.forEach((animal) => {
      animalsArray.push({ [animal[1]]: animal[2] });
    });
    response[direction] = animalsArray;
  });
  return response;
}

function directionsSorted(directions, animals) {
  const response = {};
  directions.forEach((direction) => {
    const animalsDirection = animals.filter((element) => element[0] === direction);
    const animalsArray = [];
    animalsDirection.forEach((animal) => {
      animalsArray.push({ [animal[1]]: animal[2].sort() });
    });
    response[direction] = animalsArray;
  });
  return response;
}

function animalMapNames() {
  const animals = data.animals.map((entry) =>
    [entry.location, entry.name, entry.residents.map((entry2) => entry2.name)]);
  const directions = ['NE', 'NW', 'SE', 'SW'];
  return directionsUnsorted(directions, animals);
}

function animalMapNamesSorted() {
  const animals = data.animals.map((entry) =>
    [entry.location, entry.name, entry.residents.map((entry2) => entry2.name)]);
  const directions = ['NE', 'NW', 'SE', 'SW'];
  return directionsSorted(directions, animals);
}

function animalMapNamesSex(sex) {
  console.log('entrei');
  const animals = data.animals.map((entry) =>
    [entry.location, entry.name, entry.residents.filter((resident) =>
      resident.sex === sex).map((entry2) => entry2.name)]);
  const directions = ['NE', 'NW', 'SE', 'SW'];
  return directionsUnsorted(directions, animals);
}

function animalMapNamesOrderedSex(sex) {
  console.log('entrei');
  const animals = data.animals.map((entry) =>
    [entry.location, entry.name, entry.residents.filter((resident) =>
      resident.sex === sex).map((entry2) => entry2.name)]);
  const directions = ['NE', 'NW', 'SE', 'SW'];
  return directionsSorted(directions, animals);
}

function chooseIncludeNames(options) {
  if (options.sorted && options.sex) { return animalMapNamesOrderedSex(options.sex); }
  if (options.sorted) { return animalMapNamesSorted(); }
  if (options.sex) { return animalMapNamesSex(options.sex); }
  return animalMapNames();
}

// -------------------------------------------------------
function animalMap(options) {
  if (!options) { return animalMapNoOptions(); }
  if (options.includeNames) { return chooseIncludeNames(options); }
  // if (options.includeNames && options.sorted && options.sex) { return animalMapNamesOrderedSex(options.sex); }
  // if (options.includeNames && options.sorted) { return animalMapNamesSorted(); }
  // if (options.includeNames && options.sex) { return animalMapNamesSex(options.sex); }
  // if (options.includeNames) { return animalMapNames(); }
}

console.table(animalMap({ includeNames: true, sex: 'female', sorted: true }));

function schedule(dayName) {
  const hours = Object.entries(data.hours);
  const returnObject = {};
  hours.forEach(([day, { open, close }]) => {
    returnObject[day] = `Open from ${open}am until ${close - 12}pm`;
    returnObject.Monday = 'CLOSED';
  });
  if (!dayName) { return returnObject; }
  if (dayName) {
    const object = {};
    object[dayName] = returnObject[dayName];
    return object;
  }
}

function oldestFromFirstSpecies(id) {
  const employee = data.employees.filter((element) => element.id === id);
  const animalId = employee[0].responsibleFor[0];
  const temp = data.animals.filter((element) =>
    element.id === animalId).map((element) => element.residents);
  const residents = [...temp[0]];
  let age = 0;
  residents.forEach((element) => {
    if (element.age > age) { age = element.age; }
  });
  const result = residents.find((element) => element.age === age);
  return [result.name, result.sex, result.age];
}

function increasePrices(percentage) {
  const prices = Object.entries(data.prices);
  const newPrices = {};
  prices.forEach((element) => {
    const percent = 1 + percentage / 100;
    newPrices[element[0]] = (Math.round((element[1] * percent) * 100)) / 100;
  });
  data.prices = newPrices;
}

function allEmployeesCoverage() {
  const response = {};
  const coverage = data.employees.map((employee) =>
    [employee.firstName, employee.lastName, employee.id, employee.responsibleFor]);
  const idsNames = data.animals.map((animal) => [animal.id, animal.name]);
  coverage.forEach((employee) => {
    const names = [];
    employee[3].forEach((id) => {
      const animal = idsNames.find((element) => element[0] === id);
      names.push(animal[1]);
      response[`${employee[0]} ${employee[1]}`] = names;
    });
  });
  return response;
}

function idCoverage(idOrName) {
  const complete = allEmployeesCoverage();
  let name = data.employees.find((entry) => entry.id === idOrName);
  name = `${name.firstName} ${name.lastName}`;
  const object = {};
  object[name] = complete[name];
  return object;
}

function nameCoverage(idOrName) {
  const complete = allEmployeesCoverage();
  let name = data.employees.find((entry) => entry.firstName === idOrName);
  name = `${name.firstName} ${name.lastName}`;
  const object = {};
  object[name] = complete[name];
  return object;
}

function lastNameCoverage(idOrName) {
  const complete = allEmployeesCoverage();
  let name = data.employees.find((entry) => entry.lastName === idOrName);
  name = `${name.firstName} ${name.lastName}`;
  const object = {};
  object[name] = complete[name];
  return object;
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return allEmployeesCoverage();
  }
  if (data.employees.find((entry) => entry.id === idOrName)) {
    return idCoverage(idOrName);
  }
  if (data.employees.find((entry) => entry.firstName === idOrName)) {
    return nameCoverage(idOrName);
  }
  if (data.employees.find((entry) => entry.lastName === idOrName)) {
    return lastNameCoverage(idOrName);
  }
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
