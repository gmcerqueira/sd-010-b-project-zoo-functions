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
  // seu código aqui
  return animals.filter((animal) => ids.some((id) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const result = animals.find((raça) => raça.name === animal);
  return result.residents.every((idade) => idade.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((gerente) => gerente.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  const allSpecies = {};
  animals.forEach(({ name, residents }) => {
    allSpecies[name] = residents.length;
  });
  if (species === undefined) return allSpecies;
  return allSpecies[species];
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  const array = [];
  Object.entries(entrants).forEach(([key, value]) => {
    if (prices.hasOwnProperty.call(entrants, key)) {
      array.push(prices[key] * value);
    }
  });
  return array.reduce((acc, curr) => acc + curr, 0);
}
//-------------------------------------------------------------------------------------------
// const getAnimalsLocation = () => {
//   const animais = {};
//   animals.forEach(({ location }) => {
//     animais[location] = [];
//   });
//   return animais;
// };

// const getAnimalsNames = () => {
//   const object = getAnimalsLocation();
//   animals.map((animal) => object[animal.location].push(animal.name));
//   return object;
// };

// const getAnimalsOptions = () => {
//   const object = getAnimalsLocation();
//   animals.forEach(({ name, location, residents }) => { // desestruturando meu parâtro de entrada
//     // passo as chaves por parametro e pego com o spread o objeto que já foi adicionado (...object[location]) e adiciono um novo.(Murillo Wolf)
//     object[location] = [...object[location], { [name]: residents.map((names) =>
//       names.name) }];
//   });
//   return object;
// };

// const getAnimalsOptionsSorted = () => {
//   const object = getAnimalsLocation();
//   animals.forEach(({ name, location, residents }) => {
//     object[location] = [...object[location], { [name]: residents.map((names) =>
//       names.name).sort() }];
//   });
//   return object;
// };

// function animalMap(options) {
//   // seu código aqui
//   if (options === undefined) return getAnimalsNames();
//   const { includeNames, sorted } = options;
//   if (includeNames && sorted) {
//     return getAnimalsOptionsSorted();
//   }
//   if (includeNames) {
//     return getAnimalsOptions();
//   }
// }
// const options = { includeNames: true };
// console.log(animalMap());
// //------------------------------------------------------------------------------------------------------------
function schedule(dayName) {
  // seu código aqui
  const object = {};
  const keys = Object.keys(hours);
  keys.forEach((day) => {
    if (day === 'Monday') {
      object[day] = 'CLOSED';
    } else {
      object[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`; // Dica do grupo no Discord
    }
  });
  if (dayName) { // Feito com ajuda do pessoal no grupo de estudos;
    return { // Com parâmetro retorno um objeto com a chave parametro e o valor pego do meu objeto que possui a mesma chave.
      [dayName]: object[dayName],
    };
  }
  return object;
}
console.log(schedule('Tuesday'));
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
  // animalMap,
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
