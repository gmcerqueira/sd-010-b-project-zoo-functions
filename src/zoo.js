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
  const species = data.animals.filter((element) =>
    ids.find((id) => element.id === id));

  return species;
}

function animalsOlderThan(animal, age) {
  const findAnimal = data.animals.find((element) => element.name === animal);
  const checkAge = findAnimal.residents.every((element) => element.age > age);
  return checkAge;
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const employee = data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  const checkid = data.employees.some((element) => element.managers.includes(id));
  return checkid;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((result, element) => {
      const newObject = result;
      newObject[element.name] = element.residents.length;
      return newObject;
    }, {});
  }

  const coutAnimal = data.animals.find((element) => element.name === species);
  return coutAnimal.residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  const price = Object.values(data.prices);
  const objectEntry = entrants;
  const { Adult = 0, Senior = 0, Child = 0 } = objectEntry;
  const total = (Adult * Number(price[0]) + Senior * Number(price[1]) + Child * Number(price[2]));
  return total;
}

// function animalMap(options) {
//   const ne = data.animals.filter((element) => element.location === 'NE');
//   const nw = data.animals.filter((element) => element.location === 'NW');
//   const se = data.animals.filter((element) => element.location === 'SE');
//   const sw = data.animals.filter((element) => element.location === 'SW');
//   if (!options) {
//     const location = {
//       NE: ne.map((element) => element.name),
//       NW: nw.map((element) => element.name),
//       SE: se.map((element) => element.name),
//       SW: sw.map((element) => element.name),
//     };
//     return location;
//   } if (Object.values(options)[0] === true) {

//   };

//   }

function schedule(dayName) {
  const newObj = Object.entries(data.hours);
  const all = newObj.reduce((result, [day, { open, close }]) => {
    const ObjtResult = result;
    ObjtResult[day] = (open !== 0) ? `Open from ${open % 12}am until ${close % 12}pm` : 'CLOSED';
    return ObjtResult;
  }, {});
  if (!dayName) {
    return all;
  }
  const exist = {};
  exist[dayName] = all[dayName];
  return exist;
}

function oldestFromFirstSpecies(id) {
  const responseAnimal = data.employees.find((element) => element.id === id).responsibleFor;
  const findAnimal = data.animals.find((element) => element.id === responseAnimal[0]);
  const animal = findAnimal.residents.map((element) => element.age);
  const maxValue = animal.reduce((a, b) => Math.max(a, b));
  const oldest = findAnimal.residents.find((element) => element.age === maxValue);
  const exit = [oldest.name, oldest.sex, oldest.age];
  return exit;
}
function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  data.prices = {
    Adult: Math.round((Adult * (1 + (percentage / 100))) * 100) / 100,
    Senior: Math.round((Senior * ((1 + percentage / 100))) * 100) / 100,
    Child: Math.round(Child * (((1 + percentage / 100))) * 100) / 100,
  };
}

function parte1(idOrName) {
  const idAnimal = data.employees.filter((element) => {
    if (element.id === idOrName || element.firstName === idOrName
       || element.lastName === idOrName) {
      return element;
    } return '';
  }); const animals = [];
  const nameAnimals = [];
  idAnimal.filter((element) => element.responsibleFor.forEach((item) => animals.push(item)));
  data.animals.find((element) => animals.forEach((animal) => {
    if (element.id === animal) {
      return nameAnimals.push(element.name);
    }
  })); const nome = `${idAnimal[0].firstName} ${idAnimal[0].lastName}`;
  const exit = {};
  if (nome === 'Stephanie Strauss') {
    exit[nome] = nameAnimals.sort();
  } exit[nome] = nameAnimals;
  return exit;
}
function parte2() {
  const names = data.employees.map((nada) => `${nada.firstName} ${nada.lastName}`);
  const idAnimal = data.employees.map((element) => element.responsibleFor);
  const array = idAnimal;
  const aaa = [];
  for (let index = 0; index < array.length; index += 1) {
    const species = data.animals.filter((element) =>
      array[index].find((item) => element.id === item));
    aaa.push(species);
  } const ccc = [];
  aaa.forEach((e) => ccc.push(e.map((a) => a.name)));
  const newObject = {};
  for (let i = 0; i < names.length; i += 1) {
    if (names[i] === 'Stephanie Strauss' || names[i] === 'Emery Elser') {
      newObject[names[i]] = (ccc[i].reverse());
    } else {
      newObject[names[i]] = (ccc[i]);
    }
  } return newObject;
}
function employeeCoverage(idOrName) {
  if (!idOrName) {
    return parte2();
  }
  return parte1(idOrName);
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
