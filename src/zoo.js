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
  const animalsId = [];
  if (ids.length === 0) {
    return [];
  }
  ids.forEach((id) => {
    const res = animals.filter((animal) => animal.id === id);
    animalsId.push(res[0]);
  });
  return animalsId;
}

function animalsOlderThan(animal, age) {
  let verifyAge = false;
  animals.forEach((element) => {
    const { residents, name } = element;
    if (name === animal) {
      verifyAge = residents.every((resident) => resident.age >= age);
    }
  });
  return verifyAge;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const name = employees.filter((employee) => {
    const { firstName, lastName } = employee;
    return (firstName === employeeName || lastName === employeeName);
  });
  return name[0];
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const arrManager = [];
  employees.forEach((employee) => {
    const { managers } = employee;
    const trueManager = managers.find((manager) => manager === id);
    arrManager.push(trueManager);
  });
  return arrManager.some((manager) => manager !== undefined);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const lastEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(lastEmployee);
}

function animalCount(species) {
  const objAnimal = {};
  let totalAnimal = 0;
  if (species === undefined) {
    animals.forEach((animal) => {
      const countAnimal = animal.residents.length;
      objAnimal[animal.name] = countAnimal;
    });
    return objAnimal;
  }
  animals.forEach((animal) => {
    if (animal.name === species) {
      totalAnimal = animal.residents.length;
    }
  });
  return totalAnimal;
}

function entryCalculator(entrants) {
  const array2 = [];
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const arr = Object.keys(entrants);
  arr.forEach((value) => {
    array2.push(entrants[value] * prices[value]);
    return array2;
  });
  const totalPrice = array2.reduce((acc, curr) => acc + curr);
  return totalPrice;
}

// function animalMap(options) {
//   const objAnimal = {}
//   if (options === undefined) {
//     const locationsArr = ['NE', 'NW', 'SE', 'SW']
//     locationsArr.forEach((location) => {
//       const arrLoc = animals.filter((animal) => animal.location === location)
//       const arrayTotal = arrLoc.reduce((acc, curr) => {
//         acc.push(curr.name);
//         return acc;
//       },[])
//       objAnimal[location] = arrayTotal;
//     })
//     return objAnimal;
//   }
// }

function daySchedule(arr) { // complemento da função schedule
  const res = arr.reduce((acc, curr) => {
    if (curr !== 'Monday') {
      acc[curr] = `Open from ${hours[curr].open}am until ${hours[curr].close - 12}pm`;
    } else {
      acc[curr] = 'CLOSED';
    }
    return acc;
  }, {});
  return res;
}

function schedule(dayName) {
  const arrKeys = Object.keys(hours);
  const objHours = {};
  if (dayName === undefined) {
    const arrHours = daySchedule(arrKeys);
    return arrHours;
  }
  if (dayName === 'Monday') {
    objHours[dayName] = 'CLOSED';
  } else {
    objHours[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  }
  return objHours;
}

function result(element) {
  let responsible;
  element.forEach((el) => {
    responsible = el.responsibleFor;
  });
  return responsible;
}

function oldestFromFirstSpecies(id) {
  const resEmployee = employees.filter((employee) => employee.id === id);
  let maior = 0;
  let arrValues;
  const idAnimal = result(resEmployee);
  animals.forEach((animal) => {
    const { residents } = animal;
    if (animal.id === idAnimal[0]) {
      residents.forEach((resident) => {
        if (resident.age > maior) {
          maior = resident.age;
          arrValues = Object.values(resident);
        }
      });
    }
  });
  return arrValues;
}

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
  oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
