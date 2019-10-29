var canvas, context;

function init() {

    canvas = document.getElementById('mycanvas');

    if (canvas.getContext) {
        context = canvas.getContext('2d');
    }

    if (context) {
        canvas.addEventListener('mousedown', mouse_down, false);
        canvas.addEventListener('mousemove', mouse_move, false);
        window.addEventListener('mouseup', mouse_up, false);
    }
}

//decides when to draw and when to erase
var mark=1;

function check(val) {
    if(val == 1) {
        mark=1;
    }
    else if(val == 0){
        mark=0;
    }
}
// Variables to keep track of the mouse position and left-button status 
var mouseX, mouseY, mouseDown = 0;

//Draws a dot at specified position
function drawDot(x, y, size) {
    // Select a fill style
    if(mark == 1) {
        context.fillStyle="red";
    }
    else {
        context.fillStyle="white";
    }

    // Draw a filled circle
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
}

// Clear the canvas context using the canvas width and height
function clear_board() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    mark=1;
}

// Keep track of the mouse button being pressed and draw a dot at current location
function mouse_down() {
    mouseDown = 1;
    drawDot(mouseX, mouseY, 5);
}

// Keep track of the mouse button being released
function mouse_up() {
    mouseDown = 0;
}

// Keep track of the mouse position and draw a dot if mouse button is currently pressed
function mouse_move(e) {
    // Update the mouse co-ordinates when moved
    getMousePosn(e);

    // Draw a dot if the mouse button is currently being pressed
    if (mouseDown == 1) {
        drawDot(mouseX, mouseY, 5);
    }
}

// Get the current mouse position relative to the top-left of the canvas
function getMousePosn(e) {
    if (!e)
        var e = event;

    //offset is supported in some browsers
    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    //layerX is supported in some other browsers
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
}
