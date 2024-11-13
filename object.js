// accessing object  by brackext notation 
var user ={
    email:"user@gmail.com",
    firstnamr:"first",
    lastname:"lastname"
};
 console.log(user["email"]);
 let breakfast = {
    name:"the lumberjack",
    price : "$9.95",
    ingredients:["eggs","sugar","sausage","hashbrowns","pancakes"]
    
};
console.log(breakfast.ingredients);

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function (){
    
      return ( ` Welcome 
 Your current balance is  ${this.balance}    your interest rate is  ${this.interestRatePercent} ; `);
    }
    // your code goes here
};

console.log(savingsAccount.printAccountSummary());





 

let facebookprofile = {
    name: "Alain",
    friends: 3,
    messages: ["hello Alain"],
  
   
    postmessage: function (message) {
      if (message && typeof message === "string") {
        this.messages.push(message);
        return message;  
      }
      return "Invalid message!";
    },

    deleteMessage: function (index) {
      if (typeof index === "number" && index >= 0 && index < this.messages.length) {
        return this.messages.splice(index, 1); 
      return "Invalid index!";
    }},
  
    
    addFriend: function (count) {
      if (typeof count === "number" && count > 0) {
        this.friends += count;
        return this.friends;
      }
      return "Invalid count!";
    },
  
  
    removeFriend: function (count) {
      if (typeof count === "number" && count > 0 && this.friends >= count) {
        this.friends -= count;
        return this.friends;
      }
      return "Cannot remove friends!";
    }
  };
  
  
  console.log(facebookprofile.deleteMessage(0));            
  console.log(facebookprofile.addFriend(5));               
  console.log(facebookprofile.removeFriend(1));            
  console.log(facebookprofile.postmessage("Hello Alain")); 
  console.log(facebookprofile.deleteMessage(1));           
  console.log(facebookprofile.postmessage("hello Alain"));  
  console.log(facebookprofile.removeFriend(1));         

  console.log(facebookprofile);
  
