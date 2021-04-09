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

const {
  animals,
  employees,
  prices,
  hours,
} = require('./data');
// const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const animalObj = animals.find((element) => element.name === animal); // Pega apenas o objeto do parametro animal dentro de animals
  const animalAges = animalObj.residents.map((element) => element.age); // Cria uma array com as idades de todos os animais dentro do objeto
  return animalAges.every((value) => value > age); // Verifica se todos os valores da array de idades contempla o parametro age
}

function employeeByName(employeeName) {
  let result = {};
  if (employees.find((employee) => employee.firstName === employeeName)) {
    result = employees.find((employee) => employee.firstName === employeeName);
  } else if (employees.find((employee) => employee.lastName === employeeName)) {
    result = employees.find((employee) => employee.lastName === employeeName);
  }
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  const {
    id,
    firstName,
    lastName,
  } = personalInfo;
  const {
    managers,
    responsibleFor,
  } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
  return newEmployee;
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, nextAnimal) => {
      acc[nextAnimal.name] = nextAnimal.residents.length;
      return acc;
    }, {});
  }
  return animals.find((specie) => specie.name === species).residents.length;
}

// Checking Empty Obj https://flaviocopes.com/how-to-check-object-empty/

function entryCalculator(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const adults = (entrants.Adult * prices.Adult);
  const children = (entrants.Child * prices.Child);
  const seniors = (entrants.Senior * prices.Senior);

  const total = [adults, children, seniors];

  return total.filter((value) => value > 0).reduce((a, b) => a + b, 0);
}

// function animalMap(options) {
//   if (!options || !options.includeNames) {
//     return 'Default';
//   }
//   if (options.includeNames && options.sex && options.sorted) {
//     return 'tudão';
//   }
//   if (options.includeNames && options.sex) {

//   }
// }

// console.log(animalMap());
// console.log(animalMap({ includeNames: false }));
// console.log(animalMap({ includeNames: true }));
// console.log(animalMap({ includeNames: true, sorted: true }));
// console.log(animalMap({ includeNames: true, sorted: false }));

// ------------------------------------------------------------------
// REQUISITO 10 - schedule

// Altera as horas para AM/PM
function amPm(hour) {
  if (hour > 12) {
    return `${hour - 12}pm`;
  }
  if (hour === 12) {
    return `${hour}pm`;
  }
  return `${hour}am`;
}

// Retorna o horário de funcionamento do dia
function openingHours(open, close) {
  if (open === 0 || close === 0) {
    return 'CLOSED';
  }
  return `Open from ${amPm(open)} until ${amPm(close)}`;
}

function schedule(dayName) {
  if (!dayName) {
    return {
      Sunday: openingHours(hours.Sunday.open, hours.Sunday.close),
      Monday: openingHours(hours.Monday.open, hours.Monday.close),
      Tuesday: openingHours(hours.Tuesday.open, hours.Tuesday.close),
      Wednesday: openingHours(hours.Wednesday.open, hours.Wednesday.close),
      Thursday: openingHours(hours.Thursday.open, hours.Thursday.close),
      Friday: openingHours(hours.Friday.open, hours.Friday.close),
      Saturday: openingHours(hours.Saturday.open, hours.Saturday.close),
    };
  }
  return {
    [dayName]: openingHours(hours[dayName].open, hours[dayName].close),
  };
}

// ------------------------------------------------------------------
// REQUISITO 11 - oldestFromFirstSpecies

// 1. Encontra Employee pela Id; (employee)
// 2. Pega o objeto do primeiro animal; (firstAnimal)
// 3. Cria array com (find?)

function oldestFromFirstSpecies(id) {
  const employee = employees.find((person) => person.id === id);
  const firstAnimal = animals.find((animal) =>
    animal.id === employee.responsibleFor[0]);
  const listOfAnimals = firstAnimal.residents.reduce((list, nextAnimal) => {
    let newList = list;
    if (list.age < nextAnimal.age) {
      newList = nextAnimal;
    }
    return newList;
  });
  return Object.values(listOfAnimals);
}

console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// ------------------------------------------------------------------
// REQUISITO 12 - increasePrices

// function increasePrices(percentage) {
//   // seu código aqui
// }

// ------------------------------------------------------------------
// REQUISITO 13 - employeeCoverage

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  createEmployee,
  isManager,
  addEmployee,
  animalCount,
  entryCalculator,
  // animalMap,
  schedule,
  oldestFromFirstSpecies,
  // increasePrices,
  // employeeCoverage,
};
