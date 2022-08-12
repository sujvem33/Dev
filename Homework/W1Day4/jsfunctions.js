
//funtion 1
const maxOfTwoNumbers = (x, y) =>  {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log(maxOfTwoNumbers(3, 9));

  //function2

  const maxOfThreeNumbers = (x, y, z) => {
    if(x > y && x > z) {
       return x
    }

    else if(y > z) {
       return y
    }
    else {
        return z
    }
}
console.log(maxOfThreeNumbers(9, 4 , 11));

//function 3
const isCharAVowel = (word) => {
  if(word === "a" ||word === "e" ||word === "i" ||word === "o" ||word === "u"){

  return "True"
 }
 else {
  return "False"
 }
}
console.log(isCharAVowel("o"))

//function4
const sumarray = (Numbers)  => {
  let sum = 0
  for (let i=0; i < Numbers.length; i++)
  sum += (Numbers[i])
  return sum
}
console.log (sumarray([5,6,7]))

//function5
const Productarray = (Numbers)  => {
  let product = 1
  for (let i=1; i < Numbers.length; i++)
  product *= (Numbers[i])
  return product
}
console.log (Productarray([1,2,4]))

//function6
const numArgs = (...args) => {
  return args.length
}
console.log(numArgs(1,2,3))

//function7
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("Hello"));

//function8

//let ArrString = ["ABC", "ABCD", "ABCDE"]

const longestString =  (string) => {
  let longString = " "
  for (i=0 ; i < string.length ; i++){
    if(string[i].length > longString.length){
      longString = string[i]
    }
  }
  let StringSize = longString.length
  return StringSize
}
console.log(longestString(["abc", "abcd"]))

//function9
let stringsLongerThan = (arr, num) => {
  let newArr = []
    
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > num){
      newArr.push(arr[i])
    }
  }
   
  return newArr
}
 
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
