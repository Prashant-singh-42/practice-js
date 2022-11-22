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
