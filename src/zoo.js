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

const {
  animals,
  employees,
  prices,
  hours,
} = require('./data');
const data = require('./data');
// let idade = data.animals;
// console.log(idade)

function animalsByIds(ids, ids2) {
  if (ids2 !== undefined) {
    const animal1 = data.animals.filter((animal) => (animal.id === ids));
    const animal2 = data.animals.filter((animal) => (animal.id === ids2));
    return animal1.concat(animal2);
  }
  return data.animals.filter((animal) => (animal.id === ids));
}

function animalsOlderThan(animal, age) {
  const searchBixo = animals.find((bixo) => bixo.name === animal).residents;
  return searchBixo.every((anim) => anim.age >= age);
}

// Feito com auxilio de Rafael Gumieri

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((emp) => (emp.firstName === employeeName || emp.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const bodega = {
    ...personalInfo,
    ...associatedWith,
  };
  return bodega;
}

function isManager(id) {
  let sadBoy = 0;
  employees.filter((gerente) => gerente.managers.forEach((item) => {
    if (item === id) {
      sadBoy += 1;
    }
  }));
  if (sadBoy > 0) {
    return true;
  }
  return false;
}
// Pedro Henrique e eu fizemos juntos

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const inserir = data.employees;
  const empregado = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  if (managers === undefined) {
    empregado.managers = [];
  }
  if (responsibleFor === undefined) {
    empregado.responsibleFor = [];
  }
  return inserir.push(empregado);
}

function animalCount(species) {
  if (species !== undefined) {
    return data.animals.find((bixo) => bixo.name === species).residents.length;
  }
  if (species === undefined) {
    return data.animals.reduce((bixoAcc, quanti) => {
      const inferno = bixoAcc;
      inferno[quanti.name] = quanti.residents.length;
      return inferno;
    }, {});
  }
}

function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const treco = Object.keys(entrants);
  let total = 0;
  treco.forEach((key) => {
    const result = data.prices[key] * entrants[key];
    total += result;
  });
  return total;
}
// ---------------------------------------------------------------------------------------
// function semPar() {
//   return data.animals.reduce((bixoAcc, quanti) => {
//     if (!bixoAcc[quanti.location]) {
//       bixoAcc[quanti.location] = [];
//     }
//     bixoAcc[quanti.location].push(quanti.name);
//     return bixoAcc;
//   }, {});
// }

// function puxaLocal() {
//   return data.animals.reduce((bixoAcc, quanti) => {
//     if (!bixoAcc[quanti.location]) {
//       bixoAcc[quanti.location] = [];
//     }
//     bixoAcc[quanti.location].push(quanti.name);
//     return bixoAcc;
//   }, {});
// }

// function animalMap(options) {
//   if (!options) {
//     return semPar();
//   }
//   const obj = Object.keys(options);
//   if (obj.includes('includeNames')) {
//     return data.animals.reduce((bixoAcc, quanti) => {
//       if (!bixoAcc[quanti.name]) {
//         bixoAcc[quanti.name] = [];
//       }
//       quanti.residents.forEach((resident) => bixoAcc[quanti.name].push(resident.name));
//       return bixoAcc;
//     }, {});
//   }
// }
// // console.log(animalMap({ includeNames: true }))
// ------------------------------------------------------------------------------------------------------
function schedule(dayName) {
  const seila = Object.keys(hours);
  const seila2 = Object.values(hours);
  const total = {};
  seila.forEach((dat, index) => {
    total[dat] = `Open from ${seila2[index].open}am until ${seila2[index].close - 12}pm`;
  });
  total.Monday = 'CLOSED';
  if (!dayName) {
    return total;
  }
  return {
    [dayName]: total[dayName],
  };
  // notação de ponto não funciona para váriaveis
  // Agradecimentos ao Henrique zozimo
}

function oldestFromFirstSpecies(id) {
  const person = data.employees.find((employe) => employe.id === id).responsibleFor[0];
  const bixo = data.animals.find((animais) => animais.id === person).residents;
  const bixoMaisVelho = bixo.reduce((bixo1, bixo2) => (bixo1.age > bixo2.age ? bixo1 : bixo2));
  return Object.values(bixoMaisVelho);
}

function increasePrices(percentage) {
  const {
    Adult,
    Senior,
    Child,
  } = prices;
  const porce = percentage / 100;
  prices.Adult = Math.round(((Adult * porce) + Adult) * 100) / 100;
  prices.Senior = Math.round(((Senior * porce) + Senior) * 100) / 100;
  prices.Child = Math.round(((Child * porce) + Child) * 100) / 100;
}
// aradecimento ao Lucas Martins

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
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
