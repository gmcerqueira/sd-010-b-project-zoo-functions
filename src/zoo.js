const data = require('./data');

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return animals.filter((i) => ids.some((id) => id === i.id));
}

function animalsOlderThan(animal, age) {
  return animals
    .find((item) => item.name === animal)
    .residents.every((i) => i.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const obj = {};
  return Object.assign(obj, personalInfo, associatedWith);
  // const obj = { ...personalInfo, ...associatedWith };
  // return obj;
  // o spread é mais simples, mas acho o assign mais estilo rs. :)
}

function isManager(id) {
  // seu código aqui
  return employees.some((i) => i.managers.some((j) => j === id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((result, item) => {
      const final = result;
      final[item.name] = item.residents.length;
      return final;
    }, {});
  }
  return animals.find((i) => i.name === species).residents.length;
}

// prices: {
//   Adult: 49.99,
//   Senior: 24.99,
//   Child: 20.99,
// },

function entryCalculator(entrants) {
  if (!entrants) return 0;
  let total = 0;
  const arr = Object.keys(entrants);

  arr.forEach((i) => {
    total += prices[i] * entrants[i];
  });

  return total;
}

// function animalMap(options) {}

function schedule(dayName) {
  const keys = Object.keys(hours);
  const obj = {};
  for (let i = 0; i < keys.length; i += 1) {
    obj[keys[i]] = `Open from ${hours[keys[i]].open}am until ${
      hours[keys[i]].close - 12
    }pm`;
    if (keys[i] === 'Monday') {
      obj[keys[i]] = 'CLOSED';
    }
  }
  if (!dayName) return obj;
  return { [dayName]: obj[dayName] };
}

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

const makeName = (idOrName) => {
  const obj = {};
  if (idOrName.length > 10) {
    const person = employees.filter((elem) => elem.id === idOrName);
    const nome = `${person[0].firstName} ${person[0].lastName}`;
    obj[nome] = person[0].responsibleFor.map((i) => animals.find((j) => j.id === i).name);
  } else {
    const p = employees.filter((elem) => elem.firstName === idOrName || elem.lastName === idOrName);
    const nome = `${p[0].firstName} ${p[0].lastName}`;
    obj[nome] = p[0].responsibleFor.map((i) => animals.find((j) => j.id === i).name);
  }
  return obj;
};

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((result, item) => {
      const { firstName, lastName } = item;
      const final = result;
      const name = `${firstName} ${lastName}`;
      const chosen = item.responsibleFor.map((i) => animals.find((j) => j.id === i).name);
      final[name] = chosen;
      return final;
    }, {});
  }
  return makeName(idOrName);
}

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
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
