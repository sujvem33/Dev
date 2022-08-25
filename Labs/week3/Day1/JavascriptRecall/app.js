
let firstVariable = "Hello World"
firstVariable = 50
secondVariable = firstVariable
secondVariable = "Hi"
console.log(secondVariable);


let yourName = "SUjitha"
console.log(`Hello, my name is ${yourName}`);


const a=4
const b=53
const c=57
const d=16
const e='kevin';

console.log(a<b)
console.log(c>d)
console.log(e==='kevin');
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e==='kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(48 == '48');


////////////////////

let animal='cow'

if(animal==='cow')
{
    console.log('moooo');
}
else{
    console.log("Hey! You're not a cow")
}


//////////////////////////

let age = 14

if(age >= 16){
    console.log("Here are the keys!");
}
else{
    console.log("Sorry, you're too young.");
}

///////////////////////////////




for (let i=0;i<100;i++)
{
    console.log("This is GOOD");
}


for (let i=0;i<100;i++)
{
    console.log("This is NO GOOD");
}

////////////////////////////////////

for (let i=0; i<=10 ; i++){
    console.log(i);
}
for (let i=10; i<=400 ; i++){
    console.log(i);
}
for (let i=12; i<=4000 ; i+=3){
    console.log(i);
}


//////////////////////////////////

for (let i=0; i<100 ; i++){
    if (i%2 === 0)
         console.log(`${i} is a even number`);
    }

///////////////////////////////////

for (let i=0; i<=100 ; i++){
    if (i%5 === 0){
         console.log("High five!");
    }
else if(i%3===0){
    console.log(`I found a ${i}. Three is a crowd`);
}
else if(i%3===0 && i%5 === 0){
    console.log(`I found a ${i}. Three is a crowd and High five!`);
}
else{
    console.log("I found a number");
}
}

///////////////////////////
let bankAccount = 0
for (let i=1 ; i<=10 ; i++){
    
    bankAccount += i
    console.log(bankAccount);
}

for (let i=1 ; i<=100 ; i++){
    
    bankAccount += i*2;
    console.log(bankAccount);
}

///////////////////////////////////////

let quotes = ["xyz", "bcd", "abc"]

const randomThings = [1, 10, "Hello", true]

console.log(randomThings[0]);
randomThings[2] = "World"
console.log(randomThings);

/////////////////////////////////////////////


const randomThings = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

console.log(randomThings[2]);

randomThings[4] = "Octocat"

randomThings.push("CloudCity")

console.log(randomThings);


////////////////////////////////////////////

const myArray = [5, 10, 500, 20]

myArray.push("Aegon")
console.log(myArray);

myArray.shift()
console.log(myArray);

myArray.unshift("Bob Marley")
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.reverse()
console.log(myArray);


/////////////////////////////////////


let x = 4

if (x >=100){
    console.log("big number");
    
}
else{
    console.log("little number");
}

//////////////////////////////////


let y = 8

if (y < 5){
    console.log("little number");
    
}
else if(y > 10){
    console.log("Big number");
}
else{
    console.log("Monkey");
}


/////////////////////////////////


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`);
  kristynsCloset.splice(6,0, "raybans")
  console.log(kristynsCloset);
  kristynsCloset[5] = "stained knit hat"
  console.log(kristynsCloset);
  console.log(` ${thomsCloset[0][0]} `);
  console.log(` ${thomsCloset[1][1]} `);
  console.log(` ${thomsCloset[2][1]} `);
  console.log(` "Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][2]}  and ${thomsCloset[2][1]}  `);
  thomsCloset[1][2] = "Footie Pajamas"
  console.log(`Thom's wearing this winter ${thomsCloset[1][2]}`);

  ///////////////////////////////////////
  Functions

const printGreeting = (name) => {
  return `Hello there, ${name}`
}
console.log(printGreeting("Slimer"));

///////////////////

const printCool = (name) => {
  return `${name} is cool`
}
console.log(printCool("Captain Ronald"));

//////////////

const calculateCube = (num) => {
  return num*num*num
}
console.log(calculateCube(5));
  
///////////////////////////

const isVowel = (str) =>{
  str = str.toLowerCase()
  if(str === "a" || str === "e" ||str === "i" ||str === "o" || str ==="u"){
    return true
  }
  else{
    return false
  }
}
console.log(isVowel("a"));

////////////////////////

const getTwoLengths = (str1, str2) =>{

  return [str1.length, str2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"));


/////////////////////////////////////

const getMultipleLengths = (array) =>{
  let newArray = []
  for(let i=0;i < array.length ; i++){
  newArray[i] = array[i].length
  }
  return newArray
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//////////////////////////////////////////

const maxOfThree = (x,y,z) =>{
  if(x>y && x>z){
    return x
  }
  else if (y>z)
  {
    return y
  }
  else{
    return c
  }
}
console.log(maxOfThree(6, 9, 1));

//////////////////////////////////////////////

const printLongestWord = (strArray) =>{
  let LongestWord = []
  for(let i=0; i < strArray.length ; i++){
    if(strArray[i].length > LongestWord.length){
      LongestWord = `${strArray[i]}`
    }
  }
  return LongestWord
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

////////////////////////////////////////////

//Objects

const user = {
  name : "Sujitha",
  email : "sujithasri33@gmail.com",
  age : 27,
  purchased :[]

}
console.log(user);
user.email = "s@gmail.com"
user.age++

console.log(user);

user.location = "Taylor Mill"
console.log(user);

user.purchased.push("carbohydrates") 
user.purchased.push("peace of mind") 
user.purchased.push("Merino jodhpurs") 

console.log(user.purchased[2])

user.friend = {
  name: "Siva",
  age: 33,
  location : "Taylor Mill",
  purchased : []

}

console.log(user.friend);
console.log(user.friend.location);
user.friend.age = 55
console.log(user.friend);
user.friend.purchased.push("The One Ring") 
user.friend.purchased.push("A latte") 
console.log(user.friend.purchased[1])


for(let i=0; i <user.purchased.length; i++){
  console.log(user.purchased[i]);
}
for(let i=0; i <user.friend.purchased.length; i++){
  console.log(user.friend.purchased[i]);
}


const updateUser = () => {
  user.age++
  user.name = user.name.toUpperCase()
}


const oldAndLoud = (person) => {
  person.age++
  person.name = person.name.toUpperCase()
}
 oldAndLoud(user)
console.log(user);






  












