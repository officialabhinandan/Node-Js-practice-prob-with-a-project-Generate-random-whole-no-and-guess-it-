//Practice problems mostly on arrays

let ar1 = [1, 3, 4, 8, 9, 46, 80, 760]
//will solve all the problems on this array

//1. create an array, trake inputs from the user and insert into an array
console.log("~~~~~~~~~~~~~~~~~~    Problem 1    ~~~~~~~~~~~~~~~~~~")
let a = prompt("Enter a number to insert in the array")
a = Number.parseInt(a)
ar1.push(a)
console.log("The new array is: ", ar1, "length: ", ar1.length, "type: ", typeof ar1)

//2. insert element into an array untill 0
//let ar1 = [1, 3, 4, 8, 9, 46]
//let b; //or we can use var, because var is universal and it works beyongd the loops
console.log("~~~~~~~~~~~~~~~~~~    Problem 2    ~~~~~~~~~~~~~~~~~~")
while(b!=0){
var b = prompt("Enter a number to insert in the array") //it's better not to use var as far as mordern js is concerened
b = Number.parseInt(b)
ar1.push(b)
console.log("The new array is: ", ar1, "length: ", ar1.length, "type: ", typeof ar1)
}

//3. filter for numbers divisible by 10 from a given array
console.log("~~~~~~~~~~~~~~~~~~    Problem 3    ~~~~~~~~~~~~~~~~~~")
let c = ar1.filter((n) =>{
  return n%10 == 0
})
console.log("the new array will be: ", c)


//4. create an array of square of the given numbers
console.log("~~~~~~~~~~~~~~~~~~    Problem 4    ~~~~~~~~~~~~~~~~~~")
let d = ar1.map((n) =>{
  return n*n
})
console.log("the array with squared elements of ar1 will be: ", d)


//5. use reduce to calculate the factorial from an array of first 10 natural numbers
console.log("~~~~~~~~~~~~~~~~~~    Problem 5    ~~~~~~~~~~~~~~~~~~")
let e = ar1.reduce((n1, n2) =>{
  return n2*n1
})
console.log("The facorial of the elements present in the array is: ", e)


//6. Same problem  but with an custom array
console.log("~~~~~~~~~~~~~~~~~~    Problem 6    ~~~~~~~~~~~~~~~~~~")
let arr1 = [1, 2, 3, 4, 5]
let f = arr1.reduce((n1, n2) =>{
  return n2*n1 // factorial of 5
})
console.log("The factorial of the elements present in the array is: ", f)

//7. calculate the facotrial of the elements of an user given array whoose length is also given by the user 
console.log("~~~~~~~~~~~~~~~~~~    Problem 7    ~~~~~~~~~~~~~~~~~~")
let num = prompt("enter the length of the array")
num = Number.parseInt(num)
let arr2 = []
for(let i=0; i<num; i++){
  let n = prompt("enter an element to insert in the array")
  n = Number.parseInt(n)
  arr2.push(n)
}
console.log("The final array is: ", arr2," and returns type: ",  typeof arr2)
let g = arr2.reduce((n1, n2) =>{
  return n2*n1 // returns the calculated factorial in g variable 
})
console.log("The factorial of the elements present in arr2 is: ", g)

//Exercise 1(Video No. 22) : Generating a random no in JS and guess that no untill find it and calculate the final score asper the number of trial'
console.log("~~~~~~~~~~~~~~~~~~    Exeercise 1    ~~~~~~~~~~~~~~~~~~")
/* 
To Return a random number between 0(inclusive) and 1(exclusive):
let x = Math.random();

Return a random number between 0 and 10:
let x = Math.random() * 10;

A random number between 0 and 100:
let x = Math.random() * 100;

A random whole number between 1 and 10:
let x = Math.floor((Math.random() * 10) + 1);

A random whole number between 1 and 100:
let x = Math.floor((Math.random() * 100) + 1);
*/

let act_num = Math.floor(Math.random() * 100) // Math.floor to generate whole number
let count = 0
let ges_num
while(act_num!=ges_num){
ges_num = prompt("Guess the correct number")
ges_num = Number.parseInt(ges_num)
if(act_num<ges_num){
  console.log("Try Again. The actual number is lesser than your guess")
  count++
  
} else if (act_num>ges_num) {
  console.log("Try Again. The actual number is greater than your guess")
  count++
  
} else if (act_num==ges_num){
console.log("Congratulation, you've guessed it correctly and your final score is: ", `${100-count-1}`) // final score = 100 - (no of trial)
}
}

