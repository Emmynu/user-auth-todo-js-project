let userDetails = [ {
        name:"hello json",
        email: "json blah blah",
        password: "sdfguiop[09764"
    }
]
function submit(){
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if(name, email,password){
        checkName = /[a-z]{4}/
        validateName = checkName.test(name)

        checkPassword = /[a-z]{4}/
        validatePassword = checkPassword.test(email)

        checkemail = /[a-z]{4}/
        validateEmail = checkemail.test(password)

        localStorage.setItem("username",JSON.stringify(name))
        localStorage.setItem("email",JSON.stringify(email))
        localStorage.setItem("password",JSON.stringify(password))

        document.querySelector("#name").style.border = "1px solid green"
        document.querySelector("#email").style.border = "1px solid green"
        document.querySelector("#password").style.border = "1px solid green"

        setTimeout(()=> {
            document.location.href = "./index.html"
        },2000)
    }
    else{
        document.querySelector("#name").style.border = "1px solid red"
        document.querySelector("#email").style.border = "1px solid red"
        document.querySelector("#password").style.border = "1px solid red"
    }
}

let fromLocalName = JSON.parse(localStorage.getItem("username"))
console.log(fromLocalName)

let fromLocalEmail = JSON.parse(localStorage.getItem("email"))
console.log(fromLocalEmail)

let fromLocalPassword = JSON.parse(localStorage.getItem("password"))
console.log(fromLocalPassword)


function Login(){
    let userName = document.getElementById("username").value
    console.log(userName)
    let Password =  document.getElementById("userpassword").value
    console.log(Password)

    if(fromLocalName === userName && fromLocalPassword === Password){
        document.querySelector("#username").style.border = "1px solid green"
        document.querySelector("#userpassword").style.border = "1px solid green"
        setTimeout(() => {
            document.location.href = "./index.html"
        },3000)
    }
    else{
       if(fromLocalName !== userName ){
        document.querySelector("#username").style.border = "1px solid red"
       }
       else if(fromLocalPassword !== Password){
        document.querySelector("#userpassword").style.border = "1px solid red"
       }
       else if(fromLocalPassword !== Password &&fromLocalName !== userName ) {
        document.querySelector("#username").style.border = "1px solid red"
        document.querySelector("#userpassword").style.border = "1px solid red"
       }
    }
}

// tabs
let items = document.querySelectorAll(".root .content")

function showTabs(index){
    items.forEach(function(node){
        node.style.display = "none"
    })  
    items[index].style.display = "block"
    items[index].style.transition = ".900s"
}
showTabs(0)

document.querySelector("#sign-in").addEventListener("click",function(){
    document.querySelector("#signUp").style.background= "#6d7073"
    document.querySelector("#signUp").style.color = "white"
    document.querySelector("#sign-in").style.background= "#075192"
    document.querySelector("#sign-in").style.color = "white"
    document.querySelector("#sign-in").style.transition= ".900s"

})

document.querySelector("#signUp").addEventListener("click",function(){
    document.querySelector("#sign-in").style.background= "#6d7073"
    document.querySelector("#sign-in").style.color = "white"
    document.querySelector("#signUp").style.background= "#075192"
    document.querySelector("#signUp").style.color = "white"
    document.querySelector("#signUp").style.transition= ".900s"
})