// Promisification

// from functions that accepts callbacks to function that returns a promise

function loadScript(src, callback){
    let script = document.createElement('script')
    script.src = src

    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`script load error`))

    document.head.appendChild(script)
}

// let loadScriptPromise = (src) => {
//     return new Promise((resolve, reject) => {
//         loadScript(src, (err, script) => {
//             if (err) reject(err)
//             else resolve(script)
//         })
//     })
// }

// loadScriptPromise('./index1.js').then(res => console.log(res))



//doubt in this code how does it works <ask>
function promisify(f) {
    return function (...args) { // return a wrapper-function (*)
      return new Promise((resolve, reject) => {
        function callback(err, result) { // our custom callback for f (**)
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
  
        args.push(callback); // append our custom callback to the end of f arguments
  
        f.call(this, ...args); // call the original function
      });
    };
  }
  
  // usage:
  let loadScriptPromise = promisify(loadScript);
//   loadScriptPromise(...).then(...);
loadScriptPromise('./index1.js').then(res => console.log(res))