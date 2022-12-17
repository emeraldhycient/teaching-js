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