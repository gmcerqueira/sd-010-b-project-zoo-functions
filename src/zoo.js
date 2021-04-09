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
} = require('./data');
const data = require('./data');

const [...animalsData] = data.animals;
const [...employeesData] = data.employees;
const {
  ...prices
} = data.prices;
// const [...hours] = data.hours;

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
    const {
      location,
    } = curr;
    return {
      ...acc,
      [location]: animals.filter((animal) => animal.location === location).map((el) => el.name),
    };
  }, {});
}

function getAnimalsName() {
  return animals.reduce((acc, curr) => {
    const {
      location,
    } = curr;
    return {
      ...acc,
      [location]: animals.filter((animal) => animal.location === location).map((an) => {
        const obj = {};
        const {
          name,
        } = an;
        obj[name] = an.residents.map((resident) => resident.name);
        return obj;
      }),
    };
  }, {});
}

function getOrdenedNames() {
  return animals.reduce((acc, cur) => {
    const {
      location,
    } = cur;
    return {
      ...acc,
      [location]: animals.filter((el) => el.location === location).map((an) => {
        const obj = {};
        const {
          name,
        } = an;
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
        const {
          name,
        } = an;
        obj[name] = an.residents.filter(resident => resident.sex === options.sex).map(el => el.name)
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
      [location]: animals.filter((animal) => animal.location === location).map((an) => {
        const obj = {};
        const {
          name,
        } = an;
        obj[name] = an.residents.filter(resident => resident.sex === options.sex).map(el => el.name).sort()
        return obj;
      }),
    };
  }, {});
}

function animalMap(options) {
  if (!options) {
    return getAnimalsLocation();
  }
  if (options.includeNames && options.sorted && options.sex) {
    return getAnimalsBySexOrdened(options);
  }
  if (options.includeNames && options.sorted) {
    return getOrdenedNames();
  }
  if (options.includeNames && options.sex) {
    return getAnimalsBySex(options);
  }
  if (options.includeNames) {
    return getAnimalsName();
  }
}

// function schedule(dayName) {
//   // seu código aqui
// }

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
  // schedule,
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
