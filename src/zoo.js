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
  if (!ids) {
    return [];
  }
  return animals.filter((animais) => ids.includes(animais.id));
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find((animais) => animais.name === animal)
    .residents.every((animais) => animais.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
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
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const animalsAndAmount = {};
    animals.forEach((ani) => {
      animalsAndAmount[ani.name] = ani.residents.length;
    });
    return animalsAndAmount;
  }
  let teste;
  animals.forEach((element) => {
    if (species === element.name) {
      teste = element.residents.length;
    }
  });
  return teste;
}

function entryCalculator(entrants) {
  // seu código aqui
  let result = 0;
  if (!entrants) {
    return 0;
  }
  if (entrants.Adult) {
    result += prices.Adult * entrants.Adult;
  }
  if (entrants.Child) {
    result += prices.Child * entrants.Child;
  }
  if (entrants.Senior) {
    result += prices.Senior * entrants.Senior;
  }
  return result;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
  const weekDays = Object.keys(hours);
  const message = {};
  weekDays.forEach((element) => {
    const { open, close } = hours[element];
    if (element === 'Monday') {
      message.Monday = 'CLOSED';
    } else {
      message[element] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (!dayName) {
    return message;
  }
  return { [dayName]: message[dayName] };
}
function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((elementId) => id === elementId.id);
  const firstAnimalResp = employee.responsibleFor[0];
  const animalList = animals.find((element) => element.id === firstAnimalResp);
  const oldestAnimal = animalList.residents.reduce((old, young) =>
    (old.age > young.age ? old : young));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
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
