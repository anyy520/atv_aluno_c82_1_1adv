//nome das variaveis para manipular
var mouseEvent = "empty";
var lastPositionX, lastPositionY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthLine = 1;
    canvas.addEventListener("mousedown", myMouseDown);
    function myMouseDown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        widthLine = document.getElementById("widthLine").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }
// 1 complete o codigo 
    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {
        //posição  x
        
        PositionMouseY = e.clientY - canvas.offsetTop;
   // 2 se a codição for verdadeira a mouseDown, vai desenhar
        if (mouseEvent == "") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
        }
  // 3 atualize a  lastPositionX = PositionMouseX  e lastPositionY = PositionMouseY
        
        
    }

    canvas.addEventListener("mouseup", myMouseUp);
 //4nomeie dentro da função myMouse(e)  
 //4  mouseEvent = "mouseUP";
    function myMouseUp(e)
    {
       
    }

    canvas.addEventListener("mouseleave", myMouseLeave);
//5 nomeie mouseleave
    function myMouseLeave(e)
    {
        mouseEvent = "";
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
