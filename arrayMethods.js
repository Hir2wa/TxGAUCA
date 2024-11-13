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
  

