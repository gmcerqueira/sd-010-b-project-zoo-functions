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
function animalsByIds(...ids) {
  const newArray = [];
  ids.forEach((element) => {
    newArray.push(animals.find((animal) => element === animal.id));
  });
  return newArray;
}
// console.log(animalsByIds(animals));

function animalsOlderThan(animal, age) {
  return animals.find((element) => element.name === animal)
    .residents.every((elementAge) => elementAge.age >= age);
}

const { employees } = data;
function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // junta as informaçoes contidas em personalInfo com
  // as informaçoes contidas em associatedWith, dessa forma
  // criando um novo objeto
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
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
  if (species) {
    return animals.find((animal) => animal.name === species).residents.length;
  }
  const qntdAnimais = {};
  animals.forEach(({ name, residents }) => {
    qntdAnimais[name] = residents.length;
  });
  return qntdAnimais;
}

const { prices } = data;
function entryCalculator(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const adultos = prices.Adult * entrants.Adult;
  const crianças = prices.Child * entrants.Child;
  const idosos = prices.Senior * entrants.Senior;
  const arrayTotal = [adultos, crianças, idosos];

  return arrayTotal.filter((valor) => valor > 0)
    .reduce((a, b) => a + b, 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

const { hours } = data;
function amPm(hour) {
  if (hour === 12) {
    return '12pm';
  }
  if (hour > 12) {
    return `${hour - 12}pm`;
  }
  return `${hour}am`;
}

function aberto(open, close) {
  if (open === 0 || close === 0) {
    return 'CLOSED';
  }
  return `Open from ${amPm(open)} until ${amPm(close)}`;
}

function schedule(dayName) {
  if (!dayName) {
    return {
      Tuesday: aberto(hours.Tuesday.open, hours.Tuesday.close),
      Wednesday: aberto(hours.Wednesday.open, hours.Wednesday.close),
      Thursday: aberto(hours.Thursday.open, hours.Thursday.close),
      Friday: aberto(hours.Friday.open, hours.Friday.close),
      Saturday: aberto(hours.Saturday.open, hours.Saturday.close),
      Sunday: aberto(hours.Sunday.open, hours.Sunday.close),
      Monday: aberto(hours.Monday.open, hours.Monday.close),
    };
  }

  return { [dayName]: aberto(hours[dayName].open, hours[dayName].close) };
}

function oldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id);
  const firtAnimal = animals.find((animal) => animal.id === person.responsibleFor[0]);
  const older = firtAnimal.residents.reduce((old, next) => {
    let newOld = old;
    if (old.age < next.age) {
      newOld = next;
    }
    return newOld;
  });
  return Object.values(older);
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
