let grid = document.getElementById("grid");
let size = 16;

grid.addEventListener("mouseover", (e) => {rando =  Math.floor(Math.random()*16777215).toString(16); e.target.style.backgroundColor = "#" + rando;});

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