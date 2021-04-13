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
  const resul = [];
  for (let i = 0; i < ids.length; i += 1) {
    resul.push(...data.animals.filter((animalId) => animalId.id === ids[i]));
  }
  return resul;
}

function animalsOlderThan(animal, age) {
  const mapAnimal = data.animals.find((pupet) => pupet.name === animal);
  return mapAnimal.residents.every((value) => value.age >= age);
}

function employeeByName(employeeName) {
  const filter = data.employees.filter((person) =>
    person.firstName === employeeName || person.lastName === employeeName);
  return employeeName === undefined ? {} : filter.shift();
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((el) => el.managers.includes(id));
}

// Tive ajuda do Diegho Moraes para interpretar as questões 2 e 5!

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const dataPush = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(dataPush);
}

function animalCount(species) {
  const obj = {};
  const numbers = data.animals.filter((number) => number.name === species).shift();
  data.animals.map((el) => {
    obj[el.name] = el.residents.length;
    return obj;
  });
  return species === undefined ? obj : numbers.residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const { prices } = data;
  let result = 0;
  Object.keys(entrants).forEach((el) => {
    result += entrants[el] * prices[el];
  });
  return result;
}

const animalsByRegion = () => {
  const reducingRegion = data.animals.reduce((acc, curr) => {
    const arrayOfNames = [];
    data.animals.forEach((el) => {
      if (el.location === curr.location) arrayOfNames.push(el.name);
    });
    acc[curr.location] = arrayOfNames;
    return acc;
  }, {});
  return reducingRegion;
};

const residentsBySpcies = () => {
  const getObj = { NE: [], NW: [], SE: [], SW: [] };
  data.animals.forEach((resid) => {
    getObj[resid.location].push({ [resid.name]: resid.residents.map((get) => get.name) });
  });
  return getObj;
};
// Ajuda da resolução do segundo requisito (animalMap) com o instrutor Luanderson!

const sortedResidents = () => {
  const getObj = { NE: [], NW: [], SE: [], SW: [] };
  data.animals.forEach((resid) => {
    getObj[resid.location].push({ [resid.name]: (resid.residents.map((get) => get.name)).sort() });
  });
  return getObj;
};

const residentsBySex = (sex) => {
  const getObj = { NE: [], NW: [], SE: [], SW: [] };
  data.animals.forEach((resid) => {
    let female = [];
    const arrayOfNames = [];
    if (sex === 'female') {
      female = resid.residents.filter((el) => el.sex === 'female');
      female.forEach((e) => arrayOfNames.push(e.name));
      getObj[resid.location].push({ [resid.name]: arrayOfNames });
      return female;
    }
    if (sex === 'male') {
      female = resid.residents.filter((el) => el.sex === 'male');
      female.forEach((e) => arrayOfNames.push(e.name));
      getObj[resid.location].push({ [resid.name]: arrayOfNames });
      return female;
    }
  });
  return getObj;
};

const residentsBySexSorted = (sex) => {
  const getObj = { NE: [], NW: [], SE: [], SW: [] };
  data.animals.forEach((resid) => {
    let female = [];
    const arrayOfNames = [];
    if (sex === 'female') {
      female = resid.residents.filter((el) => el.sex === 'female');
      female.forEach((e) => arrayOfNames.push(e.name));
      getObj[resid.location].push({ [resid.name]: arrayOfNames.sort() });
      return female;
    }
    if (sex === 'male') {
      female = resid.residents.filter((el) => el.sex === 'male');
      female.forEach((e) => arrayOfNames.push(e.name));
      getObj[resid.location].push({ [resid.name]: arrayOfNames.sort() });
      return female;
    }
  });
  return getObj;
};

function funcao(sorted, sex) {
  if (!sorted) {
    if (!sex) return residentsBySpcies();
    return residentsBySex(sex);
  }
  if (!sex) return sortedResidents();
  return residentsBySexSorted(sex);
}

function animalMap(options) {
  if (!options) return animalsByRegion();
  const { includeNames, sorted, sex } = options;
  if (!includeNames) return animalsByRegion();
  if (includeNames) {
    return funcao(sorted, sex);
  }
}

// Precisei da ajuda do Carlos Margato para refatorar a função principal (chamada das funções auxiliares)

const scheduleAll = () => {
  const { hours } = data;
  const result = {};
  Object.keys(hours).forEach((el) => {
    if (el && el === 'Monday') result[el] = 'CLOSED';
    if (el && el !== 'Monday') {
      result[el] = `Open from ${hours[el].open}am until ${hours[el].close - 12}pm`;
    }
    return result;
  });
  return result;
};

function schedule(dayName) {
  const result = scheduleAll();
  const resultFilter = {};
  Object.keys(result).filter((day) => {
    if (day === dayName) resultFilter[dayName] = result[dayName];
    return resultFilter;
  });
  return dayName === undefined ? result : resultFilter;
}

function oldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((info) => info.id === id);
  const getAnimalId = findEmployee.responsibleFor[0];
  const getAnimalsData = animalsByIds(getAnimalId).shift();
  let maxAge = 0;
  getAnimalsData.residents.forEach((el) => {
    if (el.age >= maxAge) maxAge = el.age;
  });
  const result = getAnimalsData.residents.find((pupet) => pupet.age === maxAge);
  return [result.name, result.sex, result.age];
}

// Eu tive ajuda do colega Dângelo para resolução do requisito 11

function increasePrices(percentage) {
  const { prices } = data;
  let { Adult, Senior, Child } = prices;
  Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
  Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  data.prices = { Adult, Senior, Child };
}

const mappingEmployees = () => {
  const result = {};
  data.employees.forEach((el) => {
    const getAnimalData = animalsByIds(...el.responsibleFor);
    const names = [];
    getAnimalData.filter((get, index) => {
      names[index] = get.name;
      return names;
    });
    result[`${el.firstName} ${el.lastName}`] = names;
  });
  return result;
};

const filterFunction = (idOrName, result) => {
  const getMap = mappingEmployees();
  let output = result;
  const getDataFromId = data.employees.find((person) => person.id === idOrName);
  Object.entries(getMap).filter((el) => {
    if (el[0].includes(idOrName)) output = { [el[0]]: el[1] };
    if (getDataFromId && el[0].includes(getDataFromId.firstName || getDataFromId.lastName)) {
      output = { [el[0]]: el[1] };
    }
    return output;
  });
  return output;
};

function employeeCoverage(idOrName) {
  if (!idOrName) return mappingEmployees();
  let result = {};
  result = filterFunction(idOrName, result);
  return result;
}

// Ajuda do Gustavo Cerqueira e Henrique Zózimo para array desestructuring e refatoração;

employeeCoverage('Emery');
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
