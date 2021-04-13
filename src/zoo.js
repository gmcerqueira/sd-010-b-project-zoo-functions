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
// const data = require('./data');

// ------------------------------------------------------------------
// REQUISITO 01 - animalsByIds
// ------------------------------------------------------------------

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

// ------------------------------------------------------------------
// REQUISITO 02 - animalsOlderThan
// ------------------------------------------------------------------

function animalsOlderThan(animal, age) {
  const animalObj = animals.find((element) => element.name === animal); // Pega apenas o objeto do parametro animal dentro de animals
  const animalAges = animalObj.residents.map((element) => element.age); // Cria uma array com as idades de todos os animais dentro do objeto
  return animalAges.every((value) => value > age); // Verifica se todos os valores da array de idades contempla o parametro age
}

// ------------------------------------------------------------------
// REQUISITO 03 - employeeByName
// ------------------------------------------------------------------

function employeeByName(employeeName) {
  let result = {};
  if (employees.find((employee) => employee.firstName === employeeName)) {
    result = employees.find((employee) => employee.firstName === employeeName);
  } else if (employees.find((employee) => employee.lastName === employeeName)) {
    result = employees.find((employee) => employee.lastName === employeeName);
  }
  return result;
}

// ------------------------------------------------------------------
// REQUISITO 04 - createEmployee
// ------------------------------------------------------------------

function createEmployee(personalInfo, associatedWith) {
  const {
    id,
    firstName,
    lastName,
  } = personalInfo;
  const {
    managers,
    responsibleFor,
  } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

// ------------------------------------------------------------------
// REQUISITO 05 - isManager
// ------------------------------------------------------------------

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

// ------------------------------------------------------------------
// REQUISITO 06 - addEmployee
// ------------------------------------------------------------------

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
  return newEmployee;
}

// ------------------------------------------------------------------
// REQUISITO 07 - animalCount
// ------------------------------------------------------------------

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, nextAnimal) => {
      acc[nextAnimal.name] = nextAnimal.residents.length;
      return acc;
    }, {});
  }
  return animals.find((specie) => specie.name === species).residents.length;
}

// ------------------------------------------------------------------
// REQUISITO 08 - entryCalculator
// ------------------------------------------------------------------

// Checking Empty Obj https://flaviocopes.com/how-to-check-object-empty/

function entryCalculator(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const adults = (entrants.Adult * prices.Adult);
  const children = (entrants.Child * prices.Child);
  const seniors = (entrants.Senior * prices.Senior);

  const total = [adults, children, seniors];

  return total.filter((value) => value > 0).reduce((a, b) => a + b, 0);
}

// ------------------------------------------------------------------
// REQUISITO 09 - animalMap
// ------------------------------------------------------------------

// Função que retorna valores únicos de uma Array
// Ref: https://appdividend.com/2019/04/11/how-to-get-distinct-values-from-array-in-javascript/
const unique = (value, index, self) => self.indexOf(value) === index;

// Função que cria o objeto base de resultado
// locations: mapeia locations de todos os animais e depois filtra os valores únicos.
// retorna um {} com as locations como keys e animais de cada location como value
const defaultMapping = () => {
  const locations = (animals.map((animal) => animal.location)).filter(unique);

  return locations.reduce((acc, location) => {
    const animalsByLocation = (animals.filter((animal) => animal.location === location))
      .map((animal) => animal.name);
    return {
      ...acc,
      [location]: animalsByLocation,
    };
  }, {});
};

// Função que filtra cada resident por sexo
const checkSex = (options, residents) => {
  if (options.sex === 'female') {
    return residents.filter((resident) => resident.sex === 'female');
  }
  if (options.sex === 'male') {
    return residents.filter((resident) => resident.sex === 'male');
  }
};

