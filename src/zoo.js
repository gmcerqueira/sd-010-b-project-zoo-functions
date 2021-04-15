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

// object destructuring em Data para acessar futuramente essas propriedades.
const { animals, employees, prices, hours } = require('./data');

// spread operator para iterar os ids no parametro se houver mais de um.
// filter para retornar um array comparando se o animal inclui tal id.
// e a escolha pelo filter se dá pelo fato de que Id's' são unicos.
function animalsByIds(...ids) {
  return animals.filter((animal) => (ids.includes(animal.id)));
}

// faz uma busca pelo primeiro valor que corresponde a especie do animal
// compara se 'every' animais daquela especie tem age minima, dada no parametro 'age' test.
function animalsOlderThan(type, age) {
  return animals.find((animal) => (animal.name === type)).residents
    .every((resident) => (resident.age >= age));
}

// object destructuring nos parametros do find
// find procura e compara o first ou last name, e caso não tenha param. retorna {}
function employeeByName(employeeName) {
  return employees.find(({ firstName, lastName }) => (
    firstName === employeeName || lastName === employeeName
  )) || {};
}

// spread operator
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

// valida se o employee.id dado como parametro, possui cargo de manager.
function isManager(id) {
  return employees.some((employee) => (employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
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
    return animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return animals.find((animal) => (animal.name === species)).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) return 0;
  const entries = Object.keys(entrants);
  return entries.reduce((acc, cur) => acc + (entrants[cur] * prices[cur]), 0);
}

// aqui eu tentei usar essa logica pra buscar por localidade e reduzir a somente os nomes dos animais
// Ja que enfrentei dificuldades pra acessar os CURR values no meu reduce
// na função GETLOCATION mais abaixo.

//  const ne = animals
//  .filter(({location}) => location === 'NE')
//  .reduce((acc,curr) =>  [acc.name, curr.name]);
//  console.log(ne);

// então quando usei a logica de cima, vi que ele retornava 'undefined'
// quando "acc[location] = [acc.name, curr.name]",
// então resolvi usando um IF quando não houver um acc[location], ele ser um array vazio
// e pra não retornar somente o ultimo valor de curr, eu dei um PUSH pra receber todos
// Usei essa logica abaixo, dentro da function AnimalMap na primeira tentativa, mas não obtive exito.

// const { includeNames = false, sorted = false, sex } = options;
// const locationWithName = animals.reduce((acc, { name, location }) => {
//   if (!acc[location]) acc[location] = [];
//   acc[location].push(name);
//   return acc;
// }, {});
// if (includeNames) {
//   // return Object.entries(locationWithName)
//   //   .reduce((acc, [key, animalNames]) => {
//   //   acc[key] = animalNames
//   //   .map((name) => residentsName(locations , name , sorted, sex));
//   //   return acc;
//   // }, {});
// }
// depois de não achar a solução, procurei no slack,
// e vi que o Gabriel oliva havia feito um plantão com uma resolução colaborativa
// e me baseando na logica que ele construi, desenvolvi a seguinte :

const anmByLocation = (locations) => {
  const animalObj = { };

  locations.forEach((location) => {
    const filtered = animals
      .filter((animal) => animal.location === location)
      .map((animal) => animal.name);

    animalObj[location] = filtered;
  });

  return animalObj;
};

function anmByLocationIncludes(regions, sorted, sex) {
  const animalsByLocation = {};
  regions.forEach((location) => {
    const sortedAnimals = animals
      .filter((animal) => (animal.location === location))
      .map((animal) => {
        const nameKey = animal.name;
        const nameValue = animal.residents
          .filter((resident) => {
            const filtered = sex !== undefined;
            return filtered ? resident.sex === sex : true;
          })
          .map((resident) => (resident.name));
        if (sorted) nameValue.sort();
        return { [nameKey]: nameValue };
      });
    animalsByLocation[location] = sortedAnimals;
  });
  return animalsByLocation;
}

function animalMap(options) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  if (!options) {
    return anmByLocation(locations);
  }
  const { includeNames, sex, sorted } = options;
  if (!includeNames) {
    return anmByLocation(locations);
  }
  return anmByLocationIncludes(locations, sorted, sex);
}

//
// const residentsName = (locations, sorted, sex) => {
//   // com const ele não passa.
//   //let residents = animals.find((animal) => animal.name === specieName).residents;
//   locations.forEach((location) => {
//     const animalObj = {};
//     const filtered = animals
//     .filter((animal)=> animal.location === location)
//     .map((animal) => {
//       const nameKey = animal.name;
//       const nameValue = animal.residents.map((resident)=> resident.name);
//       //if (sex) nameValue = animal.residents.filter(resident => resident.sex === sex);
//       //if (sorted) nameValue.sort();
//       return { [nameKey]: nameValue };
//       })
//       return animalObj[locations] = filtered;
//   })
// };

// 'reduce' para me retornar um array novo com 'hours' em uma chave só no formato requisitado.
// 'if' caso exista um parametro.
function schedule(dayName) {
  const days = Object.entries(hours).reduce((acc, [key, value]) => {
    const [am, pm] = Object.values(value);
    acc[key] = key === 'Monday' ? 'CLOSED' : `Open from ${am}am until ${pm % 12}pm`; // Usando o % 12 eu formato o tipo de saida da hora.
    return acc;
  }, {});
  if (dayName) {
    const hour = days[dayName];
    return { [dayName]: hour };
  }
  return days;
}
// console.log(schedule('Tuesday'));

// Aqui eu encontro o responsavel pelo ID, depois os animais
// com o sort eu faço uma lista ordenada por idade, e retorno o maior deles.
function oldestFromFirstSpecies(id) {
  const employeeResp = employees.find((employee) => (employee.id === id)).responsibleFor[0];
  const older = animals
    .find((animal) => (animal.id === employeeResp)).residents
    .sort((a, b) => a.age - b.age);
  return Object.values(older[older.length - 1]);
}

function increasePrices(percentage) {
  Object.entries(prices).forEach(([category, price]) => {
    const newPrice = price * (1 + (percentage / 100));
    prices[category] = Math.round(newPrice * 100) / 100;
  });
}

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
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
