function createUser(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

// Create objects using the factory function
const user1 = createUser('Alice', 25);
const user2 = createUser('Bob', 30);

user1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
user2.greet(); // Output: Hello, my name is Bob and I am 30 years old.


 function myButton(type ,text ,colour){
const el = document.createElement(type);
 el.innerText = text;
 el.style.color = colour;
 document.body.append(el);
  return el;
}
const el1= myButton('p1','hello world','black');
const el2= myButton('input','hello rwanda','white');