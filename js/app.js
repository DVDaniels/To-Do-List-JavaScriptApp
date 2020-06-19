// CODE EXPLAINED channel

// Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST = [] 
    ,id = 0;

// Show todays Date
const options = {weekday:"long", month:"long", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do functions

function addToDo(toDo, id, done, trash){
    if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item =`
    <li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>
    `;
    
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

// add an item to the list using the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;

        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);
        }

        LIST.push({
            name : toDo?
            id : id,
            done : false,
            trash : false
        });

        id++;
    
        input.value = "";
    }
});

// Complete to do
function completeToDo(element){
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true ;
}

// Remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

//  target the items created dynamically 
list.addEventListener("click", function(event){
    const element = event.target; 
});
