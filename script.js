var todolist=[
    " ",
];
function add(){
    var input=document.getElementById("todotxt");
    var text=input.value;
    todolist.push(text);
    input.value=""; 
    display();    
}
function display(){
    var list=document.getElementById("list");
    list.innerHTML="";
    for(var i=0; i<todolist.length; i++){
        list.innerHTML+=`<div class="todo-item">${todolist[i]}</div>`
        console.log(todolist[i]);
    }
}



