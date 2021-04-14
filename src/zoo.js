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

// const {
//   animals,
//   employees,
//   prices,
// } = require('./data');

const data = require('./data');

const {
  animals,
  employees,
  prices,
  hours,
} = data;

function animalsByIds(...ids) {
  const animalsData = ids.map((id) => animals.find((animal) => (animal.id === id)));
  console.log(animalsData);
  return animalsData;
}

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find((element) => element.name === animal).residents;
  const verifyAge = findAnimal.every((value) => value.age >= age);
  return verifyAge;
}

function employeeByName(employeeName) {
  let employeeData = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  if (employeeName === undefined) {
    employeeData = {};
  }
  return employeeData;
}

// console.log(employeeByName('Orloff'));

function createEmployee(personalInfo, associatedWith) {
  const newEmployeeData = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployeeData;
}
// console.log(createEmployee({
//   id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//   firstName: 'John',
//   lastName: 'Doe',
// }, {
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992'
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
//   ]
// }));

function isManager(id) {
  const burl = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const ola = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const stephanie = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const managerList = [burl, ola, stephanie];
  const findEmployee = employees.find((employee) => employee.id === id);
  return managerList.some((manager) => findEmployee.id === manager);
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployeeData = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployeeData);
}

function animalCount(species = undefined) {
  const animalListCount = animals.reduce((acc, curr) => {
    const animalObject = acc;
    animalObject[curr.name] = curr.residents.length;
    return animalObject;
  }, {});
  if (species === undefined) {
    return animalListCount;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

// console.log(animalCount());

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  const pricesTotal = [];
  const customerTypes = Object.keys(entrants);
  const customerValue = Object.values(entrants);
  const priceFinder = customerTypes.map((customer) => prices[customer]);
  priceFinder.forEach((element, index) => pricesTotal.push(element * customerValue[index]));
  return pricesTotal.reduce((acc, curr) => acc + curr, 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

const scheduleArray = Object.entries(hours);

const reduceToFullArray = (array) => array.reduce((acc, curr) => {
  const scheduleObject = acc;
  const dayOpen = Object.values(curr[1])[0];
  const dayClose = Object.values(curr[1])[1] - 12;
  if (dayOpen === 0) {
    scheduleObject[curr[0]] = 'CLOSED';
  } else {
    scheduleObject[curr[0]] = `Open from ${dayOpen}am until ${dayClose}pm`;
  }
  return scheduleObject;
}, {});

function schedule(dayName) {
  const fullZooSchedule = reduceToFullArray(scheduleArray);
  if (!dayName) {
    return fullZooSchedule;
  }
  const daySchedule = {
    [dayName]: fullZooSchedule[dayName],
  };
  return daySchedule;
}

function oldestFromFirstSpecies(id) {
  const responsabilities = employees.find((employee) => employee.id === id).responsibleFor;
  const findSpecies = animals.find((animal) => responsabilities[0] === animal.id).residents;
  const oldest = findSpecies.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(oldest);
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
  // animalMap,
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
