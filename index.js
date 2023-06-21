let inputs=document.getElementById("inputs");
let btn=document.getElementById("btn");
let lists=document.getElementById("lists");

function todoadd() {
    let inputValue=inputs.value;
    console.log(inputValue)
    if (inputValue==='') {
        alert('please enter a text')
    }else{
         // list
        let li=document.createElement("li");
    console.log(li);


    // insert elements into li
    li.innerText=inputValue;

    // append to li
    lists.appendChild(li)
    inputs.value='';
    inputs.focus() 
    } 
}
document.addEventListener("keypress",call)
function call(ent) {
    if (ent.key==='Enter') {
        btn.click()
    }
}
btn.addEventListener("click",todoadd);

