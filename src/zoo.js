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

const { animals, employees, prices, hours } = data;

// ------------------------------------------------------------------------------------------------

const validateAnimals = (element, ids) => {
  for (let index = 0; index < ids.length; index += 1) {
    if (element.id === ids[index]) {
      return element;
    }
  }
};
const validateAnimal = (element, ids) => {
  if (element.id === ids[0]) {
    return element;
  }
};

const moreThanOneId = (ids) => animals.filter((element) => validateAnimals(element, ids));

const onlyOneId = (ids) => animals.filter((element) => validateAnimal(element, ids));

function animalsByIds(...ids) {
  // seu código aqui
  if (!ids[0]) return [];
  if (ids.length === 1) onlyOneId(ids);
  return moreThanOneId(ids);
}

// ------------------------------------------------------------------------------------------------

const filterAnimalNames = (element, animal) => {
  if (element.name === animal) {
    return element;
  }
};

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalNames = animals.filter((element) => filterAnimalNames(element, animal));
  return animalNames[0].residents.every((element) => element.age >= age);
}

// ------------------------------------------------------------------------------------------------

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((el) => el.firstName === employeeName || el.lastName === employeeName);
}

// ------------------------------------------------------------------------------------------------

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  employees.personalInfo = personalInfo;
  return Object.assign(employees.personalInfo, associatedWith);
}

// ------------------------------------------------------------------------------------------------

function isManager(id) {
  // seu código aqui
  const arrayOfManagers = employees.map((el) => el.managers);
  const managersFlattenArray = [].concat(...arrayOfManagers);
  return managersFlattenArray.some((element) => element === id);
}

// ------------------------------------------------------------------------------------------------

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// ------------------------------------------------------------------------------------------------

const undefinedAnimals = (item) => {
  const newObj = {};
  item.forEach((element) => {
    newObj[element.name] = element.residents.length;
  });
  return newObj;
};

function animalCount(species = animals) {
  // seu código aqui
  if (species === animals) return undefinedAnimals(animals);
  for (let x = 0; x < animals.length; x += 1) {
    if (animals[x].name === species) return animals[x].residents.length;
  }
}

// ------------------------------------------------------------------------------------------------

const calculateValue = (entrants) => {
  let value = 0;
  if (entrants.Adult) value += (entrants.Adult * prices.Adult);
  if (entrants.Child) value += (entrants.Child * prices.Child);
  if (entrants.Senior) value += (entrants.Senior * prices.Senior);
  return value;
};

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return calculateValue(entrants);
}

// ------------------------------------------------------------------------------------------------

const hoursDay = (day) => {
  let pmHour = day.close;
  if (day.close > 12) {
    pmHour -= 12;
  }
  if (day.close === 0 && day.open === 0) return 'CLOSED';
  const daySchedule = `Open from ${day.open}am until ${pmHour}pm`;
  return daySchedule;
};
const otherDays = (day) => {
  if (day === 'Friday') return { Friday: hoursDay(hours.Friday) };
  return { Sunday: hoursDay(hours.Sunday) };
};

const accessSchedule = (day) => {
  if (day === 'Monday') return { Monday: hoursDay(hours.Monday) };
  if (day === 'Tuesday') return { Tuesday: hoursDay(hours.Tuesday) };
  if (day === 'Wednesday') return { Wednesday: hoursDay(hours.Wednesday) };
  if (day === 'Thursday') return { Thursday: hoursDay(hours.Thursday) };
  return otherDays(day);
};

const createSchedule = {
  Friday: hoursDay(hours.Friday),
  Monday: hoursDay(hours.Monday),
  Saturday: hoursDay(hours.Saturday),
  Sunday: hoursDay(hours.Sunday),
  Tuesday: hoursDay(hours.Tuesday),
  Thursday: hoursDay(hours.Thursday),
  Wednesday: hoursDay(hours.Wednesday),
};

function schedule(dayName) {
  // seu código aqui
  if (!dayName) return createSchedule;
  return accessSchedule(dayName);
}

// ------------------------------------------------------------------------------------------------

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const findEmployee = employees.find((item) => item.id === id);
  const animal = animals.find((element) => element.id === findEmployee.responsibleFor[0]);
  return Object.values(animal.residents.reduce((prev, at) => {
    if (prev.age > at.age) {
      return prev;
    }
    return at;
  }));
}

