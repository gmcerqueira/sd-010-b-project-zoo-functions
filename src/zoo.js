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
  if (ids.length === 0) {
    return ids;
  }
  return data.animals.filter((animal, index) => animal.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const resposta = data.animals.filter((species) => species.name === animal);
  return resposta[0].residents.every((ageAnimals) => ageAnimals.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find((collaborator) => ((collaborator.firstName === employeeName)
  || (collaborator.lastName === employeeName)));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee, index) => employee.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const object = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(object);
}

function animalCount(species) {
  // seu código aqui
  const animais = {};
  const retorno = data.animals.find((animals) => animals.name === species);
  data.animals.forEach((animal) => { animais[animal.name] = animal.residents.length; });
  return (species === undefined) ? animais : retorno.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  let total = 0;
  if ((entrants !== undefined) && (entrants !== {})) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    total += Adult * data.prices.Adult;
    total += Child * data.prices.Child;
    total += Senior * data.prices.Senior;
  }
  return total;
}

// function animalMap(options) {
//   // seu código aqui
// }

// https://stackoverflow.com/questions/43807515/eslint-doesnt-allow-for-in
// Link usado para resolução do requesito schedule
function schedule(dayName) {
  // seu código aqui
  const keys = Object.keys(data.hours);
  const values = Object.values(data.hours);
  const newObj = {};
  const newobj2 = {};
  keys.forEach((key, index) => {
    const hours = (((values[index].close + 11) % 12) + 1);
    if (key === 'Monday') {
      newObj[key] = 'CLOSED';
    } else {
      newObj[key] = `Open from ${values[index].open}am until ${hours}pm`;
    }
  });
  if (dayName !== undefined) {
    newobj2[dayName] = newObj[dayName];
    return newobj2;
  }
  return newObj;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const firstAnimal = data.employees.filter((employee) => employee.id === id);
  const residents = data.animals.filter((animal) => firstAnimal[0]
    .responsibleFor[0] === animal.id)[0]
    .residents.sort((a, b) => a.age - b.age);
  return residents.reduce((residentOld, animal, index) => {
    if (residents.length - 1 === index) {
      residentOld.push(animal.name);
      residentOld.push(animal.sex);
      residentOld.push(animal.age);
    }
    return residentOld;
  }, []);
}

function increasePrices(percentage) {
  // seu código aqui
  const keys = Object.keys(data.prices);
  const values = Object.values(data.prices);
  const newPrices = {};
  for (let i = 0; i < keys.length; i += 1) {
    newPrices[keys[i]] = Math
      .round((values[i] + (values[i] * (percentage / 100))) * 100) / 100;
  }
  data.prices = newPrices;
  return data.prices;
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
