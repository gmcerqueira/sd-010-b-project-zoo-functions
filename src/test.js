// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const v = ['lastName', 'nameComplete', 'ok'];
let newKey = `${v[0]}`;
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = `${v[1]}`;
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);
