// let animals = [
//     {
//       id: `lionId`,
//       name: 'lions',
//       popularity: 4,
//       location: 'NE',
//       residents: [
//         {
//           name: 'Zena',
//           sex: 'female',
//           age: 12,
//         },
//         {
//           name: 'Maxwell',
//           sex: 'male',
//           age: 15,
//         },
//         {
//           name: 'Faustino',
//           sex: 'male',
//           age: 7,
//         },
//         {
//           name: 'Dee',
//           sex: 'female',
//           age: 14,
//         },
//       ],
//     }]

// const locations = ['NE','NW','SE','SW']
// const rascunho = (options = 'empty') => {
//     if (options === 'empty' || options.includeNames !== true) {
//         return locations.reduce((locationA,locationB) => ({
//             ...locationA,
//             [locationB]: animals.filter((animal) => animal.location === locationB).map((animal) => animal.name),
//             }),{});
//     };
//     if (options.includeNames === true && (options.sex === 'female' || options.sex === 'male') && options.sorted === true) {
//         return locations.reduce((locationA,locationB) => ({
//             ...locationA,
//             [locationB]: animals.filter((animal) => animal.location === locationB).map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//                 resident.sex === options.sex).map((resident) => resident.name).sort() })),
//             }),{});
//     };
//     if (options.includeNames === true && options.sorted === true) {
//         return locations.reduce((locationA,locationB) => ({
//             ...locationA,
//             [locationB]: animals.filter((animal) => animal.location === locationB).map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
//             resident.name).sort() })),
//             }),{});
//     };
//     if (options.includeNames === true && (options.sex === 'female' || options.sex === 'male')) {
//         return locations.reduce((locationA,locationB) => ({
//             ...locationA,
//             [locationB]: animals.filter((animal) => animal.location === locationB).map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//             resident.sex === options.sex).map((resident) => resident.name).sort() })),
//             }),{});
//     };
//     if (options.includeNames === true) {
//         return locations.reduce((locationA,locationB) => ({
//             ...locationA,
//             [locationB]: animals.filter((animal) => animal.location === locationB).map((animal) =>
//             ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
//             }),{});
//     };
// }
// console.log(rascunho())
// -----------

const a = {
  id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
  firstName: 'Nigel',
  lastName: 'Nelson',
  managers: ['burlId', 'olaId'],
  responsibleFor: ['lionId', 'tigersId'],
};
console.log({ [`${Object.values(a)[1]}  ${Object.values(a)[2]}`]: Object.values(a)[4] });
