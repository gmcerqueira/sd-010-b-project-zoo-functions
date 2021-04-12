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
  const responsibleAnimals = employees.find(({ id: employeeId }) => {
    return employeeId === id;
  }).responsibleFor[0];

  const residentsAnimals = animals.find((animal) => {
    return animal.id === responsibleAnimals;
  }).residents;

  const oldestAnimal = Object.values(residentsAnimals.sort((smaller, bigger) => {
    return bigger.age - smaller.age;
  })[0]);

  return oldestAnimal;
}

function increasePrices(percentage) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  const increasedPrices = {
    Adult: parseFloat((prices.Adult + (prices.Adult * (percentage / 100)) + 0.001).toFixed(2)),
    Senior: parseFloat((prices.Senior + (prices.Senior * (percentage / 100)) + 0.001).toFixed(2)),
    Child: parseFloat((prices.Child  + (prices.Child * (percentage / 100)) + 0.001).toFixed(2)),
  };

  Object.assign(prices, increasedPrices);
}

function employeeCoverage(idOrName) {
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
