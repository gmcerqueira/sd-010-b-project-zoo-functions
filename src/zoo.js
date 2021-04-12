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
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const array = [];
  if (ids.length !== 0) {
    ids.forEach((id) => {
      const search = animals.find((animal) => animal.id === id);
      array.push(search);
    });
  }
  return array;
}

function animalsOlderThan(pet, agee) {
  // seu código aqui
  return animals.find((animal) =>
    pet === animal.name).residents.every((obj) =>
    obj.age > agee);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find((i) => employeeName === i.firstName || employeeName === i.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  const newObj = {};
  if (!species) {
    animals.forEach((animal) => { newObj[animal.name] = animal.residents.length; });
    return newObj;
  }
  return animals.find((obj) => species === obj.name).residents.length;
}

function entryCalculator({ Adult = 0, Senior = 0, Child = 0 } = 0) {
  // seu código aqui
  const people = [Adult, Senior, Child];
  return Object.values(prices).reduce((acc, curr, index) => (acc + (curr * people[index])), 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
  const list = Object.entries(hours).reduce((acc, [key, value]) => {
    const { open, close } = value;
    acc[key] = close - open > 0 ? `Open from ${open}am until ${close % 12}pm` : 'CLOSED';
    return acc;
  }, {});
  if (list[dayName]) {
    return { [dayName]: list[dayName] };
  }
  return list;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const matchId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const goToAnimal = animals.find((animal) => animal.id === matchId).residents;
  const searchingOldest = goToAnimal.sort((a, b) => b.age - a.age)[0];
  return [searchingOldest.name, searchingOldest.sex, searchingOldest.age];
}

function increasePrices(percentage) {
  // seu código aqui
  const newPrice = ((percentage / 100) + 1);
  prices.Adult = Math.round(prices.Adult * 100 * newPrice) / 100;
  prices.Senior = Math.round(prices.Senior * 100 * newPrice) / 100;
  prices.Child = Math.round(prices.Child * 100 * newPrice) / 100;
  return prices;
}

function employeeCoverage(idOrName) {
  const employee = {};
  const list = (firstName, lastName, responsibleFor) => {
    const name = `${firstName} ${lastName}`;
    const animal = [];
    responsibleFor.forEach((aId) => { animal.push(animals.find(({ id }) => id === aId).name); });
    employee[name] = animal;
  };
  if (idOrName === undefined) {
    employees.forEach(({ firstName, lastName, responsibleFor }) => {
      list(firstName, lastName, responsibleFor);
    });
  } else {
    const dataOfEmployee = employees.find(({ id, firstName, lastName }) =>
      id === idOrName || firstName === idOrName || lastName === idOrName);
    const { firstName, lastName, responsibleFor } = dataOfEmployee;
    list(firstName, lastName, responsibleFor);
  }
  return employee;
}

module.exports = {
  entryCalculator,
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
