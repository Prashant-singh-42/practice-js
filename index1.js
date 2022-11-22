function showMsg(){
    let msg = "hey";
    alert (msg)
}

// showMsg()
// alert(msg)//msg is in local scope of showMsg

function sum(a, b) {
    let res = a + b;
    return res
}

// alert(sum(1,2))