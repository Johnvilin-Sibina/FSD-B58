const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea");
const msg = document.getElementById("msg");
const tasks = document.getElementById("tasks");
const add = document.getElementById("add");

//form validation
const formValidation = ()=>{
    if(textInput.value===""){
        msg.innerHTML="Input field cannot be empty."
        //console.log("Data Not found");
            }
    else{
        msg.innerHTML="";
        //console.log("Data is found");
        getData();
        add.setAttribute("data-bs-dismiss","modal");
        add.click();
        (()=>{
            add.setAttribute("data-bs-dismiss","");
        })();
    }
}

//Submit logic
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation();
})

//getting details from the form input and storing it in data
let data=[{}];

const getData = ()=>{
    data.push({
        text:textInput.value,
        date:dateInput.value,
        task:textarea.value,
    })
    localStorage.setItem("data",JSON.stringify(data));
    //console.log("get",data);
}

//Create function
const createTask = ()=>{
    tasks.innerHTML="";
    data.map((ele,y)=>{
        return (tasks.innerHTML += `<div id=${y}>
        <span class="fw-bolder">${ele.text}</span>
        <span class="small text-secondary">${ele.date}</span>
        <p>${ele.task}</p>
        <span class="options">
        <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square" style="color: #e21Bac;"></i>
        <i onclick="deleteTask(this);createTask()" class="fa-solid fa-trash-can" style="color: #e91ccd;"></i>
        </span>
        </div>
        `)
    })
resetForm();
}

const resetForm = ()=>{
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}
(()=>{
    data = JSON.parse(localStorage.getItem("data")) || [];
    //console.log("reset",data);
    createTask();
})();

//Edit function for todo
const editTask = (e)=>{
    let task = e.parentElement.parentElement;
    textInput.value = task.children[0].innerHTML;
    dateInput.value = task.children[1].innerHTML;
    textarea.value = task.children[2].innerHTML;

    //Task.remove
    deleteTask(e);
 }

//delete function for todo
const deleteTask = (e)=>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1);
    localStorage.setItem("data".JSON.stringfy(data));
    //console.log(data);
}