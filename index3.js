const loadScript = (s, callback) => {
    let script = document.createElement('script')
    script.src = s
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`error while loading script`))
    document.head.appendChild(script)
}

// loadScript('/index1.js')//loads index1 which alerts 3

// underStanding callbacks

// -> first executes instrution in the loaded script
// then only continues with the stuff in the present file 

// loadScript('./index1.js', (err, callbackRecieved) => {
//     alert(`scrip1 is loaded press okay to continue`)
// })

//script9 does not exists hence it raises an error
// which it is then recieved as the callback 
// with the new error object
loadScript('./index9.js', (error, script) => {
    // alert(callbackRecieved)
    if (error) {
        console.log(error)
    }else {
        console.log(script)
    }
    
    // alert(`scrip1 is loaded press okay to continue`)
})


// pyramid of doom something like more and more loadscripts
// being chaned in the respose or when there is no error

// solution
loadScript('./index1.js', step1)

function step1(err, script){
    if(err) {
        //handle the err
    }else{
        loadScript('./index2.js', step2)
    }
}

function step2(err, script){
    if(err) {
        //handle the err
    }else{
        // loadScript('./index3.js', step2)
        console.log(user)
        const user1 = MakeUser('me',97)
        console.log(user1)
    }
}

// we scale the chainig part with the help of individual function
// resolving the issue in a vertical scaling fashion

//all the variables + merthods are available once loaded 
// in the present script 
