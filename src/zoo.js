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
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
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
  const keysEntrant = Object.keys(entrants);
  return keysEntrant.reduce((acc, cur) => acc + ((prices[cur] || 0) * entrants[cur]), 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

// Função para encontrar o dia da semana
const weekDay = (day) => {
  const line = {}; const closed = hours[day].close;
  const opened = hours[day].open;
  if (opened === 0 || closed === 0) {
    line.day = 'CLOSED';
  } else {
    line.day = `Open from ${opened}am until ${closed - 12}pm`;
  }
  return line;
};
// DefaultShedule
const defaultShedule = () => {
  const result = Object.entries(hours)
    .reduce((acc, day) => {
      if (day[1].open === 0 || day[1].close === 0) {
        acc[day[0]] = 'CLOSED';
      } else acc[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
      return acc;
    }, {});
  return result;
};
function schedule(dayName) {
  // seu código aqui

  if (dayName) return weekDay(dayName);

  return defaultShedule();
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees
    .find((collaboratingPeople) => collaboratingPeople.id === id);
  const firstSpecie = data.animals
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
  increasePrices,
  createEmployee,
};
