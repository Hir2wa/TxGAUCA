// Capture Phase (Capturing):

// The event starts at the root of the DOM tree and travels down toward the target element.
// This phase allows you to intercept the event before it reaches the target.
// Target Phase:

// The event reaches the target element where it was triggered.
// If there is an event listener on the target, it will execute in this phase.
// Bubble Phase (Bubbling):

// After the target phase, the event bubbles back up the DOM tree, traveling from the target element back to the root.
// This allows ancestors of the target element to handle the event.


// [Document]
//    ↓ Capturing Phase
// [Parent Element]
//    ↓
// [Target Element] ← Target Phase
//    ↑
// [Parent Element]
//    ↑ Bubbling Phase
// [Document]


const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// Listener in the bubbling phase (default)
parent.addEventListener('click', () => {
    console.log('Parent Bubbling');
});
// Why Use Different Phases?
// Capturing Phase:

// Useful for intercepting events early in the flow.
// Example: Logging or modifying events before they reach the target.
// Bubbling Phase:

// Commonly used for event delegation, where a parent element handles events from its child elements.
// Example: Attaching a single click listener to a <ul> for handling clicks on multiple <li> elements.

// No, it is not a must to explicitly pass a parameter when attaching an event listener. However,
//  the event object (commonly named event or e) 
// is automatically passed to the event listener function by the browser.

// How the Event Object Works
// When an event occurs, the browser creates an event object containing details about the event 
// (e.g., the type of event, the target element, mouse position, etc.). 
// This object is automatically passed to the callback function.