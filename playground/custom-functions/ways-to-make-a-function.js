// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anonymous Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// function inchToCm(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// function inchToCm(inches) {
//   return inches * 2.54;
// }

// const inchToCm = function (inches) {
//   return inches * 2.54;
// };

// const inchToCm = (inches) => {
//   return inches * 2.54;
// };

// const inchToCm = (inches) => inches * 2.54;

// /* eslint-disable */
// const inchToCm = inches => inches * 2.54;
// /* eslint-enable */

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// convierto la función regular a anónima
// const add = function (a, b = 3) {
//   return a + b;
// };

// luego de anónima a arrow
// const add = (a, b = 3) => {
//   return a + b;
// };

// elimino la variable intermedia `total` y return directo del valor de la operación
// const add = (a, b = 3) => {
//   return a + b;
// };

// lo paso a one-line
// const add = (a, b = 3) => { return a + b };

// elimino los brackets y el return keyword = implicit return
// const add = (a, b = 3) => a + b;
// los paréntesis de los parámetros no se quitan porque hay más de uno

// returning an object

// function makeBaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeBaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// };

// /* eslint-disable */
// const makeBaby = (first, last) => {
//   return {
//     name: `${first} ${last}`,
//     age: 0,
//   };
// };
// /* eslint-enable */

// const makeBaby = (first, last) => { return { name: `${first} ${last}`, age: 0 } };

const makeBaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

// function() {
//   console.log('Running the Anon function');
//   return 'You are cool';
// }

// (function () {
//   console.log('Running the Anon function');
//   return 'You are cool';
// })();

(function (age) {
  console.log('Running the Anon function');
  return `You are cool and age ${age}`;
})(10);

// Methods

/* eslint-disable */
const wes = {
  name: 'Wes Bos',
  // Method
  sayHi: function() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSSS');
  },
  // Arrow function
  whisperHi: () => {
    console.log('hii wess');
  }
};
/* eslint-enable */

// Callback Functions
// Click Callback
const button = document.querySelector('.click-me');

// button.addEventListener('click', wes.yellHi);

function handleClick() {
  console.log('Great Clicking!');
}

// button.addEventListener('click', handleClick);

/* eslint-disable */
button.addEventListener('click', function() {
  console.log('Nice Job!');
});
/* eslint-enable */

button.addEventListener('click', () => {
  console.log('Nice Job!');
});

// Timer Callback
/* eslint-disable */
setTimeout(function() {
  console.log('DONE! Time to eat!');
}, 1000);
/* eslint-enable */

setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);
