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

//   if only interested in the success part use .then clause
//   if only interested in the error part use .then clause
//   with two parameters first being null the second being the actuall error
//   or simply use a .cache clause for just the errors

let promise4 = new Promise(function(resolve,reject){
    setTimeout(()=>resolve("done!", 1000));
})

// promise4.then(
//     result=> alert(result),
//     error => alert(error)
// )

// promise4.then(res=>alert(res)).catch(err=>alert(err))

//finally 

new Promise((resolve, reject) => {
    setTimeout(() => reject( new Error("whoops")), 2000)
})
.finally(() => alert("Promise ready"))//finally can be used to alert when a promise is ready it does not have any arguments and passes the value it recieves form the promise to the next handeler 
.then(result =>alert(result))
.catch(error => alert(error))

















