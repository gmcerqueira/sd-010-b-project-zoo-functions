// let animals = [
//     {
//       id: 'lionId',
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
//     },
//     {
//       id: 'tigersId',
//       name: 'tigers',
//       popularity: 5,
//       location: 'NW',
//       residents: [
//         {
//           name: 'Shu',
//           sex: 'female',
//           age: 19,
//         },
//         {
//           name: 'Esther',
//           sex: 'female',
//           age: 17,
//         },
//       ],
//     },
//     {
//       id: 'bearsId',
//       name: 'bears',
//       popularity: 5,
//       location: 'NW',
//       residents: [
//         {
//           name: 'Hiram',
//           sex: 'male',
//           age: 4,
//         },
//         {
//           name: 'Edwardo',
//           sex: 'male',
//           age: 4,
//         },
//         {
//           name: 'Milan',
//           sex: 'male',
//           age: 4,
//         },
//       ],
//     },
//     {
//       id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
//       name: 'penguins',
//       popularity: 4,
//       location: 'SE',
//       residents: [
//         {
//           name: 'Joe',
//           sex: 'male',
//           age: 10,
//         },
//         {
//           name: 'Tad',
//           sex: 'male',
//           age: 12,
//         },
//         {
//           name: 'Keri',
//           sex: 'female',
//           age: 2,
//         },
//         {
//           name: 'Nicholas',
//           sex: 'male',
//           age: 2,
//         },
//       ],
//     },
//     {
//       id: 'ottersId',
//       name: 'otters',
//       popularity: 4,
//       location: 'SE',
//       residents: [
//         {
//           name: 'Neville',
//           sex: 'male',
//           age: 9,
//         },
//         {
//           name: 'Lloyd',
//           sex: 'male',
//           age: 8,
//         },
//         {
//           name: 'Mercedes',
//           sex: 'female',
//           age: 9,
//         },
//         {
//           name: 'Margherita',
//           sex: 'female',
//           age: 10,
//         },
//       ],
//     },
//     {
//       id: 'frogsId',
//       name: 'frogs',
//       popularity: 2,
//       location: 'SW',
//       residents: [
//         {
//           name: 'Cathey',
//           sex: 'female',
//           age: 3,
//         },
//         {
//           name: 'Annice',
//           sex: 'female',
//           age: 2,
//         },
//       ],
//     },
//     {
//       id: 'snakesId',
//       name: 'snakes',
//       popularity: 3,
//       location: 'SW',
//       residents: [
//         {
//           name: 'Paulette',
//           sex: 'female',
//           age: 5,
//         },
//         {
//           name: 'Bill',
//           sex: 'male',
//           age: 6,
//         },
//       ],
//     },
//     {
//       id: 'elephantsId',
//       name: 'elephants',
//       popularity: 5,
//       location: 'NW',
//       residents: [
//         {
//           name: 'Ilana',
//           sex: 'female',
//           age: 11,
//         },
//         {
//           name: 'Orval',
//           sex: 'male',
//           age: 15,
//         },
//         {
//           name: 'Bea',
//           sex: 'female',
//           age: 12,
//         },
//         {
//           name: 'Jefferson',
//           sex: 'male',
//           age: 4,
//         },
//       ],
//     },
//     {
//       id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
//       name: 'giraffes',
//       popularity: 4,
//       location: 'NE',
//       residents: [
//         {
//           name: 'Gracia',
//           sex: 'female',
//           age: 11,
//         },
//         {
//           name: 'Antone',
//           sex: 'male',
//           age: 9,
//         },
//         {
//           name: 'Vicky',
//           sex: 'female',
//           age: 12,
//         },
//         {
//           name: 'Clay',
//           sex: 'male',
//           age: 4,
//         },
//         {
//           name: 'Arron',
//           sex: 'male',
//           age: 7,
//         },
//         {
//           name: 'Bernard',
//           sex: 'male',
//           age: 6,
//         },
//       ],
//     },
//   ]

//   function animalCount(species = 'all') {
//     // seu código aqui
//     const allAnimals = data.animals.map((animal) => ({
//       [animal.name]: animal.residents.length,
//     })).reduce((a,b) => ({
//       ...a,
//       ...b,
//     }));
//     return species === 'all' ? allAnimals : 
//     data.animals.find((animal) => animal.name === species).residents.length
//   }