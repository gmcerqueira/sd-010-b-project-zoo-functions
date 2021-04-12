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
  const { animals } = data;
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
  const { animals } = data;
  return animals.find((animal) =>
    pet === animal.name).residents.every((obj) =>
    obj.age > agee);
}

function employeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
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
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const { employees } = data;
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
  const { animals } = data;
  const newObj = {};
  if (!species) {
    animals.forEach((animal) => { newObj[animal.name] = animal.residents.length; });
    return newObj;
  }
  return animals.find((obj) => species === obj.name).residents.length;
}

function entryCalculator({ Adult = 0, Senior = 0, Child = 0 } = 0) {
  // seu código aqui
  const { prices } = data;
  const people = [Adult, Senior, Child];
  return Object.values(prices).reduce((acc, curr, index) => (acc + (curr * people[index])), 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
  const { hours } = data;
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
  const { animals } = data;
  const { employees } = data;
  const matchId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const goToAnimal = animals.find((animal) => animal.id === matchId).residents;
  const searchingOldest = goToAnimal.sort((a, b) => b.age - a.age)[0];
  return [searchingOldest.name, searchingOldest.sex, searchingOldest.age];
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
