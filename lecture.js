//Arrays - Accessing and modifying.

const devMtnStaff = [
  "Andrew",
  "Scott",
  "Matt",
  "Lucas",
  "Cole",
  "Rob",
  "Aaron",
];

//Bracket Notation
//Console log the second and fourth items in the devMtnStaff array.

console.log(devMtnStaff[1] + " " + devMtnStaff[3]);

//.push, .pop, .shift, .unshift
//Remove the last item in the devMtnStaff array

devMtnStaff.pop();

// console.log(devMtnStaff)
//Add a new name to the end of the devMtnStaff array

devMtnStaff.push("Adam");

//Remove the first item from the devMtnStaff array

devMtnStaff.shift();

console.log(devMtnStaff);

//Add a new name to the beginning of the devMtnStaff array

devMtnStaff.unshift("Andrew");

//.slice, .splice

const magicNumbers = [7, 27, 87, 77, 777];

//Make a copy of the magicNumbers array.

const magicNumbersCopy = magicNumbers.slice(0, magicNumbers.length);

//Make a copy of the magicNumbers excluding the first and last items

const anotherMagicNumCopy = magicNumbers.slice(1, magicNumbers.length - 1);

//Remove the number 87 from the magicNumbers array, then replace it with 67

magicNumbers.splice(magicNumbers.indexOf(87), 1, 67);

console.log(magicNumbers);

//.length

//Find the length of the magicNumbers array and console log it.

console.log(magicNumbers.length);

//Using the length property, console log the last item in the magicNumbers array

console.log(magicNumbers[magicNumbers.length - 1]);

//For loops

//Write a function called logFive, it should contain a for loop that will run five times and should console log the numbers 1 - 5.  Invoke it below.

const logFive = () => {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
};

logFive();

//Modify the function below to include a for loop that will double all values in the array.

function doubleMeNumbers() {
  let numsArr = [2, 4, 6, 8, 10];
  for (let i = 0; i < numsArr.length; i++) {
    numsArr[i] = numsArr[i] * 2;
  }
  return numsArr;
}

console.log(doubleMeNumbers());

const wordsArr = [
  `Oh`,
  `it's`,
  `a`,
  `beautiful`,
  `array`,
  `in`,
  `the`,
  `neighborhood.`,
];

//Modify the function below to take in an array of words.  The function should loop through the array and return a completed sentance.
function makeMeASentance(arr) {
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr = `${newStr} ${arr[i]}`;
  }
  return newStr;
}

console.log(makeMeASentance(wordsArr));

//Decrementing for loop
//Modify the function below to include a decrementing for loop.  It should loop backwards through the array and console log each number, starting with 5 and ending with 1
function decrementLoop() {
  let decArr = [1, 2, 3, 4, 5];
  for (let i = decArr.length - 1; i >= 0; i--) {
    console.log(decArr[i]);
  }
}

decrementLoop();

//Objects

let andrewObj = {
  name: "Andrew",
  age: 27,
  favorites: {
    color: "red",
    number: 38,
    people: ["Becca", "Scott", "Adam Driver"],
  },
  greeting: function () {
    return "Hello there!";
  },
};

//Dot and bracket Notation
//Using dot notation console log the name from andrewObj
console.log(andrewObj.name);

//Using bracket notation console log the age from andrewObj
console.log(andrewObj["name"]);

//Console log the favorite color from andrewObj.
console.log(andrewObj.favorites.color);

//Console log the first favorite person from andrewObj.
console.log(andrewObj.favorites.people[0]);

//Invoke the greeting method from andrewObj
andrewObj.greeting();

//Ternary operator
//Write a function called isItEven that takes in a number and returns true if it is even and false if it isn't.  Write it first as an if statement and then as a ternary

const isItEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const altIsItEven = (num) => (num % 2 === 0 ? true : false);

console.log(isItEven(42));
console.log(isItEven(43));
console.log(altIsItEven(42));
console.log(altIsItEven(43));

//Callback functions

function callbackFn() {
  console.log("I am an inner function");
}

//Write a function called outerFn, this should take in a callback function.  Inside of outerFn invoke callbackFn.

const outerFn = (fn) => {
  callbackFn(fn);
};

function niceGreeting(name) {
  return `I hope you have a good day ${name}`;
}

function normalGreeting(name) {
  return `I hope you have a normal day ${name}`;
}

function meanGreeting(name) {
  return `I hope you have a bad day ${name}`;
}

//Write a function called sayTheGreeting below that will take in a callback function and a name.  Invoke the callback function and pass it the name.

const sayTheGreeting = (fn, name) => {
  return fn(name);
};

console.log(sayTheGreeting(normalGreeting, "Jeff"));
