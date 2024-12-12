function myNum(){
const myArray = new Array(1,4,5,6,7,);

return myArray.reverse();

};

console.log(myNum());

//return even numbers   filter method

const numbers = [4,6,7,8,9,12];
const evenNumber = numbers.filter( num=> num%2===0);  
   
 console.log(evenNumber);
 // generating ne array multipliying  by 2  map  method 
  const   numbledArray = numbers.map(num=>num*2);
 console.log(numbledArray);

//generatinf  sum$avg(reduce)
 const summ = numbers.reduce((acc, num)=>{
     return acc + num;
 },0); 
  const avg= summ/ numbers.length;
 
 console.log(avg);



  //  slice  methods 
  //

/* 
1. slice
The slice method is used to extract a section of an array without modifying the original array.
 It returns a new array with the selected elements.

 

/- deletion from a specific index is done using splice() method

/ TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// 
*/

let fruit = ['banana','apple','mango','cherry'];
let newFruit = fruit.slice(1,3);
console.log(newFruit);


//  splice  methode  is used  to add  or  remove  element in the array 
//(start 'where   changes begin ',delete count ,  element to  addd  )
 
  fruit.splice(1,2,'graps','tomatoes');
  console.log(fruit);
  //adding without removing
  fruit.splice(0,0,'apple','mango','banana');
  console.log(fruit);
  console.log("hello world");
  console.log("heloo");
  
  // set method  which remove   duplicates in the array 
  let arrayy=   [1,3,4,5,5];
   let newArray = [...new Set(arrayy)];
  console.log(arrayy)



  const array = [1, 2, 2, 3, 4, 4, 5];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]



function distinct(a) {

  const uniqueArray = a.reduce((acc, value) => {
    if (!acc.includes(value)) {
        acc.push(value);
    }
    return acc;
}, []);

  return 0; 
}

  console.log(distinct([1,2,3,4,5,5,5]));


  //!includes().     can help use to. remove. certain values in the allary.   by pushing them to our array

  function removeVowels(sentence) {
    // Split the sentence into an array of characters
    const charArray = sentence.split('');
    
    // Define the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    // Filter the array to remove vowels
    const filteredArray = charArray.filter(char => !vowels.includes(char));
    
    // Join the array back into a string and return
    return filteredArray.join('');
}

// Example usage
const sentence = "am. a. studrnt. at. auca. aaa";
console.log(removeVowels(sentence)); 


  var a =4;
  console.log(a);
  var a = 6;
  console.log(a);
  
  




  let charr = ["2","5"];
  let  num = charr.map(num => Number(num));
  console.log(num);

 