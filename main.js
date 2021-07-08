var mousuevent = "empty";
var last_position_of_y,last_position_of_x; 

canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

color = "white";
width_of_line = 2 ;

canvas.addEventListener("mousedown",mymd);

function mymd(e) {mouseEvent = "mousedown";}
canvas.addEventListener("mousemove",mym);
function mym(e) {

mouse_x = e.clientX - canvas.offtsetLeft;
mouse_y = e.clientY - canvas.offtsetTop;

if (mouseEvent == "mousedown") {
    ctx.beginPath();
    
    ctx.strokeStyle = color;
    
    ctx.lineWidth = width_of_line;
    
    console.log("Last position of x and y coordinates = ");
    
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    
    ctx.moveTo(last_position_of_x,  last_position_of_y);
    
    console.log("Current position of x and y coordinates = ");
   
    console.log("x = " + mouse_x + "y = " + mouse_y);
    
    ctx.lineTo(mouse_x, mouse_y); ctx.stroke(); }
     
    last_position_of_x = mouse_x;
    
    last_position_of_y = mouse_y;
}

canvas.addEventListener("mouseup",mymup);
function mymup(e) {mouseEvent = "mouseup";}

canvas.addEventListener("mouseleave",myml);
function myml(e) {mouseEvent = "mouseleave";}