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

function animalsMaleFemale(s, C, i, n) {
  if (s === 'male' && C.residents[i].sex === 'male') {
    n.push(C.residents[i].name);
  }
  if (s === 'female' && C.residents[i].sex === 'female') {
    n.push(C.residents[i].name);
  }
}

function animalsIf(C, n, s, i) {
  if (s === undefined) {
    n.push(C.residents[i].name);
  }
  animalsMaleFemale(s, C, i, n);
}

function animalsFor(COO1, nomes, sex) {
  for (let i = 0; i < COO1.residents.length; i += 1) {
    animalsIf(COO1, nomes, sex, i);
  }
}

function putNames(COO, includeNames, sorted, sex) {
  if (includeNames === true) {
    return COO.map((COO1) => {
      const nomes = [];
      animalsFor(COO1, nomes, sex);
      if (sorted === true) {
        nomes.sort();
      }
      const objeto = {};
      objeto[COO1.name] = nomes;
      return objeto;
    }, {});
  }
  return COO.map((obj) => obj.name);
}

function animalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  let NE = data.animals.filter((species) => species.location === 'NE');
  let NW = data.animals.filter((species) => species.location === 'NW');
  let SE = data.animals.filter((species) => species.location === 'SE');
  let SW = data.animals.filter((species) => species.location === 'SW');
  NE = putNames(NE, includeNames, sorted, sex);
  NW = putNames(NW, includeNames, sorted, sex);
  SE = putNames(SE, includeNames, sorted, sex);
  SW = putNames(SW, includeNames, sorted, sex);
  const locations = {
    NE, NW, SE, SW,
  };
  return locations;
}

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
  animalMap,
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
