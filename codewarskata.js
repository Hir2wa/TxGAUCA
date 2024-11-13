const numbers = [1, 2, 3, 4, 5];
const newNumber = numbers.map(num=> num*2);
console.log(newNumber);

//even numbers 
const numberss = [1, 2, 3, 4, 5];
const newNumberr=numberss.filter(num=>num%2==0);
console.log(newNumberr);


//reversing array 
function digitize(n) {
    let newArray = [];
    for(i=n.length -1; i>=0;i--){
       newArray.push(n[i]); 
    }
    return newArray;
  }
  console.log(digitize([1,3,2,5,3]));

  // taking  a list of 1,3,2,5,3  then reverse 
  

  function myWorld(){
    let world= "helo world";
  return  world.split( " "); 


  }
  
  console.log(myWorld());



  function myNumbers(){
    var numbr = 12345;

     let digits =  numbr.toString().split('');
     return digits.map(Number);

  }
console.log(myNumbers());

// tipp 
//converting  list to string 
//splitting to array
// using msp to  convert to Numbers 
function digitize(n) {
    let converted  = n.toString().split('');
    let toDigits = converted.map(Number); 
    let newArray =[];
    for(let i=toDigits.length -1; i>=0;i--){
       newArray.push(toDigits[i]); 
    }
    return newArray;
  }
  let myList =35231;
  console.log(digitize(myList));


  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }




  function myreverse(n){
   return n.reverse();
  }
  console.log(myreverse([1,2,3,5,6]));
    


  let  num = [1,2,3,4,5,6];
  function  maxnum(n){
     return n.filter(num => num%2==0);
  }
   console.log(maxnum(num));

    function  maxNumber(){

    }



    function rockpaperscissors(player1, player2) {
      let result = '';
      
      
      if (player1 === player2) {
        result = "draw";
      }
      
    
      else if (player1 === 'rock') {
        if (player2 === 'paper') {
          result = "player2 wins";
        } else if (player2 === 'scissors') {
          result = "player1 wins"; 
        }
      }
    
     
      else if (player1 === 'paper') {
        if (player2 === 'rock') {
          
          result =     "player1 wins"; 
        } else if (player2 === 'scissors') {
          result = "player2 wins"; 
        }
      }
    
   
      else if (player1 === 'scissors') {
        if (player2 === 'paper') {
          result = "player1 wins"; 
           } else if (player2 === 'rock') {
             
            result = "player2 wins"; 
        }
      }
    
      return `player1 played ${player1} and player2 played ${player2}. ${result}!`;
    }
    
    console.log(rockpaperscissors("rock", "paper")); 









    const rps = (p1,p2)=>{
     
         if (p1==p2){
          result = 'draw!';
         }
         else if(
          (p1 =="paper" && p2 =="rock")||
          (p1=="rock" && p2 =="scissors")||
          (p1=="scissors" && p2=="paper")
         ){
         return `${p1} , ${p2} --> player 1 won! `
         }else{
          return `${p1} , ${p2}--> player 2 won!`
         }
    };
    
     console.log(rps("rock","paper"));









     //  here is a  funciton to    solt 
      function ssort(){
      let numbers = [1,3,5,6];
      let neww = numbers.sort((a,b)=>b-a);
       return neww;
       
      }
 console.log(ssort());


     