// Função que checa o paramêtro e atualiza o objeto final
// filteredResident é uma cópia de residents
// caso haja filtro de sexo, transforma filteredResidents baseado na função checkOptions
// caso haja filtro de ordenação, ordena filteredResidents
// retorna a array filtrada
const checkOptions = (options, { residents }) => {
  let filteredResidents = [...residents];
  if (options.sex) {
    filteredResidents = checkSex(options, filteredResidents);
  }
  if (options.sorted) {
    filteredResidents = filteredResidents.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  return filteredResidents.map((resident) => resident.name);
};

// Função que cria o objeto com os nomes dos animais, divididos por especie e região
// defaultEntries: transforma o objeto base em array
// fullObject: cria o objeto
// animalsObject: pega o segundo elemento da Array (animais por região)
// animalObject: acha o objeto baseado no animal
// animalsNames: pega o nome de todos da especie de animalObject
const animalMapWithNames = (options) => {
  const defaultEntries = Object.entries(defaultMapping());
  const fullObject = defaultEntries.reduce((animalsByRegion, region) => {
    const animalsObject = region[1].reduce((acc, specie) => {
      const animalObject = animals.find((animal) => animal.name === specie);
      const animalsNames = checkOptions(options, animalObject);
      return [
        ...acc,
        { [specie]: animalsNames },
      ];
    }, []);
    return {
      ...animalsByRegion,
      [region[0]]: animalsObject,
    };
  }, {});
  return fullObject;
};

function animalMap(options) {
  if (!options || !options.includeNames) {
    return defaultMapping();
  }
  return animalMapWithNames(options);
}

// ------------------------------------------------------------------
// REQUISITO 10 - schedule
// ------------------------------------------------------------------

// Altera as horas para AM/PM
function amPm(hour) {
  if (hour > 12) {
    return `${hour - 12}pm`;
  }
  if (hour === 12) {
    return `${hour}pm`;
  }
  return `${hour}am`;
}

// Retorna o horário de funcionamento do dia
function openingHours(open, close) {
  if (open === 0 || close === 0) {
    return 'CLOSED';
  }
  return `Open from ${amPm(open)} until ${amPm(close)}`;
}

function schedule(dayName) {
  if (!dayName) {
    return {
      Sunday: openingHours(hours.Sunday.open, hours.Sunday.close),
      Monday: openingHours(hours.Monday.open, hours.Monday.close),
      Tuesday: openingHours(hours.Tuesday.open, hours.Tuesday.close),
      Wednesday: openingHours(hours.Wednesday.open, hours.Wednesday.close),
      Thursday: openingHours(hours.Thursday.open, hours.Thursday.close),
      Friday: openingHours(hours.Friday.open, hours.Friday.close),
      Saturday: openingHours(hours.Saturday.open, hours.Saturday.close),
    };
  }
  return {
    [dayName]: openingHours(hours[dayName].open, hours[dayName].close),
  };
}

// ------------------------------------------------------------------
// REQUISITO 11 - oldestFromFirstSpecies
// ------------------------------------------------------------------

function oldestFromFirstSpecies(id) {
  // 1. Encontra Employee pela Id; (employee)
  // 2. Pega o objeto do primeiro animal; (firstAnimalSpecies)
  // 3. Pega o animal mais velho a partir da array .residents (oldestAnimal)
  // 4. Retorna os valores do objeto oldestAnimal
  const employee = employees.find((person) => person.id === id);
  const firstAnimalSpecies = animals.find((animal) =>
    animal.id === employee.responsibleFor[0]);
  const oldestAnimal = firstAnimalSpecies.residents.reduce((list, nextAnimal) => {
    let newList = list;
    if (list.age < nextAnimal.age) {
      newList = nextAnimal;
    }
    return newList;
  });
  return Object.values(oldestAnimal);
}

// ------------------------------------------------------------------
// REQUISITO 12 - increasePrices
// ------------------------------------------------------------------

function increasePrices(percentage) {
  // Ref: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
  prices.Adult = Math.round(
    (prices.Adult += (prices.Adult * percentage) / 100 + Number.EPSILON) * 100,
  ) / 100;
  prices.Senior = Math.round(
    (prices.Senior += (prices.Senior * percentage) / 100 + Number.EPSILON) * 100,
  ) / 100;
  prices.Child = Math.round(
    (prices.Child += (prices.Child * percentage) / 100 + Number.EPSILON) * 100,
  ) / 100;
}

// ------------------------------------------------------------------
// REQUISITO 13 - employeeCoverage
// ------------------------------------------------------------------

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((acc, employee) => {
      const coverage = employee.responsibleFor.reduce((coveredAnimals, animalId) => {
        coveredAnimals.push((animals.find((animal) => animal.id === animalId)).name);
        return coveredAnimals;
      }, []);
      acc[`${employee.firstName} ${employee.lastName}`] = coverage;
      return acc;
    }, {});
  }
  const employee = employees.find((person) =>
    person.id === idOrName || person.firstName === idOrName || person.lastName === idOrName);
  const coverage = employee.responsibleFor.reduce((coveredAnimals, animalId) => {
    coveredAnimals.push((animals.find((animal) => animal.id === animalId)).name);
    return coveredAnimals;
  }, []);
  const employeeCov = { [`${employee.firstName} ${employee.lastName}`]: coverage };
  return employeeCov;
}

module.exports = {
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  createEmployee,
  isManager,
  addEmployee,
  animalCount,
  entryCalculator,
  animalMap,
  schedule,
  oldestFromFirstSpecies,
  increasePrices,
  employeeCoverage,
};
