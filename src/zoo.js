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

function animalsByIds(ids) {
  // seu código aqui
const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  if (!ids) {
    return [];
  }
  const idAnimal = ids.map(id => animals.find(animal => id === animal.id));
  return idAnimal;
  // return animals.filter(animal => ids.includes(animal.id))
}

function animalsOlderThan(animal, age) {
  // seu código aqui
function animalsOlderThan(animalName, age) {
  const nameAnimal = animals.find(animal => animal.name === animalName);
  const result = nameAnimal.residents.every(species => species.age >= age);
  return result;
}

function employeeByName(employeeName) {
  // seu código aqui
function employeeByName(workerName) {
  if (!workerName) {
    return {};
  }
  const employname = employees.find((employee) => {
    const result = employee.firstName === workerName || employee.lastName === workerName;
    return result;
  });
  return employname;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  return employees.some(employee => employee.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  if ((!managers) || (!responsibleFor)) {
    managers = [];
    responsibleFor = [];
  }
  const addedEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(addedEmployee);
  return addedEmployee;
}

function animalCount(species) {
  // seu código aqui
  const allAnimals = {};
  if (!species) {
    animals.forEach((animal) => {
      allAnimals[animal.name] = animal.residents.length;
    });
    return allAnimals;
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
function entryCalculator(entrants = {}) {
  const emptyObj = Object.keys(entrants).length;
  if (emptyObj === 0) return 0;

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  let precoTotal = 0;

  precoTotal = Adult * prices.Adult;
  precoTotal += Child * prices.Child;
  precoTotal += Senior * prices.Senior;
  console.log(precoTotal);
  return precoTotal;
}

function animalMap(options) {
  // seu código aqui
function getSpecieByName(specieName) {
  return animals.find(specie => specie.name === specieName);
}

function getSpecieResidentsName(specieName, sorted, sex) {
  let residents = getSpecieByName(specieName).residents;
  if (sex) residents = residents.filter(resident => resident.sex === sex);
  const names = residents.map(resident => resident.name);
  if (sorted) names.sort();
  return { [specieName]: names };
}
function animalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;
  const results = animals.reduce((acc, { name, location }) => {
    // if (!Array.isArray(acc[location])) acc[location] = [];
    if (!acc[location]) acc[location] = [];
    acc[location].push(name);
    return acc;
  }, {});
  if (includeNames) {
    return Object.entries(results).reduce((acc, [key, animalNames]) => {
      acc[key] = animalNames.map(animalName => getSpecieResidentsName(animalName, sorted, sex));
      return acc;
    }, {});
  }
  return results;
}
function schedule(dayName) {
  // seu código aqui
  const result = Object.entries(hours).reduce((acc, [key, val]) => {
    const { open, close } = val;
    acc[key] = close - open > 0 ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
    return acc;
  }, {});
  if (dayName !== undefined) return { [dayName]: result[dayName] };
  return result;
}
function employeeById(id) {
  return employees.find(employee => employee.id === id);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const askedEmployee = employees.find(employee => employee.id === id);
  const targetAnimal = animals.find(animal => animal.id === askedEmployee.responsibleFor[0]);
  let higherAnimalAge = targetAnimal.residents[0].age;
  targetAnimal.residents.forEach((animal) => {
    if (higherAnimalAge < animal.age) {
      higherAnimalAge = animal.age;
    }
  });
  const animalInfo = [];
  targetAnimal.residents.forEach((animal) => {
    if (animal.age >= higherAnimalAge) {
      animalInfo.push(animal.name);
      animalInfo.push(animal.sex);
      animalInfo.push(animal.age);
    }
  });
  return animalInfo;
}

function increasePrices(percentage) {
  // seu código aqui
  Object.entries(prices).forEach(([category, price]) => {
    const newPrice = price * (1 + (percentage / 100));
    prices[category] = Math.round(newPrice * 100) / 100;
  });
}

function getEmployeeFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const result = employees.reduce((acc, employee) => {
    acc[getEmployeeFullName(employee)] = employee.responsibleFor
      .map(animalsIds => animalsByIds(animalsIds)[0])
      .map(({ name }) => name);
    return acc;
  }, {});
  if (idOrName !== undefined) {
    const employee = employeeById(idOrName) || employeeByName(idOrName);
    const employeeFullName = getEmployeeFullName(employee);
    if (employee) return { [employeeFullName]: result[employeeFullName] };
  }
  return result;
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
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