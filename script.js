//grid to originally start with
generateGrid();

acitvateSketch();

activateBtnClear();

acitvateBtnResize();




function acitvateBtnResize(){
    const button = document.querySelector(".resize")

    button.addEventListener('click',() => {
        const cellsToRemove = document.querySelectorAll(".sketch-cell");
        cellsToRemove.forEach((cell) => {
            cell.remove();
        })


        userInput = Number(prompt("Enter the size of your grid. ie. enter '3' for a 3x3 grid "));
        generateGrid(userInput);
        acitvateSketch();
        activateBtnClear();
    });

    
}


function activateBtnClear(){
    const button = document.querySelector(".clear")
    const cells = document.querySelectorAll(".sketch-cell")
    button.addEventListener("click", () => {
        cells.forEach((cell) => {
            cell.style.backgroundColor = null;
        });
    })
}
//Make the hover effect by adding event listeners to each of the divs. 
// when someone hovers over any of the `sketch-pieces` it will change the background color
function acitvateSketch(color="black"){
    const cells = document.querySelectorAll(".sketch-cell");

cells.forEach((cell) => {
    cell.addEventListener("mouseover",function (){
        cell.style.backgroundColor = color;
    });
});
}


function generateGrid(rows=16){

    const columns = rows;
    const totalNumberOfCells = rows * rows;

    // select sketch container and set to a var
    let sketchContainer = document.querySelector(".sketch-container");

    for(i = 1; i<= (totalNumberOfCells); i++){
        let sketchCell = document.createElement("div"); 
        sketchCell.classList.add("sketch-cell");
        sketchCell.style.border = "1px solid black";
        sketchContainer.appendChild(sketchCell);
    }

    // add style for an evenly distributed and sized grid that fits into the container
    sketchContainer.style.gridTemplateColumns = `repeat(${rows},1fr)`
}






