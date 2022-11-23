// Microtasks 

// Even when a Promise is immediately resolved, the code on the
//  lines below .then/.catch/.finally will still execute before 
//  these handlers.

let promise = Promise.resolve()
promise.then(() => alert('promise is resolved')) //executes later
alert("code finished") //executes first

// microtasks queue 
// promise and their handlers are put to a queue only to be executed later 
// when the synchronous code is done executing in teh current file 

// in the queue it is entered in the same order like when it is resolved 

//reason for unhandledrejction event fired by the browser
// microtask queue gets empty and the browser checks if there is a 
// unhandled reject promise so it triggers that event 


// in this case promise2 gets resolved immediately while the handler to it 
// is placed later in the queue when the queue is already empty


// seems like the queue doesnt gets empty later the timeout eventually catches 
// the error and the error on the console gets removied
let promise2 = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise2.catch(err => alert('caught')), 11000);

// Error: Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));