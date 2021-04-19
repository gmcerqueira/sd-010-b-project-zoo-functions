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

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...id) {
  if (!id) return [];

  return animals.filter((animal) => id.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const species = data.animals.find((name) => name.name === animal);

  return species.residents.every((item) => item.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};

  const filterName = data.employees;

  return filterName.find((name) => (
    name.firstName === employeeName || name.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };

  employees.unshift(newEmployee);

  return data.employees[0];
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    },
  );
}

function animalCount(species) {
  const objName = {};
  let count = 0;
  animals.forEach((animal) => { objName[animal.name] = animal.residents.length; });

  if (!species) return objName;

  const countAnimal = (animal) => {
    if (animal.name === species) {
      count = animal.residents.length;
    }
  };

  animals.filter(countAnimal);

  return count;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const sum = (acc, currValue) => acc + currValue;

  const sumTotal = Object.keys(entrants).map((key) =>
    entrants[key] * prices[key]).reduce(sum);

  return sumTotal;
}
// ---Funções a seguir são Complementares da Função animalMap---
function objAnimal() {
  const categorizedByLocation = {};

  animals.forEach(({ location }) => {
    categorizedByLocation[location] = [];
    const animalFilter = animals.filter((animal) => animal.location === location);
    animalFilter.forEach(({ name }) => {
      categorizedByLocation[location].push(name);
    });
  });

  return categorizedByLocation;
}

function includes(obj) {
  const objIncludes = {};

  Object.keys(obj).forEach((location) => {
    objIncludes[location] = [];
    const filterByLocation = animals.filter((animal) => animal.location === location);

    filterByLocation.forEach(({ name, residents }, index) => {
      objIncludes[location].push({});
      objIncludes[location][index][name] = residents.map((resident) => resident.name);
    });
  });

  return objIncludes;
}

function filterBySex(optionSex) {
  const getObj = objAnimal();
  const categorizedBySex = {};

  Object.keys(getObj).forEach((location) => {
    categorizedBySex[location] = [];

    const filterByLocation = animals.filter((animal) => animal.location === location);

    filterByLocation.forEach(({ name, residents }, index) => {
      const animalBySex = residents.filter((resident) => resident.sex === optionSex);

      categorizedBySex[location].push({});
      categorizedBySex[location][index][name] = animalBySex.map((sex) => sex.name);
    });
  });

  return categorizedBySex;
}

function sort(obj) {
  const getObj = includes(obj);

  Object.keys(getObj).forEach((location) => {
    getObj[location].forEach((animal, index) => {
      const animalName = Object.keys(animal);
      getObj[location][index][animalName].sort();
    });
  });

  return getObj;
}

function sortSex(obj) {
  const getObj = obj;

  Object.keys(getObj).forEach((key) => {
    getObj[key].forEach((animal, index) => {
      const animalName = Object.keys(animal);
      getObj[key][index][animalName].sort();
    });
  });

  return getObj;
}

function checkOptions(options) {
  if (options.sorted === true && options.sex) {
    return sortSex(filterBySex(options.sex));
  }
  if (options.sorted === true) {
    return sort(objAnimal());
  }
  if (options.sex) {
    return filterBySex(options.sex);
  }

  return includes(objAnimal());
}

function animalMap(options) {
  // seu código aqui
  if (options && options.includeNames) {
    return checkOptions(options);
  }

  return objAnimal();
}

function schedule(dayName) {
  // obtive a ajuda do Aladino Borges para fazer o return desse código
  const arrHours = Object.entries(hours);
  const fullSchedule = {};

  arrHours.forEach(([key, { open, close }]) => {
    fullSchedule[key] = `Open from ${open}am until ${close - 12}pm`;

    if (key === 'Monday') {
      fullSchedule[key] = 'CLOSED';
    }
  });

  if (!dayName) return fullSchedule;

  return { [dayName]: fullSchedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  const getResponsible = employees.find((idEmployee) => idEmployee.id === id).responsibleFor[0];

  const getAnimal = animals.find((animal) =>
    animal.id === getResponsible)
    .residents.sort((a, b) => b.age - a.age)
    .find((item) => Math.max(item.age));

  const result = Object.values(getAnimal);

  return result;
}

function increasePrices(percentage) {
  const increase = Object.values(prices)
    .map((item) => (item * percentage)
      .toPrecision(4) / 100);

  const { Adult, Senior, Child } = prices;
  const [adultAdd, seniorAdd, childAdd] = increase;

  prices.Adult = parseFloat((Adult + adultAdd).toPrecision(4));
  prices.Senior = parseFloat((Senior + seniorAdd).toPrecision(4));
  prices.Child = parseFloat((Child + childAdd).toPrecision(4));
}

function employeeCoverage(idOrName) {
  // na lógica desse código obtive ajuda da Valeria Andreoni
  const creatObj = (acc, { firstName, lastName, responsibleFor }) => {
    acc[`${firstName} ${lastName}`] = responsibleFor
      .map((item) => animals.find((animal) =>
        animal.id === item).name);
    return acc;
  };
  const seachEmployee = (employee) =>
    employee.id === idOrName
    || employee.firstName === idOrName
    || employee.lastName === idOrName;

  if (!idOrName) return employees.reduce(creatObj, {});

  const resultSeachEmployee = employees.filter(seachEmployee);

  return resultSeachEmployee.reduce(creatObj, {});
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
