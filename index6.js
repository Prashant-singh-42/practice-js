//error handing with promises

//seems like script is loaded first <ask it>
// new Promise((resolve, reject) => {
//     resolve("ok");
// }).then((res) => {
//     throw new Error("whoops")//throws a error in a .then block on in the promise block
// }).catch((error) => alert(error))


// catch block catches an error but is could not resolve it so it throws back the 
// same error in the hope that if any other catch block can resolve it 

// new Promise((resolve, reject) => {
//     throw new Error("whoops")
// }).catch((error) => {
//     if(error instanceof URIError){
//         alert("it is a uri error")
//     }else{
//         alert("could not resolve the error here")
//         throw error
//     }
// })
// .then(res => {
//     alert("it wont run as the promise returns a reject not a response")
// })
// .catch(error => {
//     alert('the error has occured and handaled here')
//     alert(error)
// })

// if there are no catch blocks then the error is shown on the console 
// by the the global error handler
// The JavaScript engine tracks such rejections and generates a global 
// error in that case. You can see it in the console

window.addEventListener('unhandledrejection', (e)=>{
    alert(e.promise)
    alert(e.reason)
})

new Promise((resolve, reject) => {
    throw new Error("whoops")
})