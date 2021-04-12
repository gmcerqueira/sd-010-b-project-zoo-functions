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

const { hours, animals, employees, prices } = data;

function animalsByIds(...ids) {
  return animals
    .filter((animal, index) => (ids[index] === animal.id ? animal : false));
}

function animalsOlderThan(animal, age) {
  const animalName = animals
    .find((element) => (animal === element.name ? animal : false));

  return animalName.residents
    .every((element) => element.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const result = employees
    .find((employee) =>
      (employeeName === employee.firstName
        || employeeName === employee.lastName ? employee : false));

  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo, ...associatedWith,
  };
}

function isManager(id) {
  const arrManagers = [];
  employees.forEach((employee) => arrManagers
    .push(...employee.managers));

  return arrManagers.some((manager) => id === manager);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeObj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return employees.push(employeObj);
}

function animalCount(species) {
  if (!species) {
    return animals
      .reduce((acumulator, { name, residents }) =>
        Object.assign(acumulator, { [name]: residents.length }), {});
  }

  const specie = animals
    .find((animal) => animal.name === species);

  return specie.residents.length;
}

function entryCalculator(entrants = 0) {
  const arrPrices = [];
  const pricesToArray = Object.entries(prices);

  pricesToArray.forEach((element) => {
    const entryValue = entrants[element[0]];

    if (entryValue) {
      arrPrices.push(entryValue * element[1]);
    }
  });

  return arrPrices
    .reduce((acumulator, currentValue) => acumulator + currentValue, 0);
}

function animalMap(options) {
  return options;
}

function schedule(dayName = 0) {
  const scheduleObj = {};

  Object.keys(hours)
    .forEach((day) => {
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
  const idAnimal = employees
    .find((employee) => employee.id === id).responsibleFor[0];

  const objAnimal = animals.find((animal) => animal.id === idAnimal);

  const oldestAnimal = objAnimal.residents.reduce((acumulator, currentValue) =>
    (acumulator.age > currentValue.age ? acumulator : currentValue));

  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  const arrayPrices = Object.entries(prices);

  arrayPrices.forEach((element) => {
    prices[element[0]] = Math.ceil(((element[1]
      * (percentage / 100)) + element[1]) * 100) / 100;
  });

  return prices;
}

function employeeCoverage(idOrName) {
  const objEmployeeCoverage = {};
  const arrEmployee = employees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  const arrAnimalsResponsible = employees
    .map((employee) => employee.responsibleFor.map((animalId) => animals
      .find((animal) => animal.id === animalId))
      .map((animal) => animal.name));
  arrEmployee.forEach((fullName, index) => {
    objEmployeeCoverage[fullName] = arrAnimalsResponsible[index];
  });
  if (idOrName) {
    const employeeInfo = employees.find((employee) =>
      employee.id === idOrName || employee.firstName === idOrName
      || employee.lastName === idOrName);
    const responsibles = objEmployeeCoverage[`${employeeInfo.firstName} ${employeeInfo.lastName}`];
    const fullName = `${employeeInfo.firstName} ${employeeInfo.lastName}`;
    return { [fullName]: responsibles };
  }
  return objEmployeeCoverage;
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
