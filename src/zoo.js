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

const { animals, employees, prices, hours } = require('./data');

function animalsByIds(...ids) {
  return animals.filter((getId) => ids.some((animalId) => (animalId === getId.id)));
}

function animalsOlderThan(animal, age) {
  const filteredAnimal = animals.find((animalName) => animalName.name === animal);
  return (filteredAnimal.residents.every((animalAge) => animalAge.age >= age));
}

function employeeByName(employeeName) {
  let result;
  const fname = (name) => name.firstName === employeeName;
  const lname = (name) => name.lastName === employeeName;
  if (employeeName) {
    result = employees.find((name) => (fname(name) || lname(name)));
  } else {
    result = {};
  }
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((ids) => ids.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const myObj = {};
  animals.forEach((obj, index) => {
    myObj[obj.name] = animals[index].residents.length;
  });
  return (species) ? (myObj[species]) : myObj;
}
// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const keys = Object.keys(hours);
  const myObj = {};
  const addDay = (key) => {
    myObj[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
  };
  keys.forEach(addDay);
  myObj.Monday = 'CLOSED';
  return (dayName) ? { [dayName]: myObj[dayName] } : myObj;
}

function oldestFromFirstSpecies(id) {
  const animalId = employees.find((employeeId) => (employeeId.id === id)).responsibleFor[0];
  const animalArray = animals.find((getId) => (getId.id === animalId)).residents;
  const oldestAnimal = animalArray.sort((yearA, yearB) => yearB.age - yearA.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  const values = Object.values(prices);
  const keys = Object.keys(prices);
  const increase = (price, index) => {
    prices[keys[index]] = +(Math.ceil((percentage + 100) * price) * 0.01).toFixed(2);
  };
  values.forEach(increase);
}

function nameAnimalsByIds(...ids) {
  const listAnimals = ids.map((getId) => animals.find((animalId) => (animalId.id === getId)));
  return listAnimals.map((animal) => animal.name);
}

function employeeCoverage(idOrName) {
  let myObj = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const keyName = `${firstName} ${lastName}`;
    const valueAnimal = nameAnimalsByIds(...responsibleFor);
    myObj[keyName] = valueAnimal;
  });
  const fname = (employee) => employee.firstName === idOrName;
  const lname = (employee) => employee.lastName === idOrName;
  const id = (employee) => employee.id === idOrName;
  if (!idOrName) return myObj;
  const name = employees.find((employee) => (fname(employee) || lname(employee) || id(employee)));
  const fullName = `${name.firstName} ${name.lastName}`;
  myObj = { [fullName]: myObj[fullName] };
  return myObj;
}
module.exports = {
  // entryCalculator,
  schedule,
  animalCount,
  // animalMap,
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
