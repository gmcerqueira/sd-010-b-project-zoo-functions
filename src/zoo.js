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

const { employees, prices, hours } = require('./data');
const data = require('./data');

const { animals } = data;

function animalsByIds(...ids) {
  return data.animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals
    .find((animalBuscado) => animalBuscado.name === animal)
    .residents.every((habitante) => habitante.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employee) => {
    const result = employee.firstName === employeeName || employee.lastName === employeeName;
    return result;
  });
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employee = Object.assign(personalInfo, associatedWith);
  return employee;
}

function isManager(id) {
  // seu código aqui
  const arrManagers = [];
  employees.forEach((employee) => arrManagers.push(...employee.managers));
  return arrManagers.some((manager) => id === manager);
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce(
      (acc, { name, residents }) =>
        Object.assign(acc, { [name]: residents.length }),
      {},
    );
  }
  const specie = animals.find((animal) => animal.name === species);
  return specie.residents.length;
}

function entryCalculator(entrants = {}) {
  // seu código aqui
  const entrantsKey = Object.keys(entrants);
  return entrantsKey.reduce((acc, cur) => acc + prices[cur] * entrants[cur], 0);
}

function animalMap(options) {
  // seu código aqui
  const locations = ['NE', 'NW', 'SE', 'SW'];
  if (!options) {
    return locations;
  }
  const { includeNames, sex, sorted } = options;
  if (!includeNames) {
    return locations;
  }
  return (locations, sorted, sex);
}

function schedule(dayName) {
  // seu código aqui
  const obj = {};
  const hoursKeys = Object.keys(hours);
  hoursKeys.forEach((key) => {
    const { open, close } = hours[key];
    if (key === 'Monday') {
      obj[key] = 'CLOSED';
    } else {
      obj[key] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (dayName) return { [dayName]: obj[dayName] };
  return obj;
}
function oldestFromFirstSpecies(idParams) {
  // seu código aqui
  const firstIdAnimal = employees.find(({ id }) => id === idParams)
    .responsibleFor[0];
  const newFind = animals.find(({ id }) => id === firstIdAnimal).residents;
  const { name, sex, age } = newFind
    .reduce((obj, item) => obj.concat(item), [])
    .sort((a, b) => b.age - a.age)[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = prices;
  prices.Adult = Number(
    (Adult + Adult * (percentage / 100) + 0.005).toFixed(2),
  );
  prices.Senior = Number(
    (Senior + Senior * (percentage / 100) + 0.005).toFixed(2),
  );
  prices.Child = Number(
    (Child + Child * (percentage / 100) + 0.005).toFixed(2),
  );
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const filtEmployee = employees.filter((employee) =>
    (idOrName
      ? idOrName === employee.id
        || idOrName === employee.firstName
        || idOrName === employee.lastName
      : true));
  const namesAndAnimals = filtEmployee.reduce(
    (acc, { firstName, lastName, responsibleFor }) => {
      const name = `${firstName} ${lastName}`;
      acc[name] = responsibleFor.map(
        (animalid) => animals.find((animal) => animal.id === animalid).name,
      );
      return acc;
    },
    {},
  );
  return namesAndAnimals;
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
