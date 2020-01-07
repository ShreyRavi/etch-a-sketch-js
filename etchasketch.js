//etchasketch.js
//all the JS logic for the etch-a-sketch board
//Made with <3 by Shrey Ravi

//constants
const screenWidth = 352.0; //the fixed width/height of the grid
let dimensions = 2; //meaning a 16x16 grid

//helper method to draw a blank grid, takes in screenWidth and dimensions
function draw(dim, wid) {
    console.log("draw called with " + dim.toString() + " dimensions and " + wid.toString() + " screen width.");
    let widthOfSquares = Math.floor(wid / dim);
    console.log("width of squares are " + widthOfSquares.toString());
    var inner_iter;
    var outer_iter;
    var wrapperDiv;
    for (outer_iter = 0; outer_iter < dim; outer_iter++) {
        wrapperDiv = document.createElement("div");
        wrapperDiv.style.display = "flex";
        wrapperDiv.style.flexDirection = "row";
        wrapperDiv.style.alignItems = "stretch";
        wrapperDiv.style.alignContent = "stretch";
        wrapperDiv.style.flex = "1";
        for (inner_iter = 0; inner_iter < dim; inner_iter++) {
            let newDiv = document.createElement("div");
            //newDiv.style.width = widthOfSquares.toString() + "px";
            //newDiv.style.height = widthOfSquares.toString() + "px";
            newDiv.style.flex = "1";
            newDiv.style.border = "solid 1px";
            newDiv.style.margin = "0px";
            newDiv.style.padding = "0px";
            wrapperDiv.appendChild(newDiv);
        }
        document.getElementById("board").appendChild(wrapperDiv);
    }
}

//called when the etch-a-sketch is first loaded
function startup() {
    console.log("startup called");
    draw(dimensions, screenWidth);
}

//called when the resize button is clicked
function resize() {
    console.log("resize called");
}

//called when the clear button is clicked
function clearScreen() {
    console.log("clear called");
}

//called when the color select is manipulated
function colorChange() {
    const currColor = document.getElementById("color-select").value;
    console.log("color change called with " + currColor);
}