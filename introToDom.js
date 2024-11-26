//  DOM is  a web api     
//  here  i will  the DOM
// modify page   content 
//browser events
//performance code 
//
// The DOM is standardized by the W3C. There are a number of specifications that make up the DOM, here are few:

// Core Specification
// Events Specification
// Style Specification
// Validation Specification
// Load and Save Specification
// 
// we  can select an element by id
document.getElementById('footer')
// Now, what do you think will happen if you used document.getElementById('<some-nonexistent-ID>') 
//to search for some ID that doesn't actually exist in the HTML page?
//   the answet null will be returned 
//  these  return a single element 

//The next two DOM methods that we'll be looking at that both return multiple elements are:

.getElementsByClassName()
.getElementsByTagName()

//  by  wrirtting getElrmy bt tagname  doesn't  return an array  return hetl  correction


 
// Node  is   like a  class   is like  a  blue print  including  methods   properties  and  methds 
// and node  with lower  case  is like an object    real object  buld from object 

thisis neww

// Since Element is pointing at Node, this indicates that the Element Interface inherits all of the Node Interface's properties and methods. 
// This means that any element (lowercase "e"!) that was created from the Element Interface is also a descendent from the Node Interface...which means the element 
// (lowercase "e"!) is also a node (lowercase "n"!).

// Let's do a little digging around on an element!
//  the DOM (Document Object Model), everything on a webpage is represented as an object.
//  This includes elements, attributes, text, comments, and the document itself. Here’s how it works:
// Nodes in the DOM:
// A "Node" is a basic unit in the DOM. It represents everything in the DOM structure, including elements, text, comments, attributes, and more.
// "Nodes" (plural) refers to all these different types of things collectively in the DOM tree.

// <div>Hello, <span>world!</span></div>
// The DOM tree would have these nodes:

// <div> (Element node)
// Text Node: "Hello, "
// <span> (Element node)
// Text Node: "world!"
// So, all of these are nodes, but not all of them are elements.
// Quick Tip for Understanding:
// Think of the DOM as a tree made of nodes. Each node is a part of this tree, but not every node is an HTML element. Some nodes are:

// Text (words inside tags),
// Comments (hidden in the HTML),
// Or structural nodes like the document itself.


### **Why a node is an object?**

- In JavaScript, the DOM API represents everything in the DOM as objects to make them programmable.
- For example, an HTML element like `<div>` becomes an **element node object** with properties 
(like `id`, `className`) and methods (like `appendChild`, `setAttribute`).
//  DOM Node  IS  THE  BASE  class  where  other  other  api abject are  based 

What id, className, and tagName Return
These are properties of an HTML element, and they return specific attributes about the element:

id

Returns the value of the element's id attribute.
Example:
<div id="myDiv">Hello World</div>
const element = document.getElementById("myDiv");
console.log(element.id); // Output: "myDiv"
className

Returns the value(s) of the element's class attribute as a single string.
Example:
<p class="myClass anotherClass">This is a paragraph.</p>
const element = document.querySelector(".myClass");
console.log(element.className); // Output: "myClass anotherClass"
tagName

Returns the tag name of the element (in uppercase by default).
Example:
<section id="mySection">Content here</section>
const element = document.getElementById("mySection");
console.log(element.tagName); // Output: "SECTION"
How These Properties Relate to Elements
When you use methods like getElementById(), querySelector(), or getElementsByClassName(), you retrieve an element. Then, you can use these properties to extract information about the element:

Get the element:

const element = document.getElementById("myDiv"); // Retrieves the <div> element
Access its properties:

console.log(element.id);        // The 'id' property gives you "myDiv"
console.log(element.className); // The 'className' property (if any classes exist)
console.log(element.tagName);   // The 'tagName' property gives "DIV"
What These Properties Do NOT Do
They do NOT return the content or child elements of the element.
For example, id, className, and tagName do not give you the text inside the element or its children.
For content, you use properties like innerText, textContent, or innerHTML.
Summary
id, className, and tagName are properties that return metadata about the element (its ID, class, or tag type).
They are not the element itself but descriptions of the element.
To get the actual element, you use DOM methods like getElementById() or querySelector().