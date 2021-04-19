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

// Requisito 1
function animalsByIds(idone, idtwo) {
  const response = [];

  if (idone === undefined && idtwo === undefined) { return response; }

  data.animals.forEach((animals) => {
    if (animals.id === idone || animals.id === idtwo) {
      console.log(animals);
      response.push(animals);
    }
  });

  return response;
}

// Requisito 2
function animalsOlderThan(animal, age) {
  let animalsresidents = []; let response = true;

  data.animals.forEach((animals) => {
    if (animals.name === animal) { animalsresidents = animals.residents; }
  });

  animalsresidents.forEach((residents) => {
    if (residents.age <= age) {
      response = false;
    }
  });

  return response;
}

// Requisito 3
function employeeByName(employeeName) {
  let response = {};

  if (employeeName === undefined) { return response; }

  data.employees.forEach((employees) => {
    if (employees.firstName === employeeName || employees.lastName === employeeName) {
      response = employees;
    }
  });

  return response;
}

// Requisito 4
function createEmployee(personalInfo, associatedWith) {
  // Cria um objeto com as propriedades passadas por parâmetro
  const response = {
    ...personalInfo,
    ...associatedWith,
  };

  return response;
}

// Requisito 5
function isManager(id) {
  // Verifica se ao menos um funcionário possui o id informado na chave managers
  const response = data.employees.some((employee) => employee.managers.includes(id));

  return response;
}

// Requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // Utiliza os parâmetros passados para criar um funcionário
  data.employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
}

// Requisito 7
function animalCount(species) {
  let response;

  if (!species) {
    const obj = data.animals.reduce((acc, cur) => {
      const { name } = cur;
      response = { ...acc, [name]: cur.residents.length };
      return response;
    }, {});

    return obj;
  }

  const amount = data.animals.find((animal) => animal.name === species).residents.length;
  return amount;
}

// Requisito 8
function entryCalculator(entrants) {
  if (entrants) {
    const peoples = Object.keys(entrants);

    return peoples.reduce((acc, cur) => acc + (data.prices[cur] * entrants[cur]), 0);
  }
  return 0;
}

// function animalMap(options) {
//   // seu código aqui
// }

// Requisito 10
function schedule(dayName) {
  const days = data.hours; const response = {};

  Object.keys(days).forEach((day) => {
    if (day === 'Monday') {
      response[day] = 'CLOSED';
    } else {
      response[day] = `Open from ${days[day].open}am until ${(days[day].close - 12)}pm`;
    }
  });
  console.log(response);

  if (dayName) {
    return { [dayName]: response[dayName] };
  }
  return response;
}

// Requisito 11
function oldestFromFirstSpecies(id) {
  const { employees, animals } = data; const zero = 0; const response = [];
  let idfirst; let residents; let acc = 0; let position = 0;

  employees.find((employee) => {
    if (employee.id === id) { idfirst = employee.responsibleFor[zero]; } return idfirst;
  });

  animals.find((animal) => {
    if (animal.id === idfirst) { residents = animal.residents; } return residents;
  });

  residents.forEach((animal, index) => {
    if (animal.age > acc) { acc = animal.age; position = index; } return acc;
  });

  const old = residents[position];
  response.push(old.name); response.push(old.sex); response.push(old.age);
  return response;
}

// Requisito 12
function increasePrices(percentage) {
  const { prices } = data;
  const { Adult, Senior, Child } = prices;
  const multiplier = percentage / 100;

  prices.Adult = Math.round(((Adult) + (Adult * multiplier)) * 100) / 100;
  prices.Senior = Math.round(((Senior) + (Senior * multiplier)) * 100) / 100;
  prices.Child = Math.round(((Child) + (Child * multiplier)) * 100) / 100;
}

function verifyEmployee(idOrName) {
  const { employees, animals } = data;
  const response = {};

  const employee = employees.find((people) =>
    people.id === idOrName
    || people.firstName === idOrName
    || people.lastName === idOrName);

  const fullname = `${employee.firstName} ${employee.lastName}`;

  const listAnimals = employee.responsibleFor.reduce((list, animalId) => {
    list.push((animals.find((animal) => animal.id === animalId)).name);
    return list;
  }, []);

  response[fullname] = listAnimals;
  return response;
}

// Requisito 13
function employeeCoverage(idOrName) {
  const { employees, animals } = data; let response = {}; let name; let namesAnimals = [];

  if (!idOrName) {
    employees.forEach((value) => {
      name = `${value.firstName} ${value.lastName}`;

      namesAnimals = value.responsibleFor.reduce((animal, ids) => {
        animal.push(animals.find((curr) => curr.id === ids).name);
        return animal;
      }, []);

      response[name] = namesAnimals;
    });

    return response;
  }

  response = verifyEmployee(idOrName); return response;
}

employeeCoverage();

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
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
