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

const { animals } = data;
const { employees } = data;
const { prices } = data;

// animalsByIds
const findById = (idAni) => animals.find((animal) => animal.id === idAni);
const animalsByIds = (...ids) => ids.map((idAnimal) => findById(idAnimal));

// animalsOlderThan
const fiByName = (nameAni) => animals.find((animal) => animal.name === nameAni);
const animalsOlderThan = (animal, age) => fiByName(animal).residents.every((ani) => age < ani.age);

// employeeByName
const fiEmpByName = (name) => employees.find((employee) =>
  employee.firstName === name || employee.lastName === name);
const employeeByName = (employeeName) => (!employeeName ? {} : fiEmpByName(employeeName));

// createEmployee
const createEmployee = (personalInfo, associatedWith) =>
  Object.assign(personalInfo, associatedWith);

// isManager
const takeManagers = () => {
  const allManags = employees.map((emp) => emp.managers).reduce((a, b) => `${a},${b}`).split(',');
  const singleManags = [...new Set(allManags)];
  return singleManags.filter((emp) => emp);
};
// trocar para includes
const fiEmpById = (id) => employees.find((employee) => employee.id === id);
const reallyIsManager = (employee) => takeManagers().some((manager) => manager === employee.id);
const isManager = (id) => reallyIsManager(fiEmpById(id));

// addEmployee
const buildEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => ({
  id,
  firstName,
  lastName,
  managers,
  responsibleFor,
});

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  employees.push(buildEmployee(id, firstName, lastName, managers, responsibleFor));
}

// animalCount
const countAll = () => {
  const aniObj = {};
  animals.forEach(({ name, residents }) => {
    aniObj[name] = residents.length;
  });
  return aniObj;
};
const countOne = (theAnimal) => theAnimal.residents.length;
const animalCount = (species) => (!species ? countAll() : countOne(fiByName(species)));

// entryCalculator
const calcPrice = (entrants) => {
  let result = 0;
  const entrantsKey = Object.keys(entrants);
  entrantsKey.forEach((key) => {
    result += (prices[key] * entrants[key]);
  });
  return result;
};

const entryCalculator = (entrants) =>
  (!entrants || !Object.values(entrants).length ? 0 : calcPrice(entrants));

// animalMap
const takeLocations = () => {
  const allLoc = animals.map(({ location }) => location);
  const singleLoc = [...new Set(allLoc)];
  return singleLoc;
};
const locations = takeLocations();

const tkNaAni = (residents) => residents.map(({ name }) => name);
const tkNaByS = (residents, sexAni) => tkNaAni(residents.filter(({ sex }) => sex === sexAni));

const includeNamesNoPam = () => {
  const anisLoc = {};
  locations.forEach((loc) => {
    const aniByLoc = animals.filter(({ location }) => location === loc);
    anisLoc[loc] = tkNaAni(aniByLoc);
  });
  return anisLoc;
};

const includeNames = (order) => {
  const anisLoc = {};
  locations.forEach((loc) => {
    const aniByLoc = animals.filter(({ location }) => location === loc);
    if (order === 'S') {
      anisLoc[loc] = aniByLoc.map(({ name, residents }) => ({ [name]: tkNaAni(residents).sort() }));
    } else {
      anisLoc[loc] = aniByLoc.map(({ name, residents }) => ({ [name]: tkNaAni(residents) }));
    }
  });
  return anisLoc;
};

const includeNamesBySex = (sex, order) => {
  const anisLoc = {};
  locations.forEach((loc) => {
    const aniByLoc = animals.filter(({ location }) => location === loc);
    if (order === 'S') {
      anisLoc[loc] = aniByLoc.map(({ name, residents }) => ({ [name]: tkNaByS(residents, sex)
        .sort() }));
    } else {
      anisLoc[loc] = aniByLoc.map(({ name, residents }) => ({ [name]: tkNaByS(residents, sex) }));
    }
  });
  return anisLoc;
};

const checkNameBySex = (options) => {
  if (options.includeNames && options.sorted) return includeNamesBySex(options.sex, 'S');
  if (options.includeNames) return includeNamesBySex(options.sex);
  return includeNamesNoPam();
};

function animalMap(options) {
  if (!options) return includeNamesNoPam();
  if (options.sex !== undefined) return checkNameBySex(options);
  if (options.sorted) return includeNames('S');
  return includeNames();
}

// const includeNames = (cond) => {
//   const anisLoc = {};
//   locations.forEach((loc) => {
//     const aniByLoc = animals.filter(({ location }) => location === loc);
//     if (!cond) anisLoc[loc] = tkNaAni(aniByLoc);
//     if (cond === 'N') anisLoc[loc] = aniByLoc.map(({ name, residents }) => ({ [name]: tkNaAni(residents) }));
//     if (cond === 'S') anisLoc[loc] = aniByLoc.map(({ name, residents }) => ({ [name]: tkNaAni(residents).sort() }));
//     if (cond === 'female' || cond === 'male') anisLoc[loc] = aniByLoc.map(({ name, residents }) => ({ [name]: tkNaByS(residents, cond) }));
//     if (cond === 'females' || cond === 'males') anisLoc[loc] = aniByLoc.map(({ name, residents }) => ({ [name]: tkNaByS(residents, cond.replace('s', '')).sort() }));
//     if (cond === 'A') anisLoc[loc] = tkNaAni(aniByLoc);
//   });
//   return anisLoc;
// };

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
  entryCalculator,
  // schedule,
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
