// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Runnning Calculate Bill');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call or **Run**
// const amountValue = 500;
// const taxRateValue = 0.3;
// const myTotal = calculateBill(amountValue, taxRateValue);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Wes');
console.log(greeting); // Hello Wes

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}

console.log(doctorize('wes')); // "Dr. wes"
console.log(yell('wes')); // "HEY WES"

// function as argument
console.log(yell(doctorize('wes'))); // "HEY DR. WES"

console.log(calculateBill(100));
console.log(calculateBill(100, undefined, 0.2));
