
let fruit = ['banana','apple','mango','cherry'];
for (let i = 0; i < fruit.length; i++) {
fruit[i] +='wow';
fruit[i] = fruit[i].toUpperCase();


}
console.log(fruit[]);


//for... each         has 3 parameters   num index  array 
// using  template  backtics      $ sign 

const numbers = [4,6,7,8,9,12];
 numbers.forEach((num, index ) =>{
   console.log(` index:${index} , num:${num}` );
   
 });
 var x= 5;
 var y= 10;
 console.log(`the  sum of ${x}  and ${y}  is ${x+y}`);



 // using  function 
  function forBacktics(a,b){
  const sum = a+b;
  const subtraction = a-b;

  return ` your sum:${sum} , your sub:${subtraction} `;
  }
  console.log(forBacktics(50,70));
  

  //Use the array's forEach() method(opens in a new tab)
  // to loop over the following array and add 100 to each of the values if the value is divisible by 3.


  var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
   test.forEach((num , index)=>{
       if (num%3==0) {
        test[index]+=100;
       }
       return num;
   });
   console.log(test);
   


   function grow(x) {
   
    let newArray = x.map(num => num * num);
    return newArray;
}

console.log(grow([1, 4, 9, 16]));


//Given a non-empty array of integers, return the result of multiplying the values together in order. 
//Example:[1, 2, 3, 4]
function groww(x) {
    let product = x.reduce((acc, num) => {
        return acc * num;
    }, 1); 
    return product;
}

console.log(groww([1, 2, 3, 4])); 
