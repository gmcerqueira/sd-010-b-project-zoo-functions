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

const { animals, employees, prices } = data;

const isTheAnimal = (animal, ...ids) => {
  for (let i = 0; i < ids.length; i += 1) {
    if (animal.id === ids[i]) return animal;
  }
};

const animalsByIds = (...ids) => {
  if (ids[0] === undefined) return [];
  return animals.filter((animal) => isTheAnimal(animal, ...ids));
};

const animalsBySpecie = (specieName) => {
  const selectedSpecie = animals.find((specie) => specie.name === specieName);
  return selectedSpecie.residents;
};

const animalsOlderThan = (specieName, age) => {
  // seu código aqui
  const animalsSpecie = animalsBySpecie(specieName);
  return animalsSpecie.every((animal) => animal.age >= age);
};

const selectedEmployee = (name) => {
  const selected = employees.find((empl) => empl.firstName === name || empl.lastName === name);
  return selected;
};

const employeeByName = (employeeName) => {
  // seu código aqui
  if (employeeName === undefined) return {};
  return selectedEmployee(employeeName);
};

const createEmployee = ({ id, firstName, lastName }, { managers, responsibleFor }) => {
  // seu código aqui
  const employee = { id, firstName, lastName, managers, responsibleFor };
  return employee;
};

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

const animalQuantity = () => {
  const quantity = { };
  animals.forEach((animal) => { quantity[animal.name] = animal.residents.length; });
  return quantity;
};

const animalCount = (species) => {
  // seu código aqui
  if (species === undefined) return animalQuantity();
  return animals.find((animal) => animal.name === species).residents.length;
};

const entryValue = (entrants) => {
  const value = Object.keys(entrants);
  const toPay = value.reduce((acc, cur) => acc + entrants[cur] * prices[cur], 0);
  return toPay;
};

const entryCalculator = (entrants) => {
  // seu código aqui
  if (entrants === undefined || entrants === { }) return 0;
  return entryValue(entrants);
};

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

const increase = (value, percentage) => Math.round(value * ((percentage / 100) + 1) * 100) / 100;

// toFixed(2)
const increasePrices = (percentage) => {
  const pricesArr = Object.keys(prices);
  pricesArr.forEach((price) => {
    prices[price] = increase(prices[price], percentage);
    return prices[price];
  });
  return prices;
};

const search = (emp, ID) => (emp.id === ID || emp.firstName === ID || emp.lastName === ID);

const employeeByIdOrName = (idOrName) => {
  const selected = employees.find((emp) => search(emp, idOrName));
  return selected;
};

const employeeAnimals = (idOrName) => {
  const emp = employeeByIdOrName(idOrName);
  const resp = `${emp.firstName} ${emp.lastName}`;
  const obj = {};
  const respon = emp.responsibleFor;
  obj[resp] = respon.map((item) => {
    const anim = animals.find((animal) => animal.id === item);
    return anim.name;
  });
  return obj;
};

const allEmployeesAnimals = () => {
  const obj = {};
  employees.forEach((emp) => {
    const respon = emp.responsibleFor;
    obj[`${emp.firstName} ${emp.lastName}`] = respon.map((item) => {
      const anim = animals.find((animal) => animal.id === item);
      return anim.name;
    });
  });
  return obj;
};

const employeeCoverage = (idOrName) => {
  // seu código aqui
  if (idOrName === undefined) return allEmployeesAnimals();
  return employeeAnimals(idOrName);
};

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
