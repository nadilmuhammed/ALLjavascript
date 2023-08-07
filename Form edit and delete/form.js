let texts = document.getElementById("texts");
let btn = document.getElementById("btn");
let lists = document.getElementById("lists");

function todolists() {
    let inputValue = texts.value;
    console.log(inputValue)

    if (inputValue === "") {
        alert("Text cannot be empty");
    }else{
        let li = document.createElement("li")
        console.log(li);
        // li.innerHTML = inputValue;
        lists.appendChild(li);

        let span=document.createElement("span")
        span.innerText = inputValue;
        li.appendChild(span)

        let icon = document.createElement("button");
        icon.innerHTML="delete"
        icon.style.marginLeft="1rem";
        icon.classList.add("del");
        icon.style.border = "1px solid red";
        icon.style.backgroundColor="transparent";
        icon.style.transition= "10s"
        icon.style.color="red";
        li.appendChild(icon);

        let editicon = document.createElement("button");
        editicon.classList.add("editicon")
        editicon.innerHTML="Edit";
        editicon.style.marginLeft='1rem';
        editicon.style.backgroundColor='transparent'
        editicon.style.color='white';
        editicon.style.border="1px solid white";

        li.appendChild(editicon);

       li.addEventListener("click",function name(rem) {
        console.log(rem.target.classList);
        let btn = rem.target.classList;
        if (rem.target.classList[0] === 'del') {
            rem.target.parentElement.remove()
        }else if (rem.target.classList[0] === 'editicon') {
            let updateInput=prompt("Update the text")
            let newspan=li.querySelector("span")
            newspan.innerText=updateInput;
        }
       });

    //    for refreshing the input area
        texts.value = "";
        texts.focus()
    }   
}

// click 'Enter' to input
function call(ent) {
    if (ent.key === 'Enter') {
        btn.click()
    }
}
document.addEventListener("keypress",call);
btn.addEventListener("click",todolists);



