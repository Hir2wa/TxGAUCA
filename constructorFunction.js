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
  const person1 = new Person('Alice');
const person2 = new Person('Bob');

const boundGreet = person1.greet.bind(person2);
boundGreet(); // Output: Hello, my name is Bob

  