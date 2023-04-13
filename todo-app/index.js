let fromLocal = JSON.parse(localStorage.getItem("todos"))

let userTodos = [
    {
        id: "1",
        todo: "Buy Eggs"
    }
]

if(fromLocal){
    userTodos = fromLocal
    renderTodos()
}

renderTodos()


function add(){
    value = document.querySelector("#todo").value
    if(value){
        userTodos.push({
            id: new Date().getTime().toString(),
            todo: value
        })
        localStorage.setItem("todos",JSON.stringify(userTodos))
        document.querySelector("#todo").value = " "
        $("#state").text("Sucessfully added").css({color: "green"}).fadeToggle(3000).hide(4000)
        $("#line").fadeToggle(2000).css({backgroundColor:"green"}).hide(3500)
    }
    else{
        $("#state").text("Invalid Input").css({color: "red"}).fadeToggle(3000).hide(4000)
        $("#line").fadeToggle(2000).css({backgroundColor:"red"}).hide(3500)
    }

    renderTodos()
}

function clearAll(){
    userTodos = []
    localStorage.removeItem("todos")
    renderTodos()
}

function renderTodos(){
    let showTodo = "";
    valueEl = document.querySelector("#todo").value
  
    for(i = 0; i < userTodos.length; i++){
        showTodo += `
        <p>
        ${userTodos[i].todo}
        <button onclick="userTodos.splice(${i}, 1)
         renderTodos()
         del()
         "> Delete</button>
        </p>`
   }
     document.querySelector("#renderTodos").innerHTML = showTodo
   
}

function del(){
    $("#state").text("Todo Deleted").css({color: "#075192"}).fadeToggle(3000).hide(4000)
    $("#line").fadeToggle(2000).css({backgroundColor:"#075192"}).hide(3500)
    localStorage.removeItem("")
}
