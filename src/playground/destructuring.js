// Object destructuring

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philedelphia',
//     temp: 92
//   }
// };

// // person.name is set as a constant called firstName and the default value is Anonymous.
// const { name: firstName = 'Anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// // creates a new variable called temperature that is equal to person.location.temp
// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); //Penguin, Self-Published

// // Array destructuring

// const address = [
//   '1299 S Juniper Street',
//   'Philadelphia',
//   'Pennsylvania',
//   '19147'
// ];

// // don't need to rename in arrays because they don't have names. You do need to put a comma if you're skipping an element at the beginning. You can also set a default value.
// const [, city, state = 'New York'] = address;

// // console.log(`You are in ${address[1]} ${address[2]}.`);
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
