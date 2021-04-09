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

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  if (ids.length) {
    const arr = animals.filter((animal, index) => animal.id === ids[index]);
    return arr;
  }
  return [];
}

function animalsOlderThan(animal, age) {
  const especie = animals.find((e) => e.name === animal);
  const bool = especie.residents.every((e) => e.age >= age);
  return bool;
}

function employeeByName(employeeName) {
  if (employeeName) {
    const employee = employees.find((e) => {
      const bool = (e.firstName === employeeName) || (e.lastName === employeeName);
      return bool;
    });
    return employee;
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const bool = employees.some((el) => el.managers.includes(id));
  return bool;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species) {
  if (species) {
    const thisAnimal = animals.find((e) => e.name === species);
    return thisAnimal.residents.length;
  }
  return animals.reduce((acc, cur) => {
    const { name } = cur;
    return {
      ...acc,
      [name]: cur.residents.length,
    };
  }, {});
}

function entryCalculator(entrants) {
  if (entrants) {
    const entrantKeys = Object.keys(entrants);
    const total = entrantKeys.reduce((acc, cur) => acc + ((prices[cur] || 0) * entrants[cur]), 0);
    return total;
  }

  return 0;
}

// Objeto com métodos auxiliares para a função animalMap.
const fooQuestNine = {
  main(options) {
    if (options.sorted && options.sex) {
      return this.getAnimalBySexOrdered(options);
    } if (options.sorted) {
      return this.getOrderedNames();
    } if (options.sex) {
      return this.getAnimalBySex(options);
    }
    return this.getAnimalNames();
  },
  getCategory() {
    return animals.reduce((acc, cur) => {
      const { location } = cur;
      return {
        ...acc,
        [location]: animals.filter((e) => e.location === location).map((e) => e.name),
      };
    }, {});
  },
  getAnimalNames() {
    return animals.reduce((acc, cur) => {
      const { location } = cur;
      return {
        ...acc,
        [location]: animals.filter((el) => el.location === location).map((el) => {
          const obj = {};
          const { name } = el;
          obj[name] = el.residents.map((e) => e.name);
          return obj;
        }),
      };
    }, {});
  },
  getOrderedNames() {
    return animals.reduce((acc, cur) => {
      const { location } = cur;
      return {
        ...acc,
        [location]: animals.filter((el) => el.location === location).map((el) => {
          const obj = {};
          const { name } = el;
          obj[name] = el.residents.map((e) => e.name).sort();
          return obj;
        }),
      };
    }, {});
  },
  getAnimalBySex(options) {
    return animals.reduce((acc, cur) => {
      const { location } = cur;
      return {
        ...acc,
        [location]: animals.filter((el) => el.location === location).map((el) => {
          const obj = {};
          const { name } = el;
          obj[name] = el.residents.filter((e) => {
            const { sex } = e;
            return sex === options.sex;
          }).map((e) => e.name);
          return obj;
        }),
      };
    }, {});
  },
  getAnimalBySexOrdered(options) {
    return animals.reduce((acc, cur) => {
      const { location } = cur;
      return {
        ...acc,
        [location]: animals.filter((el) => el.location === location).map((el) => {
          const obj = {};
          const { name } = el;
          obj[name] = el.residents.filter((e) => {
            const { sex } = e;
            return sex === options.sex;
          }).map((e) => e.name).sort();
          return obj;
        }),
      };
    }, {});
  },
};
function animalMap(options) {
  if (options && options.includeNames) {
    return fooQuestNine.main(options);
  }

  return fooQuestNine.getCategory();
}

function schedule(dayName) {
  const scheduleObj = {};
  const listHours = Object.keys(hours);
  listHours.forEach((day) => {
    if (day === 'Monday') {
      scheduleObj[day] = 'CLOSED';
    } else {
      scheduleObj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    }
  });
  if (dayName) {
    return {
      [dayName]: scheduleObj[dayName],
    };
  }
  return scheduleObj;
}

function oldestFromFirstSpecies(id) {
  const employee = employees.find((e) => e.id === id);
  const animalId = employee.responsibleFor[0];
  const thisAnimal = animals.find((e) => e.id === animalId);
  const oldestAnimal = thisAnimal.residents
    .reduce((previous, current) => ((current.age > previous.age) ? current : previous));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  const listPrices = Object.values(prices);
  const keys = Object.keys(prices);
  const increase = (percentage / 100) + 1;
  const newPrices = listPrices
    .map((price) => price * increase)
    .map((price) => (Math.round(price * 100) / 100));
  keys.forEach((key, index) => { prices[key] = newPrices[index]; });
  return prices;
}
// Objeto com métodos auxiliares para a função employeeCoverage.
const fooQuestThirteen = {
  getEmployeesNtheirAnimals() {
    const obj = {};
    employees.forEach((el) => {
      const { firstName, lastName } = el;
      const name = `${firstName} ${lastName}`;
      obj[name] = el.responsibleFor
        .map((animalId) => animals.find((animal) => animal.id === animalId))
        .map((animal) => animal.name);
    });

    return obj;
  },
  getAnimalsListByIdOrName(idOrName) {
    const boolId = employees.some((el) => el.id === idOrName);
    const boolFirstName = employees.some((el) => el.firstName === idOrName);
    if (boolId) {
      return this.getById(idOrName);
    } if (boolFirstName) {
      return this.getByFirstName(idOrName);
    }
    return this.getByLastName(idOrName);
  },
  getById(id) {
    const obj = {};
    const employee = employees.find((e) => e.id === id);
    const name = `${employee.firstName} ${employee.lastName}`;
    obj[name] = employee.responsibleFor
      .map((animalId) => animals.find((animal) => animal.id === animalId))
      .map((animal) => animal.name);
    return obj;
  },
  getByFirstName(firstName) {
    const obj = {};
    const employee = employees.find((e) => e.firstName === firstName);
    const name = `${employee.firstName} ${employee.lastName}`;
    obj[name] = employee.responsibleFor
      .map((animalId) => animals.find((animal) => animal.id === animalId))
      .map((animal) => animal.name);
    return obj;
  },
  getByLastName(lastName) {
    const obj = {};
    const employee = employees.find((e) => e.lastName === lastName);
    const name = `${employee.firstName} ${employee.lastName}`;
    obj[name] = employee.responsibleFor
      .map((animalId) => animals.find((animal) => animal.id === animalId))
      .map((animal) => animal.name);
    return obj;
  },
};
function employeeCoverage(idOrName) {
  if (idOrName) {
    return fooQuestThirteen.getAnimalsListByIdOrName(idOrName);
  }
  return fooQuestThirteen.getEmployeesNtheirAnimals();
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
