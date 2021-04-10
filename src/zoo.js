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
  const objArray = [];
  objArray.push(data.animals.filter((animal) => ids.some((id) => animal.id === id)));
  return objArray[0];
}

function animalsOlderThan(animal, age) {
  const animais = data.animals.find((array) => array.name === animal);
  const idades = animais.residents.every((resident) => resident.age >= age);
  return idades;
}

function employeeByName(employeeName) {
  const funcionarios = data.employees;
  let fun = {};
  fun = funcionarios.find((obj) => obj.firstName === employeeName || obj.lastName === employeeName);
  if (fun === undefined) {
    return {};
  }
  return fun;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const managers = data.employees.some((employee) => {
    const man = employee.managers.some((manager) => manager === id);
    return man;
  });
  return managers;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const index = data.employees.length;
  data.employees[index] = {
    id, firstName, lastName, managers, responsibleFor,
  };
}

function animalCount(species) {
  const objAnimals = data.animals.reduce((acc1, animal) => {
    const obj = acc1;
    obj[animal.name] = animal.residents.length;
    return obj;
  }, {});
  const animal = data.animals.find((animal2) => animal2.name === species);
  if (species !== undefined) {
    return animal.residents.length;
  }
  return objAnimals;
}

function entryCalculator(entrants = 0) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const price = (Adult * 49.99) + (Child * 20.99) + (Senior * 24.99);
  return price;
}

// function animalMap(options = {}) {
//   const { includeNames, sorted, sex } = options;
//   let NE = data.animals.filter((species) => species.location === 'NE');
//   NE = NE.map((animal) => animal.name);
//   let NW = data.animals.filter((species) => species.location === 'NW');
//   NW = NW.map((animal) => animal.name);
//   let SE = data.animals.filter((species) => species.location === 'SE');
//   SE = SE.map((animal) => animal.name);
//   let SW = data.animals.filter((species) => species.location === 'SW');
//   SW = SW.map((animal) => animal.name);
//   console.log(includeNames);
//   if(includeNames === true){
//     NE = NE.map((animal) => {
//       let obj = {};
//       animals.residents.reduce((acc, nome) => {
//         if
//       })
//       return obj;
//     })
//   }
//   let locations = {
//     NE,
//     NW,
//     SE,
//     SW,
//   };
//   return locations;
// }
// console.log(animalMap({includeNames: true}));

function schedule(dayName) {
  // console.log(Object(data.hours));
  const diasSemana = {};
  Object.keys(data.hours).forEach((dia) => {
    diasSemana[dia] = `Open from ${data.hours[dia].open}am until ${data.hours[dia].close - 12}pm`;
  });
  diasSemana.Monday = 'CLOSED';
  if (dayName === undefined) {
    return diasSemana;
  }
  const obj = {};
  obj[dayName] = diasSemana[dayName];
  return obj;
}
console.log(schedule('Monday'));
// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

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
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
