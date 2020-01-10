//etchasketch.js
//all the JS logic for the etch-a-sketch board
//Made with <3 by Shrey Ravi

//constants
const screenWidth = 352.0; //the fixed width/height of the grid
let dimensions = 16; //meaning a 16x16 grid
let gridLinesChecked = true;
let color = 'black';
let isMouseDown = false;

//helper method to draw a blank grid, takes in screenWidth and dimensions
function draw(dim, wid) {
    console.log("draw called with " + dim.toString() + " dimensions and " + wid.toString() + " screen width.");
    let widthOfSquares = Math.floor(wid / dim);
    console.log("width of squares are " + widthOfSquares.toString());
    document.getElementById("heading").innerHTML = "Shrey's Etch-A-Sketch ("+ dim.toString() + "x" + dim.toString() + ")";
    document.getElementById("board").style.gridTemplateColumns = 'repeat(${dim}, 1fr)';
    document.getElementById("board").style.gridTemplateRows = 'repeat(${dim}, 1fr)';
    document.getElementById("board").style.padding = '0px';
    document.getElementById("board").style.margin = '0px';
    if (gridLinesChecked) {
        document.getElementById("board").style.border = "0px black solid";
    }
    else {
        document.getElementById("board").style.border = "1px black solid";
    }
    var inner_iter;
    var outer_iter;
    var wrapperDiv;
    for (outer_iter = 0; outer_iter < dim; outer_iter++) {
        wrapperDiv = document.createElement("div");
        wrapperDiv.style.display = 'flex';
        wrapperDiv.style.flexDirection = 'row';
        wrapperDiv.style.margin = '0px';
        wrapperDiv.style.padding = '0px';
        wrapperDiv.style.maxWidth = '352px';
        for (inner_iter = 0; inner_iter < dim; inner_iter++) {
            let newDiv = document.createElement("div");
            newDiv.style.width = widthOfSquares.toString() + "px";
            newDiv.style.height = widthOfSquares.toString() + "px";
            newDiv.addEventListener("mouseover", function(){colorTile(newDiv)}, false);
            if (gridLinesChecked)
                newDiv.style.border = '0.1px black solid';
            newDiv.style.margin = '0px';
            newDiv.style.padding = '0px';
            wrapperDiv.appendChild(newDiv);
        }
        document.getElementById("board").appendChild(wrapperDiv);
    }
}

//helper function to generate a random color
function getRandColor(possibleChars) {
    let color = "#";
    var iter;
    for (iter = 0; iter < 6; iter++) {
        color += possibleChars[Math.floor(Math.random() * 16)];
    }
    return color;
}

//function to color each div when clicked
function colorTile(tileToColor) {
    console.log("coloring happening with tile " + tileToColor.toString());
    if (!isMouseDown){
        return;
    }
    if (color === "black") {
        tileToColor.style.background = "black";
    }
    else if (color === "gradient") {

    }
    else if (color === "random") {
        tileToColor.style.background = getRandColor("0123456789ABCDEF");
    }
    else {
        console.log("error: incorrect color setting");
    }
}

//called when the etch-a-sketch is first loaded
function startup() {
    console.log("startup called");
    document.body.addEventListener("mousedown", function() {isMouseDown = true;}, false);
    document.body.addEventListener("mouseup", function() {isMouseDown = false;}, false);
    document.getElementById("board").innerHTML = "";
    draw(dimensions, screenWidth);
}

//called when the resize button is clicked
function resize() {
    console.log("resize called");
    let newDim = prompt("Please enter the new dimensions (X by X grid, max 352): ");
    if (parseInt(newDim) > 352) {
        alert("Sorry, maximum dimensions are 352!");
        dimensions = 352;
    }
    else if (newDim === null) {
        alert("Error: incorrect or blank input!");
        return;
    }
    else {
        dimensions = parseInt(newDim);
    }
    document.getElementById("board").innerHTML = "";
    draw(dimensions, screenWidth);
}

//called when the clear button is clicked
function clearScreen() {
    console.log("clear called");
    document.getElementById("board").innerHTML = "";
    draw(dimensions, screenWidth);
}

//called when the color select is manipulated
function colorChange() {
    const currColor = document.getElementById("color-select").value;
    console.log("color change called with " + currColor);
    color = currColor;
}

//called when the grid lines checkbox is changed
function gridLinesChange() {
    gridLinesChecked = document.getElementById("grid-lines-checkbox").checked;
    console.log("grid lines changed checkbox changed to: " + gridLinesChecked);
    document.getElementById("board").innerHTML = "";
    draw(dimensions, screenWidth);
}