// ------------------------------------------------------------------------------------------------

function increasePrices(percentage) {
  // seu código aqui
  const toDecimal = (percentage * 0.1 * 0.1) + 1;
  prices.Adult = Math.round(toDecimal * prices.Adult * 100) / 100;
  prices.Child = Math.round(toDecimal * prices.Child * 100) / 100;
  prices.Senior = Math.round(toDecimal * prices.Senior * 100) / 100;
}

// ------------------------------------------------------------------------------------------------

const findAnimal = (animal) => {
  const animalIds = animal.responsibleFor;
  const listAnimals = animalIds.map((id) => (animals.find((element) => element.id === id).name));
  return listAnimals;
};

// essa função fiz baseado no código do Gustavo Cerqueira;
const undefinedIdOrName = () => employees.reduce((obj, item) => {
  const object = obj;
  const fullName = `${item.firstName} ${item.lastName}`;
  object[fullName] = findAnimal(item);
  return object;
}, {});

const createEmployeeId = (idOrName) => employees.reduce((obj, item) => {
  const objeto = obj;
  if (item.id === idOrName) {
    objeto[`${item.firstName} ${item.lastName}`] = findAnimal(item);
  }
  return objeto;
}, {});

const createEmployeeFirstName = (idOrName) => employees.reduce((obj, item) => {
  const objeto = obj;
  if (item.firstName === idOrName) {
    objeto[`${item.firstName} ${item.lastName}`] = findAnimal(item);
  }
  return objeto;
}, {});

const createEmployeeLastName = (idOrName) => employees.reduce((obj, item) => {
  const objeto = obj;
  if (item.lastName === idOrName) {
    objeto[`${item.firstName} ${item.lastName}`] = findAnimal(item);
  }
  return objeto;
}, {});

// feito com ajuda do estima Alan Tanaka :DD
const definedIdOrName = (idOrName) => {
  const validateId = employees.some((employee) => employee.id === idOrName);
  const validateFirstName = employees.some((employee) => employee.firstName === idOrName);
  if (validateId) {
    return createEmployeeId(idOrName);
  }
  if (validateFirstName) {
    return createEmployeeFirstName(idOrName);
  }
  return createEmployeeLastName(idOrName);
};

function employeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) return undefinedIdOrName();
  return definedIdOrName(idOrName);
}
// ------------------------------------------------------------------------------------------------

const createAnimalWithLocation = (number) => {
  const geoLocations = ['NE', 'NW', 'SE', 'SW'];
  return animals.reduce((acc, curr) => {
    const array = acc;
    if (curr.location === geoLocations[number]) {
      array.push(curr.name);
    }
    return array;
  }, []);
};

// resolução parâmetro 1
const undefinedOptions = () => {
  const NE = createAnimalWithLocation(0);
  const NW = createAnimalWithLocation(1);
  const SE = createAnimalWithLocation(2);
  const SW = createAnimalWithLocation(3);
  return { NE, NW, SE, SW };
};

const createObjectAnimals = (number) => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  return animals.reduce((arr, curr) => {
    const array = arr;
    if (curr.location === locations[number]) {
      array.push(animals.reduce((obj) => {
        const objeto = obj;
        objeto[curr.name] = curr.residents.reduce((acc, item) => {
          const arrayNames = acc;
          arrayNames.push(item.name);
          return arrayNames;
        }, []);
        return objeto;
      }, {}));
    }
    return array;
  }, []);
};

const includeNames = () => {
  const NE = createObjectAnimals(0);
  const NW = createObjectAnimals(1);
  const SE = createObjectAnimals(2);
  const SW = createObjectAnimals(3);
  return { NE, NW, SE, SW };
};

function animalMap(options) {
  // seu código aqui
  if (!options) return undefinedOptions();
  if (options.includeNames) return includeNames();
}

module.exports = {
  animalMap,
  employeeCoverage,
  increasePrices,
  oldestFromFirstSpecies,
  schedule,
  entryCalculator,
  animalCount,
  isManager,
  animalsByIds,
  createEmployee,
  animalsOlderThan,
  employeeByName,
  addEmployee,
};
