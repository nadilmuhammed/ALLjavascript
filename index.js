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
        let span=document.createElement("span");

    // console.log(li);
        // insert elements into li
    li.innerText=inputValue;
        // console.log(span);

     span.innerText=inputValue;

             // append to li
    lists.appendChild(li);

    li.appendChild(span);



    // icon creation
    let ic=document.createElement("i")
    console.log(ic)
    let newic = document.createElement("i")
    // ic.innerHTML="delete";
     ic.classList.add("fa-solid","fa-square-xmark")   /*to add class */
     newic.classList.add("fa-solid","fa-pen-to-square")
    li.appendChild(ic);
    li.appendChild(newic);


    // to delete lists
    li.addEventListener("click",function name(evets) {
        console.log('evets');
        let targetClass = evets.target.classList;
        console.log(evets.target.classList[1]);
        // console.log(evets.target.parentElement.remove(),'-----parent Element');

        // console.log(targetClass);
        // console.log(targetClass[0]);
        // console.log(targetClass[1]);
        // console.log(targetClass[1] === 'fa-square-xmark');
        if (targetClass[1] === 'fa-square-xmark') {
            evets.target.parentElement.remove()
        }else if (targetClass[1] === 'fa-pen-to-square') {
            let updateInput=prompt("update the text")
            // console.log(updateInput,'Enter the text')
            let newSpan = li.querySelector("span")
            newSpan.innerText=updateInput;
            console.log(li);
            console.log(newSpan)
        }
    });



    // Refreshing the input tab
    inputs.value='';
    inputs.focus() 
    } 
}


// get the output when enter is pressed

function call(ent) {
    if (ent.key==='Enter') {
        btn.click()
    }
}

document.addEventListener("keypress",call);
btn.addEventListener("click",todoadd);

