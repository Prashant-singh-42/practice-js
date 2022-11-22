const user = {
    name: "jhon",
    age: 19
}

const key = "name";
// alert(user.key)//results in undefined
// alert(user[key])//use squre bracket notaion instead

const MakeUser = (name, age) => {
    return (
        {
            name: name,
            age: age
        }
    )
}
// const user1 = MakeUser("jhon",9)//making object with functions
// console.log(user1)