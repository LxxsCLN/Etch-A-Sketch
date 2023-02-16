let grid = document.getElementById("grid");
let erase = document.getElementById("erase");

function createGrid()
{
    for (let i = 0; i < 16*16; i++)
    {
        let squarez = document.createElement("div");
        grid.appendChild(squarez);
        squarez.classList.add("squares");
    }
}
createGrid();
grid.addEventListener("mouseover", (e) => {e.target.style.backgroundColor = "red";});
erase.addEventListener("click", () => {grid.innerHTML = ""; createGrid();});

