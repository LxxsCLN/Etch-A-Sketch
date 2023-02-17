let grid = document.getElementById("grid");
let size = 30;


function paintGrid(a, color){    
    if(a.buttons == 1){
        if(a.target.classList == "squares"){
            let squarezz = a.target;    
            squarezz.style.backgroundColor = color;
        }  
    }else{
        //Exit condition if mouse is not clicked.
        return;
    }
}

//Returns a random rgb color.
function getRandomRgb() {
    let rando =  Math.floor(Math.random()*16777215).toString(16);
    return "#" + rando;
}

//paintGrid when mouseover event in selectedColor
grid.addEventListener('mousedown', e =>{paintGridEvent = paintGrid(e, getRandomRgb()); if(e.buttons == 1)
                                                                                                {        
                                                                                                window.addEventListener('mouseover', (e) => {paintGrid(e, getRandomRgb());});
                                                                                                }});

sizebtn.addEventListener("click", ccss);

erase.addEventListener("click", eerr);

function ccss()
{
    size = prompt("Choose size"); 
    while (size < 1 || size > 100 || isNaN(size) || size % 1 !== 0)
    {
        if (size === null)
        {
            return;
        }
        else {
        size = prompt("Please enter a whole number between 1 and 100");
    }}
    createGrid(size);
   
}

function eerr()
{
    grid.innerHTML = ""; 
    createGrid(size);
}

function createGrid(n)
{
    grid.innerHTML = "";
    for (let i = 0; i < (n*n); i++)
    {
        let squarez = document.createElement("div");
        grid.appendChild(squarez);
        squarez.classList.add("squares");
    }
    grid.style.setProperty("grid-template-columns", "repeat(" + n + ", 1fr)");
}

createGrid(size);