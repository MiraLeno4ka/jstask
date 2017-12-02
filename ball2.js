function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.strokeColor = "black";
    this.fillColor = "red";
}
var circles = [];
var circle = new Circle(50, 50, 1, 1, 20);
for (i = 0; i < 5; i++) {
	var arr = circles.push(circle);
    return arr;
} console.log(circles);
window.onload = function() {
    // Определение контекста рисования
    canvas = document.getElementById("drawingCanvas");
    circle = canvas.getContext("2d");

    // Обновляем холст через 0.02 секунды
    setTimeout("drawFrame()", 20);
}

function drawFrame() {
    circle.clearRect(0, 0, canvas.width, canvas.height);
    circle.beginPath();
    for (var i = 0; i < circles.length; i++) {
        // Перемещаем каждый мячик в его новую позицию
        var circle = circles[i];
        circle.x += circle.dx;
        circle.y += circle.dy;

        circle.arc(circle.x, circle.y, 20, 0, Math.PI * 2);
        circle.fillStyle = 'red';
        circle.fill();
        circle.fillStyle = 'yellow';
        circle.fillText(rand, x, 50);
        circle.lineWidth = 1;
        circle.strokeStyle = 'green';
        circle.stroke();

        setTimeout("drawFrame()", 20);
    }