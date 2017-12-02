var a = document.getElementById("canvas").getContext("2d");

setTimeout("drawFrame()", 20);
var positionx = 30;
var positiony = 30;

function drawFrame() {
    a.clearRect(0, 0, canvas.width, canvas.height);
    a.beginPath();
    a.arc(positionx, positiony, 40, 0, 2 * Math.PI);
    a.stroke();
    positionx += 2;
    positiony += 1;
    setTimeout("drawFrame()", 20);

}

/*a.moveTo(10,10);
a.lineTo(30,50);
a.stroke();

a.beginPath();
a.arc(95,50,40,0,2*Math.PI);
a.stroke();

a.font = "30px Arial";
a.fillText("Hello!",90,150);
a.strokeText("Hi!",100,180);*/
/*
var grd = a.createLinearGradient(0,0,200,150);
grd.addColorStop(0,"green");
grd.addColorStop(1,"blue");

a.fillStyle = grd;
a.fillRect(30,30,150,80);*/