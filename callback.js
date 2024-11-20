               // a call back is a function that is taken as an argument to onother  function   function  
               // callacks   are used  in reading  file
               // network request 
               //introduction  with daabse 
               // ex here  when you are done  call these 
       
       
/*
               hello();
               goodbye();
       function hello(){
        setTimeout( function() {
            console.log("hello you");
        },3000); 
        
       }

       function goodbye(){
        console.log("goodbye");
        
       }
                 
       // so here   goodbye is comming   befor  hello    which    has  no meaning  
       
        // here is where callback be  needed 
*/


hello(goodbye);

function hello(callback){

console.log("hello you");

callback();
}

function goodbye(){
console.log("goodbye");

}

// function to sum two number
   sum(display,1,8);
  function sum( callback,x,y){
    let result= x+y; 
    callback(result);
  }
   function display(result){
    console.log(result);
   }



     function performOperation(x,y,callback){
  return callback(x,y);



     }
       function sumOf(x,y){
          return x+y;
       }
        function subOf(x,y){
          return x-y;
        }

         console.log(performOperation(3,4,sumOf));
         console.log(performOperation(3,4,subOf));




        function myMap(values,callback){
            return  values.map(callback);

        }
        function operation(m){
           return m*2;
        }
           const  rry= [1,3,4,5,];
            console.log(myMap(rry,operation));




        function myFilter(values,callback){
          return values.filter(callback);
        }


         function operationns(m){
           return  m%2==0;
         }
           

         console.log(myFilter([2,4,5,6,7],operationns));




         const people = [
          { name: "Alice", age: 25 },
          { name: "Bob", age: 30 },
          { name: "Charlie", age: 35 }
      ];
        console.log(people.age>12);
        




          function  convertAll(x,y){
               return x(y);  
          }


           function firstAdd(x){
              return x+2;
           }
          function secondOperation(x){
            return x*2;
          }


           function composite(values,first,second){
              first(second(values));
           }
          

            console.log(convertAll(composite));
      