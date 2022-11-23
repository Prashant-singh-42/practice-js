// promise chaining

// each .then resolves the promise and passes on the new
// promise to the further down .then with the updated values

// new Promise(function(resolve, reject) {
//     setTimeout(()=> resolve(1), 1000);
// }).then(function(result){
//     alert(result)
//     return result*2
// }).then(function(result){
//     alert(result)
//     return result*2
// }).then(function(result){
//     alert(result)
//     return result*2
// })

//fetch

fetch('./relaxed.json',
{
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  }
)
.then(res=>{
    console.log(res)
    return res.json()
})
.then(data => {
    // console.log(data.user)
    return fetch(`https://api.github.com/users/${data.user}`)  
}).then(res => res.json())
.then(gihubUser => 
  new Promise(function(resolve, reject){
    let img = document.createElement('img')
    img.src = gihubUser.avatar_url;
    
  

  setTimeout(()=>{
    document.body.appendChild(document.createElement('p'))
    document.body.appendChild(img)
    resolve(gihubUser)
    // img.remove();
  }, 3000)
})
)
.then(gihubUser => {
  alert(`finished`)
})

//a promice is more like a Thenable class with  a method then


// promises resolving with the browser document ask it