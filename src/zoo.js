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

const {
  animals,
  employees,
  prices,
  hours,
} = data;

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.some((id) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find((animalX) => animalX.name === animal);
  return findAnimal.residents.every((ageX) => ageX.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employe) =>
    employeeName === employe.firstName || employeeName === employe.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((employe) => employe.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = {
    id,
    firstName,
    lastName,
  };
  const associatedWith = {
    managers,
    responsibleFor,
  };
  employees.push(createEmployee(personalInfo, associatedWith));
}

function animalCount(species) {
  if (!species) {
    const totalAnimals = {};
    animals.forEach((animal) => {
      totalAnimals[animal.name] = animal.residents.length;
    });
    return totalAnimals;
  }
  const findAnimal = animals.find((specie) => specie.name === species);
  return findAnimal.residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, key) => acc + (entrants[key] * prices[key]), 0);
}

// function animalMap(options) {
//   // seu código aqui
//   return options;
// }

// function completeSchedule() {

// }

function schedule(dayName) {
  const allDaysSchedule = {};
  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      allDaysSchedule[day] = 'CLOSED';
    } else {
      allDaysSchedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (!dayName) {
    return allDaysSchedule;
  }
  return { [dayName]: allDaysSchedule[dayName] };
}

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
//   return id;
// }

// function increasePrices(percentage) {
//   // seu código aqui
//   return percentage;
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
//   return idOrName;
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
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
