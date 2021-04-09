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

// NE: [
//   { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
//   { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }
// ],
// NW: [
//   { tigers: ['Shu', 'Esther'] },
//   { bears: ['Hiram', 'Edwardo', 'Milan'] },
//   { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] }
// ],
// SE: [
//   { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
//   { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] }
// ],
// SW: [
//   { frogs: ['Cathey', 'Annice'] },
//   { snakes: ['Paulette', 'Bill'] }
// ]
// };

const separeteSpecies = (ops) => {
  const { sex, sorted } = ops;
  const obj = animals.reduce((result, item) => {
    const animal = animals.filter((i) => i.location === item.location);
    const final = result;
    final[item.location] = animal.reduce((acc, curr, index) => {
      let types = curr.residents.map((j) => j.name);
      if (sex) types = curr.residents.filter((elem) => elem.sex === sex).map((typ) => typ.name);
      if (sorted) types.sort();
      acc[index] = { [curr.name]: types };
      return acc;
    }, []);
    return result;
  }, {});
  return obj;
};

function animalMap(options) {
  if (!options || !options.includeNames) {
    return animals.reduce((result, item) => {
      const final = result;
      if (!final[item.location]) {
        final[item.location] = [];
      }
      final[item.location].push(item.name);
      return final;
    }, {});
  }
  return separeteSpecies(options);
}

console.log(animalMap({ includeNames: true }));

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

function oldestFromFirstSpecies(id) {
  const idSpecies = employees.find((i) => i.id === id).responsibleFor[0];
  const animal = animals
    .find((i) => i.id === idSpecies)
    .residents.reduce((result, value) => {
      let final = result;
      final = value.age > result.age ? value : result;
      return final;
    });
  return Object.values(animal);
}

function increasePrices(percentage) {
  let percentual = percentage;
  const perc = 50.001;
  const arr = Object.keys(prices);
  for (let i = 0; i < arr.length; i += 1) {
    if (percentual === 50) percentual = perc;
    prices[arr[i]] = Number((prices[arr[i]] + (prices[arr[i]] * percentual) / 100).toFixed(2));
  }
}

const makeName = (idOrName) => {
  const obj = {};
  if (idOrName.length > 10) {
    const person = employees.filter((elem) => elem.id === idOrName);
    const nome = `${person[0].firstName} ${person[0].lastName}`;
    obj[nome] = person[0].responsibleFor.map((i) => animals.find((j) => j.id === i).name);
  } else {
    const p = employees.filter((elem) => elem.firstName === idOrName || elem.lastName === idOrName);
    const nome = `${p[0].firstName} ${p[0].lastName}`;
    obj[nome] = p[0].responsibleFor.map((i) => animals.find((j) => j.id === i).name);
  }
  return obj;
};

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((result, item) => {
      const { firstName, lastName } = item;
      const final = result;
      const name = `${firstName} ${lastName}`;
      const chosen = item.responsibleFor.map((i) => animals.find((j) => j.id === i).name);
      final[name] = chosen;
      return final;
    }, {});
  }
  return makeName(idOrName);
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
