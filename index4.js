// promises practice

// promise object returns a promise object


// spcific to a particular promise object 
// initial
// state => "pending"
// result => undefined

// succes
// state => "fulfilled"
// result => value the value returned when the the promise is resolved

// no success
// state => "rejected"
// result => error object

// promises can be resolved immediately

// at a time only resolve or reject is reject returned by the promise it cannot be both
// if tried the later statements are ignored

let promise1 = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });

  let promise2 = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => resolve("done"), 1000);
  });

  let promise3 = new Promise(function(resolve, reject) {
    //immediate response
    resolve("done")
  });

  //then and catch
