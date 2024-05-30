let color_and_text = document.querySelector(".color_and_text").children;
let input = color_and_text[0];
const color = document.querySelector('.color')
let button = document.querySelector("button");
let right_container = document.querySelector(".right-container");
// let button2 = document.querySelectorAll("buttons");

button.addEventListener("click", ()=> {
    if(color_and_text[0].value == ""){
        alert("Enter some text");
        return;
    }
    addNotes( input.value,color.value) 
    color_and_text[0].value = "";
    document.querySelector(".notesAdded").style.display = "none";
    const btn = document.querySelectorAll(".buttons");
    btn.forEach((val) =>{
        val.addEventListener("click", () =>{
            val.parentElement.remove();
            // val.parentElement.remove();
        })
    })
})

function addNotes(note, color){
    div1 = document.createElement("div");
    div1.innerHTML = `<p>${note}</p> <button class="buttons">X</button>`;
    div1.style.backgroundColor = `${color}`;
    right_container.appendChild(div1);
}
function removeNote(button2){
    console.log(button2);
    
}
