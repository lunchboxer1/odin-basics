const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;
  
  arr.forEach((item) => {
    sum += item;
  });

  return sum;
};

const multiply = function(arr) {

  let prod = 1;

  arr.forEach((item) => {
    prod *= item;
  });

  return prod
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
	let fact = 1;
  
  for (let i = 1; i <= num; i++) fact *= i;

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
