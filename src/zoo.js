/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data",
  }
]
*/

// Alterar a primeira constante para que seja armazenado o valor do price no ficheiro data.js:
const { animals } = require('./data');
const data = require('./data');

/* VARIÁVEIS DE APOIO GERAIS */
const allEmployees = data.employees;

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const toFilter = animals.find((species) =>
    species.name === animal).residents;

  return toFilter.every((ages) => ages.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
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
    const newObject = animals.reduce((acc, curr) => {
      const { name } = curr;
      return {
        ...acc,
        [name]: curr.residents.length,
      };
    }, {});

    return newObject;
  }

  const toCount = animals.find((animal) => animal.name === species).residents.length;

  return toCount;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants) {
    const visitors = Object.keys(entrants);
    return visitors.reduce((acc, curr) =>
      acc + (data.prices[curr] * entrants[curr]), 0);
  }
  return 0;
}

function animalMap(options) {
  // seu código aqui
  // const allLocations = ['NE', 'NW', 'SE', 'SW'];
  // const animalsByInfo = animals.map((animal) => animal.residents);
  // const animalsByRegion = animals.filter((animal) => animal.location === 'NE');
  return console.log(options);
}

function schedule(dayName) {
  // seu código aqui
  const days = data.hours;
  const newObject = {};

  Object.keys(days).forEach((day) => {
    if (day === 'Monday') newObject[day] = 'CLOSED';
    else newObject[day] = `Open from ${days[day].open}am until ${days[day].close - 12}pm`;
  });

  if (dayName) return { [dayName]: newObject[dayName] };

  return newObject;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const animalFinded = [];
  const getEmployee = allEmployees.find((person) => person.id === id).responsibleFor[0];
  const getAnimal = animals.find((animal) => animal.id === getEmployee)
    .residents.sort((a, b) => b.age - a.age)[0];
  animalFinded.push(getAnimal.name, getAnimal.sex, getAnimal.age);

  /* TO PROTOTYPE */
  // console.log(getEmployee);
  // console.log(getAnimal);
  // console.log(animalFinded);
  // ['Vicky', 'female', 12]
  return animalFinded;
}

function increasePrices(percentage) {
  // seu código aqui
  const { prices } = data;
  let saveA;
  let saveS;
  let saveC;

  Object.values(prices).forEach((price, index) => {
    const calculator = Math.ceil(price * (100 + percentage)) / 100;

    if (index === 0) saveA = calculator;
    if (index === 1) saveS = calculator;
    if (index === 2) saveC = calculator;
  });

  data.prices = { Adult: saveA, Senior: saveS, Child: saveC };
}

/* FUNÇÕES E VARIÁVEIS DE APOIO: employeeCoverage
Requisito 13 resolvido com apoio do algoritmo criado
pelo colega João Vanelli - link:
"https://github.com/tryber/sd-010-b-project-zoo-functions/blob/joao-vanelli-zoo-functions/src/zoo.js"
*/
// declaração de variáveis:
// const allEmployees = data.employees;

// funções de apoio:
function checkEmployee(info) {
  const employee = allEmployees.find((person) =>
    person.id === info || person.firstName === info || person.lastName === info);
  const coverage = employee.responsibleFor.reduce((area, animalId) => { //* substituir o 'area' por algo mais concreto
    area.push((animals.find((animal) => animal.id === animalId)).name); //* dividir as duas HOFs (.push e .find) em duas constantes
    return area;
  }, []);

  return { [`${employee.firstName} ${employee.lastName}`]: coverage }; //* usar o string literal numa variável declarada
}

function employeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) {
    return allEmployees.reduce((acc, employee) => {
      const employeeCovers = employee.responsibleFor.reduce((animal, ids) => {
        animal.push((animals.find((current) => current.id === ids)).name); //* dividir as duas HOFs (.push e .find) em duas constantes
        return animal;
      }, []);
      acc[`${employee.firstName} ${employee.lastName}`] = employeeCovers; //* usar o string literal numa variável declarada
      return acc;
    }, {});
  }

  return checkEmployee(idOrName);
}

// function calls:

// console.log(employeeObject);
// console.log(animalIds);
// console.log(finalObject);

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
