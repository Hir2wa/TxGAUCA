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

