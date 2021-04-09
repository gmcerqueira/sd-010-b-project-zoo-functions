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

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

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

// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

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
  // entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
