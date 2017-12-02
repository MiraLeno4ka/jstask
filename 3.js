var arr = [];

document.getElementById('generate').onclick = function() {
    var count = document.getElementById("input");
    var val = count.value;
    if (val > 2 && val <= 100 && Math.ceil(val) - val == 0) {
        var x = 50;
        arr = [];
        for (var i = 1; i <= val; i++) {
            var circle = document.getElementById("canvas").getContext("2d");
            var rand = Math.floor(Math.random() * 101);
            circle.beginPath();
            circle.arc(x, 50, 20, 0, 2 * Math.PI);
            circle.fillStyle = 'red';
            circle.fill();
            circle.fillStyle = 'yellow';
            circle.fillText(rand, x, 50);
            circle.lineWidth = 1;
            circle.strokeStyle = 'green';
            circle.stroke();
            x += 50;

            arr.push(rand);
        }
    } else {
        alert("Введите целое число от 2 до 100");
    }
    console.log(arr);


}
document.getElementById('quicksort').onclick = function() {
        function Circle(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.strokeColor = "black";
            this.fillColor = "red";
            // this.text = arr[i];
            var circles = [];

            function addCircles() {
                var count = document.getElementById("input");
                var val = count.value;
                var circle = new Circle(posx, 50, 1, 1, 20)
                for (var i = 0; i < val; i++) {
                    circles.push(circle);
                    posx += 50;
                }
            }

            window.onload = function() {
                // Определение контекста рисования
                canvas = document.getElementById("drawingCanvas");
                context = canvas.getContext("2d");

                // Обновляем холст через 0.02 секунды
                setTimeout("drawFrame()", 20);
            }

            function drawFrame() {
                // Очистить холст
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Вызываем метод beginPath(), чтобы убедиться,
                // что мы не рисуем часть уже нарисованного содержимого холста
                context.beginPath();

                // Перебираем все мячики
                for (var i = 0; i < circles.length; i++) {
                    // Перемещаем каждый мячик в его новую позицию
                    var circle = circles[i];
                    circle.x += circle.dx;
                    circle.y += circle.dy;
                    if ((ball.y) < canvas.height) {
                        ball.dy += 0.22;

                        // Добавляем эффект "трения", который замедляет движение мячика
                        ball.dx = ball.dx * 0.998;
                    } else {
                        context.fillStyle = "white";
                    }
                    // Рисуем мячик
                    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
                    context.lineWidth = 1;
                    context.fill();
                    context.stroke();
                }

                // Рисуем следующий кадр через 20 миллисекунд
                setTimeout("drawFrame()", 20);
            }
        }
    }
        /* document.getElementById('quicksort').onclick = function() {
             arr = QuickSort(arr);
             drawCircles();
             console.log(QuickSort(arr));
         }

         function QuickSort(A) {
             //debugger;
             if (A.length == 0) return [];
             var a = [],
                 b = [],
                 p = A[0];
             for (var i = 1; i < A.length; i++) {
                 if (A[i] < p) {
                     a[a.length] = A[i];
                 } else { b[b.length] = A[i]; }
             }

             var firstArr = QuickSort(a);
             var lastArr = QuickSort(b);
             var A = firstArr.concat(p, lastArr);

             return A;

         }


         document.getElementById('bubblesort').onclick = function() {
             arr = BubbleSort(arr);
             drawCircles();
             console.log(BubbleSort(arr));
         }

         function BubbleSort(A) // A - массив, который нужно
         { // отсортировать по возрастанию.
             var n = A.length;
             for (var i = 0; i < n - 1; i++) {
                 for (var j = 0; j < n - 1 - i; j++) {
                     if (A[j + 1] < A[j]) {
                         var t = A[j + 1];
                         A[j + 1] = A[j];
                         A[j] = t;
                     }
                 }
             }
             return A; // На выходе сортированный по возрастанию массив A.
         }

         document.getElementById('gnomesort').onclick = function() {
             arr = GnomeSort(arr);
             drawCircles();
             console.log(GnomeSort(arr));
         }

         function GnomeSort(A) {
             var n = A.length,
                 i = 1,
                 j = 2;
             while (i < n) {
                 if (A[i - 1] < A[i]) {
                     i = j;
                     j++;
                 } else {
                     var t = A[i - 1];
                     A[i - 1] = A[i];
                     A[i] = t;
                     i--;
                     if (i == 0) {
                         i = j;
                         j++;
                     }
                 }
             }
             return A;
         }*/