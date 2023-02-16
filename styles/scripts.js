let grid = document.getElementById("grid");
let erase = document.getElementById("erase");
let size = 16;

function createGrid()
{
    for (let i = 0; i < 16*16; i++)
    {
        let squarez = document.createElement("div");
        grid.appendChild(squarez);
        squarez.classList.add("squares");
    }
    grid.style.setProperty("grid-template-columns", "repeat(" + size + ", 1fr)");
}
createGrid();
grid.addEventListener("mouseover", (e) => {e.target.style.backgroundColor = "red";});

sizebtn.addEventListener("click", () => {let size = prompt("Choose size"); createGrid2(size)});
erase.addEventListener("click", () => {grid.innerHTML = ""; createGrid2(size);});
function createGrid2(n)
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

/* can delete first function. also need to fix erase button. it erases and goes back to 16x16 */ 
