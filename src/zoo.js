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

const { animals, employees } = data;
function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return (animals.find((animalDoZoo) => animalDoZoo.name === animal)
    .residents.every((habitante) => habitante.age > age)
  );
}

function employeeByName(employeeName) {
  if (!employeeName) { return { }; }
  return employees.find((employee) => {
    const resultado = employee.firstName === employeeName || employee.lastName === employeeName;
    return resultado;
  });
}

function createEmployee(personalInfo, associatedWith) {
  const employee = Object.assign(personalInfo, associatedWith);
  return employee;
}

function isManager(id) {
  const empData = data.employees;
  const getManager = empData.some((man) => man.managers.find((manId) => manId === id));
  return getManager;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployees = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployees);
}

function animalCount(species) {
  if (species) {
    const count = data.animals.find((unidade) => unidade.nome === species);
    return count.residents.length;
  }
  const todos = data.animals.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, { });
  return todos;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const prices = Object.entries(data.prices);
  const ent = Object.entries(entrants);
  let entrant = 0;
  ent.forEach((elEnt) => {
    prices.forEach((elPrices) => {
      entrant += elPrices[0] === elEnt[0] ? elPrices[1] * elEnt[1] : 0;
    });
  });
  return entrant;
}

const locations = () => data.animals.map((el) => el.location)
  .filter((el, index, arr) => arr.indexOf(el) === index);

const isLocalName = (locals) => data.animals.filter((el) => el.location === locals)
  .map((el) => el.name);

const listNameAnimals = (allLocals) => allLocals.reduce((acumulator, value) => {
  acumulator[value] = isLocalName(value);
  return acumulator;
}, {});

const getNamesAnimalarr = (classAnimal) => classAnimal.map((animal) => animal.name);
const getNamesAnimalsex = (classAnimal, sex) => classAnimal.filter((animal) => animal.sex === sex)
  .map((animal) => animal.name);

const isSex = (residents, sex) => (
  sex !== undefined ? getNamesAnimalsex(residents, sex) : getNamesAnimalarr(residents));

const getNameAnimals = (args) => {
  const { sex, sorted } = args;
  const result = data.animals.reduce((acumulador, animal) => {
    if (!acumulador[animal.location]) acumulador[animal.location] = [];
    const { name: key, residents } = animal;
    const objNames = {};
    const arr = isSex(residents, sex);
    objNames[key] = sorted ? arr.sort() : arr;
    acumulador[animal.location].push(objNames);
    return acumulador;
  }, {});
  return result;
};

function animalMap(options) {
  if (!options) return listNameAnimals(locations());
  const { includeNames } = options;
  if (includeNames) return getNameAnimals(options);
  return listNameAnimals(locations());
}

function schedule(dayName) {
  const { hours } = data;
  const result = Object.entries(hours).reduce((acumulador, [key, value]) => {
    const [am, pm] = Object.values(value);
    acumulador[key] = key === 'Monday' ? 'CLOSED' : `Open from ${am}am until ${pm % 12}pm`;
    return acumulador;
  }, {});
  if (dayName) {
    const day = result[dayName];
    return {
      [dayName]: day,
    };
  }
  return result;
}

function oldestFromFirstSpecies(id) {
  const especieId = data.employees.find(employee => employee.id === id).responsibleFor[0],
  especie = data.animals.find(animal => animal.id === especieId),
  olderAnimalAge = Math.max(...especie.residents.map(resident => resident.age));
  return Object.values(especie.residents.find(resident => resident.age === olderAnimalAge));
}

function increasePrices(percentage) {
  // seu código aqui
}


function employeeCoverage(idOrName) {
  const getAnimals = (animals, ids, key) => ids.map(id => animals.find(animal => animal[key] === id))
  .map(lista => lista.name);

const getResponseAnimal = (animal, employees) => {
  const result = employees.reduce((acumulator, previous) => {
    const name = `${previous.firstName} ${previous.lastName}`;
    acumulator[name] = getAnimals(animal, previous.responsibleFor, 'id');
    return acumulator;
  }, {});
  console.log(result);
  return result;
};

const getFind = (idOrName, animal, employees) => {
  const result = employees.reduce((acc, employee) => {
    const name = `${employee.firstName} ${employee.lastName}`;
    if (name.includes(idOrName) || employee.id === idOrName) {
      acc[name] = getAnimals(animal, employee.responsibleFor, 'id');
    }
    return acc;
  }, {});
  return result;
};

function employeeCoverage(idOrName) {
  const { animals, employees } = data;
  if (!idOrName) return getResponseAnimal(animals, employees);
  return getFind(idOrName, animals, employees);
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