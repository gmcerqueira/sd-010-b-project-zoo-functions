const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  let messege = null;
  if (ids === undefined) {
    messege = [];
  } else {
    messege = [];
    ids.forEach((id) => messege.push(...data.animals.filter((animal) => animal.id === id)));
  }
  return messege;
}

// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
/* console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46')); */

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = data.animals.find((animalItem) => animalItem.name === animal);
  return animalName.residents.every((resident) => resident.age > age);
}

// console.log(animalsOlderThan('otters', 7));

function employeeByName(employeeName) {
  // seu código aqui
  let messege = null;
  if (employeeName === undefined) {
    messege = {};
  } else {
    messege = data.employees.find((employee) => (
      employee.firstName === employeeName || employee.lastName === employeeName));
  }
  return messege;
}

// console.log(employeeByName());

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  // seu código aqui
  return ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

/* const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  ]
};
createEmployee(personalInfo, associatedWith); */

// Não entendi como resolver:
function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return data.employees;
}

function animalCount(species) {
  // seu código aqui
  let messege = null;
  if (species === undefined) {
    const animalsPopularity = {};
    messege = data.animals.forEach(({ _id, name, residents }) => {
      animalsPopularity[name] = residents.length;
    });
    messege = animalsPopularity;
  } else {
    const itemAnimals = data.animals.find((animal) => animal.name === species);
    messege = itemAnimals.residents.length;
  }
  return messege;
}

/* console.log(animalCount('snakes')); */

function entryCalculator(entrants) {
  // seu código aqui
  let messege = null;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    messege = 0;
  } else {
    const values = [];
    const keysPrices = Object.keys(data.prices);
    const keysEntrants = Object.keys(entrants);
    keysEntrants.forEach((keyEntrant) => {
      const findKeyPrice = keysPrices.find((keyPrice) => keyPrice === keyEntrant);
      values.push(data.prices[findKeyPrice] * entrants[keyEntrant]);
    });
    messege = values.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return messege;
}

/* console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 })); // 187.94
console.log(entryCalculator({ 'Adult': 1 })); // 49.99
console.log(entryCalculator({ 'Senior': 1 }));// 24.99
console.log(entryCalculator({ 'Child': 1 }));// 20.99
console.log(entryCalculator({ 'Child': 1, 'Senior': 1 }));// 45.98
console.log(entryCalculator());// 0
console.log(entryCalculator({}));// 0 */

const getAnimalsEndLocation = () => (data.animals.map((animal) => (
  { name: animal.name, location: animal.location })));

const getAnimalsSeparetedByLocale = (location, animalsNameLocation) => {
  const animalArray = [];
  const animals = animalsNameLocation.filter((animal) => animal.location === location);
  animals.forEach((animal) => {
    animalArray.push(animal.name);
  });
  return animalArray;
};

/* const getResidentsAnimals = (animalArray) => {
  animalArray.forEach((animalName) => {
    const getAnimalOfData = data.animals.find((animal) => animal.name === animalName);
    console.log(getAnimalOfData.residents);
  });
}; */
/* const getNamesAnimals = (locations, animalsNameLocation) => {
  const arrayReturn = {};
  locations.forEach((location) => {
    const objAnimals = {};
    const animalArray = getAnimalsSeparetedByLocale(location, animalsNameLocation);
    getResidentsAnimals(animalArray);
  });
};
 */
function animalMap(options) {
  // seu código aqui
  let messege = null;

  const animalsNameLocation = getAnimalsEndLocation();
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const arrayReturn = {};
  if (options === undefined) {
    locations.forEach((location) => {
      const objAnimals = {};
      const animalArray = getAnimalsSeparetedByLocale(location, animalsNameLocation);
      objAnimals[location] = animalArray;
      Object.assign(arrayReturn, objAnimals);
    });
    messege = arrayReturn;
  } else if (options.includeNames === true) {
    // messege = getNamesAnimals(locations, animalsNameLocation);
  }
  return messege;
}

