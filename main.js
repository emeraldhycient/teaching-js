import './style.css'

//data types allows you to store different data based on their type on how js understands it 
// strings 
// numbers 
//floats
//booleans 
//objects
// arrays
// null
// undefined

// strings are words or letters or character enclosed with quotes;

// let and const are used to define/create a variable 

// varaibales are containers/holder/store for  data

let examplestring = 'patience is a girl';

//let allows you to define a variable that the value can be reassigned

examplestring = "hycient is a boy"

console.log(examplestring)

// variables defined using const are not reassignable
const flavour = "vanilla"


//numbers are your regular numbers/variables without the quotes around
let number = 20;

console.log(number)
//  floats are decimal numbers 
const float = 1.345;


// boolean is a data type that holds true or false;

let patience = "girls"

let isAgirl = true
let isAboy = false

//objects holds multiple data (which can be of different data types )

const student = {
  name: "patience",
  class: "js tutorail",
  age: 24,
  height: 6.5,
  isGay: false,
  subjects: ["html", "css", "js", "react"]
}

// to access any varible inside of an object , you use the dot operator
console.log(student.age)


// arrays - holds multiple data (which can be of different data types )

// const arrayExample = new Array("hmt","js")

const arrayExample = ["html", "css", "js", "react", false, 30, 1.3, {
  name: "patience",
  class: "js tutorail",
  age: 24,
  height: 6.5,
  isGay: false,
  subjects: ["html", "css", "js", "react"]
}]

console.log(arrayExample)
// how to know the length of an array
console.log(arrayExample.length)

// how to access data in an array -> using index

console.log(arrayExample[1])
console.log(arrayExample[7])

// null - means theres no data in it 

let nodata = null;

// undefined 

let undefin = undefined;




// conditions -  using if else 


let name = "vite"

if (name === "vite") {
  // alert("yes it is vite")
  console.log("na vite ")
} else {
  alert("😭")
  console.log("😭")
}


//ternary operators 
const isvite = name === "vite" ? true : false

console.log("isvite", isvite)




const isATool = false;

// or 
if (name === "vite" || isATool) {
  console.log("its a tool")
} else {
  console.log("one of the conditions failed")
}

// and 
if (name === "vite" && isATool) {
  console.log("its a tool")
} else {
  console.log("one of the conditions failed")
}


// loops

// for 
// foreach 
// while 
// map 
//filter
//find
// do while

const age = 27;

// first part is define your variable ,second part check a certain condition, 
// third  perform action on the previous variable

for (let patience_age = 22; patience_age <= age; patience_age++) {
  console.log("patience_age", patience_age)
}

const bag = ["rice", "spaghetti", "noodles", "beans"]
// second way of defining an array
const newArray = new Array("rice", "spaghetti", "noodles", "beans")

// define the iterator and then pass the keyword "in" and then ur array|object
for (let item in bag) {
  console.log(bag[item])
}


//foreach

// array.forEach(element => {

// });


// foreach loop is a javascript array loop.that accepts a function and passes the result of each 
//loop to the function as parameter
newArray.forEach(function (item) {
  console.log("foreach item", item)
})


// while 


let range = 30;

while (range > age) {
  range--
  console.log(range)
}


const istvplugged = false

// do while loop performs an action first before checking the conditions
do {
  console.log("move tv")
} while (istvplugged);


// functions
// callbacks
// callback hell

// a function is a reusable piece of code that is defined by using the keyword "function",
//it may or maynot have any arguments

// what is an argument 
// an argument is  a piece or pieces of data that is passed to a function

//1

function shoutYee() {
  alert("yeeeeeeeeeh 💦")
}

//function invocation
// shoutYee()

function functionWithArgument(message, issue) {
  const eleme = document.getElementById("app");
  // console.log(eleme)
  eleme.innerHTML = `<h1>${message}</h1>`
  eleme.innerHTML += `<h1>${issue}</h1>`

}

//function invocation
// functionWithArgument("patience is here oo", "na them")


// functionWithArgument("hycient is here", "")

//arrow function , anonymous function (slight differnce but close similarity due to dy both dont have names)

const anonymous = function (x, y, operation) {
  if (operation === "add") {
    return x + y;
  } else if (operation === "minus") {
    return x - y;
  } else if (operation === "mul") {
    return x * y
  } else {
    return { x, y }
  }
}

console.log(anonymous(34, 23, "add"))


// arrow functions

const arrowfn = (x, y, operation) => {
  if (operation === "add") {
    return x + y;
  } else if (operation === "minus") {
    return x - y;
  } else if (operation === "mul") {
    return x * y
  } else {
    return { x, y }
  }
}


console.log(arrowfn(2, 3, ""))



const printSubjects = () => {
  student.subjects.forEach((subject) => {
    console.log(subject)
  })
}

printSubjects()


//callback function are functions passed into another function as a n argument

const callbackExample = (firstname, lastname, callback) => {
  callback(firstname)
}

callbackExample("hycient", "ibok", (name) => { console.log(name) })


//dom manipulation
//event listeners

const app = document.getElementById("app")

app.style.color = "green"
app.style.fontSize = "0.3em"


const input1 = document.getElementById("inputemail");

input1.addEventListener("keyup", () => {
  console.log(input1.value)
  if (input1.value.length < 9) {
    input1.style.borderWidth = 2
    input1.style.borderColor = "red"
  } else {
    input1.style.borderWidth = 2
    input1.style.borderColor = "green"
  }
})






/////////   reviews revison

// where you define the var, conditions and actions
for (let i = 0; i < 23; i++) {
  console.log(i)
}

// using for loop to iterate over an array

const bagx = ["rice", "spaghetti", "noodles", "beans"]

for (let item in bagx) {
  console.log(bagx[item])
}


do {
  console.log("e don happen")
} while (45 < 6);


let num = 15;

while (num < 20) {
  console.log(num)
  num++
}

// using while loop to loop over an array 

const lengthOfBagx = bagx.length;
let iterator = 0;

while (iterator < lengthOfBagx) {
  console.log(bagx[iterator])
  iterator++
}


//functions 

function outputnames() {

}

// arrow function
const printnames = () => {

}

const anonymousfun = function () {

}


// when a function takes another function as parameter its called a callback function

const receivescallback = (callbackExcample) => {

  callbackExcample("name")
}


const the_received_function = (name) => {
  console.log(name)
}

receivescallback(the_received_function)

// receivescallback((name) => { console.log(name) })


// revison ends 


//map 


const iterables = ["rice", "spaghetti", "noodles", "beans"]

iterables.map(function (val, index) {
  console.log(`value  ${val} and index $`)
})


const filtered = iterables.filter((val, index) => {
  return val === "noodles"
})


console.log(filtered)


//assigment operators
//https://www.w3schools.com/js/js_operators.asp

// = means assign 
// == if its same but do not check the data type 
// === check if its same and also check the data type
// != if its not equal to that value
// !== if its not equal to that value and also to the type 
// > greater than 
// < means less than 
