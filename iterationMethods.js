//for each and for of   
  
  let myArray = ["Alain","Fabrice","Hirwa","AUCA"];
  for(let char of myArray){
    console.log(char);
  }
  myArray.forEach((char)=>{
    console.log(char);
  })
  const elements = ["fire", "air", "water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

         // let returns   a new String 
const a = ["Wind", "Water", "Fire"];
console.log(a.join()); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'  
a.join(""); // 'WindWaterFire'
 console.log(a);
 

   // key()    returns  a  new  string     by    returning  index  of the array 
   // parametr  does note  a parameter 
   let neww = a.keys();
 for(let key of neww){
 console.log(key);
 }
       




 const b = ["Wind", "Water", "Fire"]; 
// these  is a  function  
  let iterable =  b[Symbol.iterator]();  
   console.log(iterable);
  console.log(iterable.next());
  console.log(iterable.next());
  console.log(iterable.next());
  console.log(iterable.next());
  console.log(iterable.next());





    const iter = {
        counter : 0,
         next(){
            return {
                value:this.counter++,
                done:false,
            };
         }

    }
     console.log(iter.next()); 
     console.log(iter.next()); 
     console.log(iter.next()); 
     console.log(iter.next()); 
     let arr=[1,2,3,4,5];
     
      console.log(arr.length=9);
        console.log(b.lastIndexOf("wind"));
        console.log(b.reverse());


      // methode  last index     which search  index  where  that  values is    held 
//   theese   methods  that  directly   give the  result can  be  consold  if   you never  need  any iterator or  iterable 
      console.log(b.lastIndexOf("wind"));
      console.log(b.reverse()); 
      // gives  a new array    take a parammeter of a  call back
       const array1= [1,2,3,4,5];
        const map1 = array1.map((x)=> {
          return   x*2;
        } 
            
          );
       console.log(map1);


 // pop  read  the  lengt  of the array 
        console.log( array1.pop());
         console.log(array1);
 //  the push  add element at the of the  arrray
 // by here it will retur the     updated lenght of the array
  console.log(array1.push(9,9,10));
   console.log(array1);
   
  
console.log(array1.push(...array2));
 console.log(array1);

        //  let work  on     concat  method  which return  a copy 
        let array2= [20,90,78,46,50];
         let result = array1.concat(...array2);
       

        