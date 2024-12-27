//   constructor fuxntion is  a function that  create object  to us   very  similar to constructor  function  
function greet(city, country) {
    console.log(`Hello, my name is ${this.name}, I live in ${city}, ${country}`);
  }
  
  const person = {
    name: 'Alice'
  };
  
  // Using call() to change the context of `this`
  greet.call(person, 'New York', 'USA'); 
  // Output: Hello, my name is Alice, I live in New York, USA
  