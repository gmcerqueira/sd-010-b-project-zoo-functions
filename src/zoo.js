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

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const animalReduce = [...ids];
  const animalSeach = animalReduce.reduce((animalIdAcc, id) => {
  //  onde estão os animais?
    const { animals } = data;
    //  pegue o id e vá de encontro ao animal.
    const locator = animals.find((animal) => animal.id === id);
    //  armazene o animal
    return animalIdAcc.concat(locator);
  }, []);
  //  retorne todos animais.
  return animalSeach;
}

function animalsOlderThan(animal, age) {
  //  seu código aqui
  //  onde está o animal?
  const { animals } = data;
  //  qual é este animal?
  const animalSeach = animals.find(({ name }) => name === animal);
  //  array com todos da mesma especie;
  const sameSpecies = animalSeach.residents.reduce((espAcc, espAnimal) => {
    if (espAnimal.age < age) {
      return false;
    }
    // ele sempre retornará o ultimo valor.
    return espAcc;
  }, true);
  return sameSpecies;
}

function employeeByName(employeeName) {
  // Não passou nada? não entrega nada, pra esse pão duro!
  if (employeeName === undefined) {
    return {};
  }
  // onde estão os funcionários?
  const { employees } = data;
  // Quem é esse funcionário Object by First name
  const firstNameSeach = employees.find(({ firstName }) => firstName === employeeName);
  // Quem é esse funcionário Object by LastName
  const lastNameSeach = employees.find(({ lastName }) => lastName === employeeName);

  if (firstNameSeach === undefined) {
    return lastNameSeach;
  }

  return firstNameSeach;
}

function createEmployee(personalInfo, associatedWith) {
  const employee = {
    ...personalInfo,
    ...associatedWith,
  };
  return employee;
}

function isManager(id) {
  const { employees } = data;
  const haveManager = employees.reduce((employeeAcc, employeeActual) => {
    const { managers } = employeeActual;
    const searchManager = managers.reduce((verifyAcc, currentManager) => {
      if (currentManager === id) {
        return true;
      }
      return verifyAcc;
    }, false);
    if (searchManager === true) {
      return true;
    }
    return employeeAcc;
  }, false);
  return haveManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id: [id],
    firstName: [firstName],
    lastName: [lastName],
    managers: [managers],
    responsibleFor: [responsibleFor],
  };

  data.employees.push(newEmployee);
}

function animalCount(species) {
  const { animals } = data;
  if (species === undefined) {
    const animalCountAll = animals.reduce((animalsAcc, animal) => {
      const { residents } = animal;
      const animalQtd = residents.length;
      const animalObject = {
        [animal.name]: animalQtd,
      };
      return { ...animalObject, ...animalsAcc };
    }, {});
    return animalCountAll;
  }
  const animalSeach = animals.find(({ name }) => name === species);
  return animalSeach.residents.length;
}

function entryCalculator(entrants) {
  const { prices } = data;
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  // lista de visitantes
  const listWithEntrants = Object.keys(entrants);
  return listWithEntrants.reduce((acc, current) => {
    const total = ((prices[current]) * (entrants[current]));
    return acc + total;
  }, 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

function increasePrices(percentage) {
  const { prices } = data;
  const { Adult, Child, Senior } = prices;
  const increase = (percentage / 100);
  prices.Adult = parseFloat(((Adult + (Adult * increase)) + (0.005)).toFixed(2));
  prices.Child = parseFloat(((Child + (Child * increase)) + (0.005)).toFixed(2));
  prices.Senior = parseFloat(((Senior + (Senior * increase)) + (0.005)).toFixed(2));
}

// function employeeCoverage(idOrName) {
//   const { employees } = data;
//   const {animals} = data;
//   if (idOrName === undefined) {
//     const listOfAll = employees.reduce((employeesAcc, currEmployee) => {
//       const nameOfemployee = `${currEmployee.firstName} ${currEmployee.lastName}`;
//     }, {});
//     return listOfAll;
//   }
//   }

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
