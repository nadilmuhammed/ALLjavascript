let inputs = document.getElementById("inputs")
let btn1 = document.getElementById("btn1")
let lists = document.getElementById("lists")

function todoevents() {
    let inputValue = inputs.value;
    if (inputValue === '') {
        alert("Text cannot be null");
    } else {
        let li=document.createElement("li");
    console.log(li);

    li.innerText=inputValue;
    lists.appendChild(li);
    inputs.value='';
    inputs.focus();
    }
}
document.addEventListener("keypress",call);
    function call(board) {
        if (board.key==='Enter'){
            btn1.click();  
        }
    }

btn1.addEventListener("click",todoevents)