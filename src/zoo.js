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
} = require('./data');
const data = require('./data');

const [...animalsData] = data.animals;
const [...employeesData] = data.employees;
const { ...prices } = data.prices;
const { ...hours } = data.hours;

function animalsByIds(...ids) {
  if (ids === []) {
    return console.log([]);
  }
  const animalsFound = [];
  ids.forEach((id) => animalsFound.push(animalsData.find((animal) => animal.id === id)));
  return animalsFound;
}

function animalsOlderThan(animal, age) {
  const residentAnimals = animalsData.find(((item) => item.name === animal)).residents;
  return residentAnimals.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employeesData.find((person) => (
    person.firstName === employeeName || person.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employeesData.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const allSpecies = {};
  if (!species) {
    animals.forEach((animal) => {
      allSpecies[animal.name] = animal.residents.length;
    });
    return allSpecies;
  }
  return animals.find((specie) => specie.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  const adults = (entrants.Adult * prices.Adult);
  const children = (entrants.Child * prices.Child);
  const seniors = (entrants.Senior * prices.Senior);

  const total = [adults, children, seniors];

  return total.filter((value) => value > 0).reduce((acc, curr) => acc + curr, 0);
}

// funções auxiliares para resolução do requisito 9 (animalMap)
function getAnimalsLocation() {
  return animals.reduce((acc, curr) => {
    const { location } = curr;
    return {
      ...acc,
      [location]: animals.filter((animal) => animal.location === location).map((el) => el.name),
    };
  }, {});
}

function getAnimalsName() {
  return animals.reduce((acc, curr) => {
    const { location } = curr;
    return {
      ...acc,
      [location]: animals.filter((animal) => animal.location === location).map((an) => {
        const obj = {};
        const { name } = an;
        obj[name] = an.residents.map((resident) => resident.name);
        return obj;
      }),
    };
  }, {});
}

function getOrdenedNames() {
  return animals.reduce((acc, cur) => {
    const { location } = cur;
    return {
      ...acc,
      [location]: animals.filter((el) => el.location === location).map((an) => {
        const obj = {};
        const { name } = an;
        obj[name] = (an.residents.map((resident) => resident.name)).sort();
        return obj;
      }),
    };
  }, {});
}

function getAnimalsBySex(options) {
  return animals.reduce((acc, curr) => {
    const {
      location,
    } = curr;
    return {
      ...acc,
      [location]: animals.filter((animal) => animal.location === location).map((an) => {
        const obj = {};
        const { name } = an;
        obj[name] = an.residents.filter((res) => res.sex === options.sex).map((el) => el.name);
        return obj;
      }),
    };
  }, {});
}

function getAnimalsBySexOrdened(options) {
  return animals.reduce((acc, curr) => {
    const {
      location,
    } = curr;
    return {
      ...acc,
      [location]: animals.filter((animal) => animal.location === location).map((a) => {
        const obj = {};
        const { name } = a;
        obj[name] = a.residents.filter((res) => res.sex === options.sex).map((e) => e.name).sort();
        return obj;
      }),
    };
  }, {});
}

function verifyParam(param) {
  if (param.sorted && param.sex) {
    return getAnimalsBySexOrdened(param);
  }
  if (param.sorted) {
    return getOrdenedNames();
  }
  if (param.sex) {
    return getAnimalsBySex(param);
  }
  return getAnimalsName();
}

function animalMap(options) {
  if (options && options.includeNames) {
    return verifyParam(options);
  }
  return getAnimalsLocation();
}

function fullSchedule() {
  const zooSchedule = {};
  const days = Object.keys(hours);
  const operation = Object.values(hours);
  for (let i = 0; i < days.length; i += 1) {
    if (days[i] === 'Monday') {
      zooSchedule[days[i]] = 'CLOSED';
    } else {
      zooSchedule[days[i]] = `Open from ${operation[i].open}am until ${operation[i].close - 12}pm`;
    }
  }
  return zooSchedule;
}

function daySchedule(dayName) {
  const obj = {};
  if (dayName === 'Monday') {
    obj[dayName] = 'CLOSED';
    return obj;
  }
  obj[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  return obj;
}

function schedule(dayName) {
  if (!dayName) {
    return fullSchedule();
  }
  return daySchedule(dayName);
}

function oldestFromFirstSpecies(id) {
  const manages = employeesData.find((el) => el.id === id).responsibleFor;
  const theAnimals = manages.reduce((acc, curr) => {
    acc.push(animals.find(((animal) => animal.id === curr)).residents);
    return acc;
  }, []);
  const allAnimals = [];
  theAnimals.forEach((item) => item.forEach((el) => allAnimals.push(el)));
  let older = ['name', 'sex', 0];
  allAnimals.forEach((item) => {
    if (item.age > older[2]) {
      older = [item.name, item.sex, item.age];
    }
  });
  return older;
}

function increasePrices(percentage) {
  const currPrice = Object.values(data.prices);
  const priceKeys = Object.keys(data.prices);
  priceKeys.forEach((el, i) => {
    data.prices[el] = Math.round(((currPrice[i] * (percentage / 100 + 1)) * 100)) / 100;
  });
  return data.prices;
}
// REFERÊNCIA utilizada no arredondamento: https://metring.com.br/arredondar-numero-em-javascript

function animalsByEmployee() {
  return employees.reduce((acc, curr) => {
    const { firstName } = curr;
    const { lastName } = curr;
    const species = [];
    curr.responsibleFor.forEach((id) => {
      species.push(animals.find((el) => el.id === id).name);
    });
    acc[`${firstName} ${lastName}`] = species;
    return acc;
  }, {});
}

function employeesAnimals(idOrName) {
  const fn = (el) => (el.id === idOrName || el.firstName === idOrName || el.lastName === idOrName);
  const currEmployee = employeesData.find(fn);
  const animalList = [];
  return currEmployee.responsibleFor.reduce((acc, curr) => {
    const { firstName } = currEmployee;
    const { lastName } = currEmployee;
    animalList.push(animals.find((el) => el.id === curr).name);
    acc[`${firstName} ${lastName}`] = animalList;
    return acc;
  }, {});
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return animalsByEmployee();
  }
  return employeesAnimals(idOrName);
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