// console.log(animalMap());
// console.log(animalMap({ includeNames: true }));

function schedule(dayName) {
  // seu código aqui
  const hoursZoo = data.hours;
  let messege = null;
  const scheduleHours = {};
  Object.keys(hoursZoo).forEach((dayOfWeek) => {
    scheduleHours[dayOfWeek] = (
      hoursZoo[dayOfWeek].open === 0
      && hoursZoo[dayOfWeek].close === 0
        ? 'CLOSED'
        : `Open from ${hoursZoo[dayOfWeek].open}am until ${hoursZoo[dayOfWeek].close - 12}pm`);
  });
  if (dayName === undefined) {
    messege = scheduleHours;
  } else {
    const hourDayOfWeek = {};
    hourDayOfWeek[dayName] = scheduleHours[dayName]; messege = hourDayOfWeek;
  }
  return messege;
}

/* console.log(schedule('Monday')); */

const getEmployeeById = (id) => {
  const employeeSelected = data.employees.find((employee) => (
    employee.id === id));

  return employeeSelected;
};

const getOldestAgeOfAnimal = (primerSpecie) => {
  const animalSpecie = data.animals.find((animal) => (
    animal.id === primerSpecie
  ));

  let oldestAgeAnimal = 0;
  animalSpecie.residents.forEach((animal) => {
    if (animal.age > oldestAgeAnimal) {
      oldestAgeAnimal = animal.age;
    }
  });
  return (oldestAgeAnimal);
};

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeSelected = getEmployeeById(id);
  const primerSpecie = employeeSelected.responsibleFor[0];
  const oldestAgeAnimal = getOldestAgeOfAnimal(primerSpecie);

  const especies = data.animals;
  const getAnimalsByIdSpecie = especies.find((animal) => (animal.id === primerSpecie));

  const getOldestAnimal = getAnimalsByIdSpecie.residents.find((resident) => (
    resident.age === oldestAgeAnimal
  ));

  const { name, sex, age } = getOldestAnimal;

  return [name, sex, age];
}

/* console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad')); */

function increasePrices(percentage) {
  // seu código aqui
  const percentagePercent = (1 + (percentage / 100));
  const pricesIncreases = {};
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    const value = data.prices[key] * percentagePercent;
    pricesIncreases[key] = (Math.round(value * 100) / 100);
  });
  return pricesIncreases;
}

/* console.log(increasePrices(50)); */
const getAnimal = (animalId) => {
  const animalObj = data.animals.find((animal) => animal.id === animalId);
  return animalObj.name;
};

const getEmployeeResponsableForAnimals = () => {
  const objEmployeesAndSpecies = {};
  data.employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const animals = responsibleFor.map((animalId) => (
      getAnimal(animalId)
    ));
    objEmployeesAndSpecies[`${firstName} ${lastName}`] = animals;
  });
  return objEmployeesAndSpecies;
};

const getAnimalsByIdOrFirstName = (idOrName) => {
  const objEmployeesAndSpecies = {};
  let employee = null;
  if (data.employees.find(({ id }) => id === idOrName)) {
    employee = data.employees.find(({ id }) => id === idOrName);
  } else if (data.employees.find(({ firstName }) => firstName === idOrName)) {
    employee = data.employees.find(({ firstName }) => firstName === idOrName);
  } else if (data.employees.find(({ lastName }) => lastName === idOrName)) {
    employee = data.employees.find(({ lastName }) => lastName === idOrName);
  }
  const animals = employee.responsibleFor.map((animalId) => (
    getAnimal(animalId)
  ));
  const { firstName, lastName } = employee;
  objEmployeesAndSpecies[`${firstName} ${lastName}`] = animals;

  return objEmployeesAndSpecies;
};

function employeeCoverage(idOrName) {
  let messege = null;
  if (idOrName === undefined) {
    messege = getEmployeeResponsableForAnimals();
  } else {
    messege = getAnimalsByIdOrFirstName(idOrName);
  } return messege;
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
