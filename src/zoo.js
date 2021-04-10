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
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  return animals.filter((idAnimal) => ids.includes(idAnimal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const specieAnimal = animals.find((animalName) => animalName.name === animal);
  return specieAnimal.residents.every((animalAge) => animalAge.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((collaboratingPeople) => collaboratingPeople.firstName === employeeName
  || collaboratingPeople.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((managementPosition) => managementPosition.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  const totAnimals = {};
  if (species === undefined) {
    animals.forEach(({ name, residents }) => {
      totAnimals[name] = residents.length;
    });
    return totAnimals;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  return Object.keys(entrants)
    .reduce((acc, cur) => acc + ((prices[cur] || 0) * entrants[cur]), 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
  const result = {};
  Object.keys(hours)
    .forEach((key) => {
      const { open, close } = hours[key];
      if (key === 'Monday') result[key] = 'CLOSED';
      else result[key] = `Open from ${open}am until ${close - 12}pm`;
    });
  if (dayName) return { [dayName]: result[dayName] };
  return result;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees
    .find((collaboratingPeople) => collaboratingPeople.id === id);
  const firstSpecie = animals
    .find((specieAnimal) => specieAnimal.id === employee.responsibleFor[0]);
  const sortedAnimals = firstSpecie.residents
    .sort((animalOne, animalTwo) => animalTwo.age - animalOne.age);
  return Object.values(sortedAnimals[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult += (prices.Adult * (percentage / 100));
  prices.Child += (prices.Child * (percentage / 100));
  prices.Senior += (prices.Senior * (percentage / 100));
  prices.Adult = Math.round((prices.Adult * 100)) / 100;
  prices.Child = Math.round((prices.Child * 100)) / 100;
  prices.Senior = Math.round((prices.Senior * 100)) / 100;
  return prices;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const employeeFilterd = employees
    .filter((employee) => (idOrName ? idOrName === employee.id
  || idOrName === employee.firstName
  || idOrName === employee.lastName : true));
  return employeeFilterd
    .reduce((acc, { firstName, lastName, responsibleFor }) => {
      const fullName = `${firstName} ${lastName}`;
      acc[fullName] = responsibleFor
        .map((animalId) => animals
          .find((animal) => animal.id === animalId).name);
      return acc;
    }, {});
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
