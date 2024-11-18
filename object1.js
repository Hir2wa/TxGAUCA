// // using  literal methods

// let obj = {
// name:"Alain"
// }
// console.log(obj.name);
 
// //using   costractor 

//  let person = new Object();
//  person.name = "Alain",
//  person.age ="40",
//  person.occupation = "dev"

//  console.log(person);


// person.country = "Rwanda";
// console.log(person);
// console.log(person.name);


//shallow copy


  let obj1= {
    name:"Alain",
    status:"unkown",
 name :"unkown",
 obj2:{
    name:"Alain",
    status:"unkwon"
 }
}

  let objcopy = {...obj1};

   objcopy.obj2.name="fabrice";
  console.log(obj1);
  
  console.log(objcopy);

  const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}