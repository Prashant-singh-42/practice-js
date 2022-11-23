// Async and Await 


// async keyword before any function means that function now only returns a 
// Promise

// async function f() {
//     return 1; // 1 is returned as a resolve promise object
// }
// f().then(res => alert(res))



// await another keyword only usable inside a async block  cant use it 
// in regular functions 

// let f = async () => {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('done'), 1000)
//     })

//     let result = await promise

//     alert(result)
// }
// f()


async function showAvatar() {
    
    // read our JSON
    let response = await fetch('/relaxed.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.user}`);
    let githubUser = await githubResponse.json();
    console.log(githubUser)
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    // img.className = "promise-avatar-example";
    document.body.appendChild(img);
    // wait 3 seconds
    let m = new Promise((resolve, reject) => setTimeout(resolve("hey"), 10000))
    m.then(res => alert(res))
    img.remove();
    
    return githubUser;
  }
  
  showAvatar();




