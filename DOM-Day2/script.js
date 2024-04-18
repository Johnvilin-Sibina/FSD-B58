/*function foo(){
    const res = document.getElementById("vote").value;
    console.log(res)
;
if(res<=17){
 alert("Not Eligible to Vote");
}
 else{
    alert("Eligible to Vote");
 }
}*/

/*function foo(){
const res = document.getElementById("email").value;
if(res=="johnvilinsibina@gmail.com"){
    alert("Valid Email Id")
}
else{
    alert("Invalid Email Id")
}
}*/

const div = document.createElement("div");
div.className = "division"
div.id = "division";

const red = document.createElement("button");
red.innerHTML = "Red";
red.addEventListener("click",()=>{
    document.getElementById("division")
})



document.body.append(div)

