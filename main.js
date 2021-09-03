var mouseEvent="";
var last_postion_of_x;
var last_postion_of_y;

canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

    color=document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;

    mouseEvent="mousedown"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

    current_postion_of_x=e.clientX - canvas.offsetLeft;
    current_postion_of_y=e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown" ){
        ctx.strokeStyle=color;
        ctx.lineWidth= width_of_line;

        console.log("last postion of x and y cordinates =");
        console.log("x="+ last_postion_of_x + "y= " +  last_postion_of_y);
        //ctx.moveTo(last_postion_of_x, last_postion_of_y);
        //console.log("current postion of x and y cordinates =");
        //console.log("x="+ current_postion_of_x+ "y= " + current_postion_of_y);
        //ctx.lineTo(current_postion_of_x, current_postion_of_y );
        ctx.arc(current_postion_of_x, current_postion_of_y, 20, 0, 2*Math.PI);
        ctx.stroke();
    }

    //last_postion_of_x= current_postion_of_x;
    //last_postion_of_y = current_postion_of_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


