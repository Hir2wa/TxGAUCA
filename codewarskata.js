// 1. Doubling numbers using `map()`
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 2. Filtering even numbers using `filter()`
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 3. Reversing an array using `reverse()`
function reverseArray(arr) {
  return [...arr].reverse(); // Creates a shallow copy to avoid modifying the original array
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 4. Converting a number into an array of digits and reversing it
function digitize(n) {
  return String(n).split('').map(Number).reverse();
}
console.log(digitize(35231)); // [1, 3, 2, 5, 3]

// 5. Reversing the words in a sentence
function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" "); // Reverses the words in the sentence
}
console.log(reverseSentence("am a student at auca")); // "auca at student a am"

// 6. Sorting numbers in descending order
function ssort() {
  let numbers = [1, 3, 5, 6];
  return numbers.sort((a, b) => b - a); // Sorting in descending order
}
console.log(ssort()); // [6, 5, 3, 1]

// 7. FizzBuzz function
function fizzbuzz(n) {
  let myArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      myArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      myArray.push("Fizz");
    } else if (i % 5 === 0) {
      myArray.push("Buzz");
    } else {
      myArray.push(i);
    }
  }
  return myArray;
}
console.log(fizzbuzz(20)); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", ...]


// 8. Greeting function using a callback
function greet(name, callback) {
  return callback(name);
}

function howTo(name) {
  return "Hello " + name;
}

console.log(greet("Alain", howTo)); // Hello Alain

// 9. Checking if an array includes an element
const words = ["Alain", 50, "Fabrice"];
console.log(words.includes(50)); // true

// 10. Using shift() to remove the first element of an array
let nmum = words.shift();
console.log(nmum); // Alain
console.log(words); // [50, "Fabrice"]

// 11. Checking if any element in an array is even using `some()`
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.some(num => num % 2 === 0)); // true

// 12. Demonstrating `splice()` to remove elements at a specific index
const array1 = ['a', 'b', 'c'];
array1.splice(1, 1); // Removes the second element
console.log(array1); // ["a", "c"]

// 13. Creating an iterator for an array
const iterator1 = array1[Symbol.iterator]();
console.log(iterator1.next()); // {value: "a", done: false}
console.log(iterator1.next()); // {value: "c", done: false}
console.log(iterator1.next()); // {value: undefined, done: true}

// 14. Splitting a string into an array and joining it back
let myyarray = ["Alain", 50, "Fabrice"];
let newMyArray = myyarray.toString(); // Converts array to a string
console.log(newMyArray); // "Alain,50,Fabrice"
let splittedArray = newMyArray.split(","); // Splits the string back to an array
console.log(splittedArray); // ["Alain", "50", "Fabrice"]

// 15. Using `join()` to create a string from an array
let newWords = words.join(" "); // Joins elements of array into a string
console.log(newWords); // "Alain Fabrice"

// 16. Using `toString()` to convert an array into a string
let array = [1, 2, 3];
let arrayString = array.toString();
console.log(arrayString); // "1,2,3"

// 17. Function to reverse an array without modifying the original array
let reversedArray = [...array].reverse();
console.log(reversedArray); // [3, 2, 1]
console.log(array); // [1, 2, 3] (original array is unchanged)
//18.  function that returns //Hello, Name or World!
function hello(name) {
 
  if (!name || name === '') {
    return "Hello, World!";
  }

  
  const wantedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return `Hello, ${wantedName}!`;
}


console.log(hello("alain"));
 //19.function that displays //  At match ${team1} - ${team2}, teams played draw.//.....
 function uefaEuro2016(teams, scores) {

  const [team1, team2] = teams;
  const [score1, score2] = scores;

  
  if (score1 > score2) {
    return `At match ${team1} - ${team2}, ${team1} won!`;
  } else if (score1 < score2) {
    return `At match ${team1} - ${team2}, ${team2} won!`;
  } else {
    return `At match ${team1} - ${team2}, teams played draw.`;
  }
}
//20 to  print the  character of javascript 
let  char = "javascript";
for (const charr  of char){
  console.log(charr)
}
//21  tp print  the keys of object 
const user = { name: 'Bob', age: 30 };
for (const key in user) {
  console.log(key);
}

// Function to remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage
let numberu = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = removeDuplicates(numberu)
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
// removing dublicates inn my array 
let duplicated = [1,3,4,4,5,5,6,6,7];
let removedDuplicates = [...new Set(duplicated)];
console.log(removedDuplicates)

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = Object.fromEntries([
  ...Object.entries(obj1),
  ...Object.entries(obj2)
]);

console.log(mergedObj);  // Output: { a: 1, b: 2, c: 3, d: 4 }
