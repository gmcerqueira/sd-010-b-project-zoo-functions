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

// const expected = {
//   NE: [
//     { lions: ["Zena", "Maxwell", "Faustino", "Dee"] },
//     { giraffes: ["Gracia", "Antone", "Vicky", "Clay", "Arron", "Bernard"] },
//   ],
//   NW: [
//     { tigers: ["Shu", "Esther"] },
//     { bears: ["Hiram", "Edwardo", "Milan"] },
//     { elephants: ["Ilana", "Orval", "Bea", "Jefferson"] },
//   ],
//   SE: [
//     { penguins: ["Joe", "Tad", "Keri", "Nicholas"] },
//     { otters: ["Neville", "Lloyd", "Mercedes", "Margherita"] },
//   ],
//   SW: [{ frogs: ["Cathey", "Annice"] }, { snakes: ["Paulette", "Bill"] }],
// };
function animalMap(options) {}

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

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
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
