// create variables for rows and columns
const rows = 30;
const columns = rows;
const totalNumberOfCells = rows * rows;

// select sketch container and set to a var
let sketchContainer = document.querySelector(".sketch-container");


for(i = 1; i<= (totalNumberOfCells); i++){
    // create div with class of `sketch-cell` 
    let sketchCell = document.createElement("div"); 
    sketchCell.classList.add("sketch-cell");

    //add text and append 
   
    sketchCell.style.border = "1px solid black";
    sketchContainer.appendChild(sketchCell);
}

// Have an evenly distributed and sized grid that fits into the container
sketchContainer.style.gridTemplateColumns = `repeat(${rows},1fr)`



//Make the hover effect by adding event listeners to each of the divs. 
// when someone hovers over any of the `sketch-pieces` it will change the background color