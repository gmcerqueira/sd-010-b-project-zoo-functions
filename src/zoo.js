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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return animals.filter((animal) => {
    return ids.find((id) => {
      return animal.id === id
    });
  })
}

function animalsOlderThan(animal, age) {
  const animalsFilteredSpecie = animals.find(({name}) => {
    return name === animal;
  });

  const animalsFilteredAge = animalsFilteredSpecie.residents.every((element) => {
    return element.age >= age;
  });
  
  return animalsFilteredAge;
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  } else {
    const employeeByName = employees.find(({ firstName, lastName }) => {
      return firstName === employeeName || lastName === employeeName;
    });

    return employeeByName;
  }
}

function createEmployee(personalInfo, associatedWith) {
  const createEmployee = { 
    ...personalInfo, 
    ...associatedWith 
  };

  return createEmployee;
}

function isManager(id) {
  const isManager = employees.some((manager) => {
    return manager.managers.includes(id);
  });

  return isManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmployee = employees.push({id, firstName, lastName, managers, responsibleFor});

  return addEmployee;
}

function animalCount(species) {
  if (!species) {
    const animalsAmount = animals.reduce((accumulator, current) => {
      accumulator[current.name] = current.residents.length;

      return accumulator;
    }, {});

    return animalsAmount;
  } else {
    const amount = animals.find((animal) => {
      return animal.name === species;
    }).residents.length;

    return amount;
  }
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  } else {
    const totalPrice = Object.keys(entrants).reduce((accumulator, current) => {
      return accumulator + (entrants[current] * prices[current]);
    }, 0);

    return totalPrice;
  };

}

function animalMap(options) {
  // Voltar aqui depois
}

function schedule(dayName) {
  const schedule = {};
  const expedient = Object.keys(hours);

  if (!dayName) {
    expedient.map((element) => {
      const timetable = hours[element];
      schedule[element] = `Open from ${timetable.open}am until ${timetable.close - 12}pm`;
      schedule.Monday = 'CLOSED';
    });

    return schedule;
  } else if (dayName === 'Monday') {
    schedule['Monday'] = 'CLOSED';

    return schedule;
  }

  const { open, close } = hours[dayName];
  schedule[dayName] = `Open from ${open}am until ${close - 12}pm`;

  return schedule;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
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
