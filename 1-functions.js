const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns 'hello world'
function hello() {
  return "hello world";
}

// Assertions (do not change)
assertEquals(hello(), "hello world");

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function, greet(personName), that returns 'hello specificPersonName'. If no name is supplied, return 'hello world'
function greet(name="world") { 
  let str = `hello ${name}`;
  return str;  
}

// Assertions (do not change)
assertEquals(greet("tom"), "hello tom");
assertEquals(greet(), "hello world");

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function, add2Numbers(num1, num2), to return the sum of 2 values

function add2Numbers(num1, num2) { 
  let sum = num1+num2;
  return sum;  
}

// Assertions (do not change)
assertEquals(add2Numbers(1, 1), 2);
assertEquals(add2Numbers(100, 1), 101);

/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function, invertCase(someString), that returns the input string with its case inverted
function invertCase(someString) { 
  let invertedString="";

  const invertChar = (chara) =>{return chara===chara.toUpperCase() ? chara.toLowerCase():chara.toUpperCase()};
   invertedString=someString.split("").map(invertChar).join("");
 
  // for(chara in someString){
  //   console.log(chara);
  //   chara.isUpper?invertedString+=chara.toLowerCase():invertedString+=chara.toUpperCase()
  // }
 

  return invertedString;
}
// Assertions (do not change)
assertEquals(invertCase("Hello"), "hELLO");
assertEquals(invertCase("hELLO wORLD"), "Hello World");
