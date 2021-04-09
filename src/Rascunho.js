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
// const animalsNe = data.animals.filter((animal) => animal.location === 'NE');
//   const animalsNw = data.animals.filter((animal) => animal.location === 'NW');
//   const animalsSe = data.animals.filter((animal) => animal.location === 'SE');
//   const animalsSw = data.animals.filter((animal) => animal.location === 'SW');
//   if (options === 'empty' || options.includeNames !== true) {
//     return {
//       NE: animalsNe.map((animal) => animal.name),
//       NW: animalsNw.map((animal) => animal.name),
//       SE: animalsSe.map((animal) => animal.name),
//       SW: animalsSw.map((animal) => animal.name),
//     };
//   }
//   if (options.includeNames === true && options.sex === 'female' && options.sorted === true) {
//     return {
//       NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'female').map((resident) => resident.name).sort() })),
//       NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'female').map((resident) => resident.name).sort() })),
//       SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'female').map((resident) => resident.name).sort() })),
//       SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'female').map((resident) => resident.name).sort() })),
//     };
//   }
//   if (options.includeNames === true && options.sex === 'male' && options.sorted === true) {
//     return {
//       NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'male').map((resident) => resident.name).sort() })),
//       NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'male').map((resident) => resident.name).sort() })),
//       SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'male').map((resident) => resident.name).sort() })),
//       SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'male').map((resident) => resident.name).sort() })),
//     };
//   }
//   if (options.includeNames === true && options.sorted === true) {
//     return {
//       NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
//         resident.name).sort() })),
//       NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
//         resident.name).sort() })),
//       SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
//         resident.name).sort() })),
//       SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
//         resident.name).sort() })),
//     };
//   }
//   if (options.includeNames === true && options.sex === 'female') {
//     return {
//       NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'female').map((resident) => resident.name) })),
//       NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'female').map((resident) => resident.name) })),
//       SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'female').map((resident) => resident.name) })),
//       SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'female').map((resident) => resident.name) })),
//     };
//   }
//   if (options.includeNames === true && options.sex === 'male') {
//     return {
//       NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'male').map((resident) => resident.name) })),
//       NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'male').map((resident) => resident.name) })),
//       SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'male').map((resident) => resident.name) })),
//       SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
//         resident.sex === 'male').map((resident) => resident.name) })),
//     };
//   }
//   if (options.includeNames === true) {
//     return {
//       NE: animalsNe.map((animal) =>
//         ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
//       NW: animalsNw.map((animal) =>
//         ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
//       SE: animalsSe.map((animal) =>
//         ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
//       SW: animalsSw.map((animal) =>
//         ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
//     };
//   }
// }
