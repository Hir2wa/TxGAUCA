// Capture Phase (Capturing):

// The event starts at the root of the DOM tree and travels down toward the target element.
// This phase allows you to intercept the event before it reaches the target.
// Target Phase:

// The event reaches the target element where it was triggered.
// If there is an event listener on the target, it will execute in this phase.
// Bubble Phase (Bubbling):

// After the target phase, the event bubbles back up the DOM tree, traveling from the target element back to the root.
// This allows ancestors of the target element to handle the event.