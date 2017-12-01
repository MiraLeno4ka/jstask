var arr = [];

document.getElementById('generate').onclick = function() {
    var count = document.getElementById("input");
    var val = count.value;
    if (val > 2 && val <= 100) {
        var x = 50;
        arr = [];
        for (var i = 1; i <= val; i++) {
            var circle = document.getElementById("circle").getContext("2d");
            var rand = Math.floor(Math.random() * 101);
            circle.beginPath();
            //center=(50,50) radius=20 angle=0 to 2P

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

function drawCircles(sortArr) {
    var count = document.getElementById("input");
    var val = count.value;
    var x = 50;

    for (var i = 0; i < val; i++) {
        var circle = document.getElementById("circle").getContext("2d");

        circle.beginPath();
        //center=(50,50) radius=20 angle=0 to 2P

        circle.arc(x, 300, 20, 0, 2 * Math.PI);
        circle.fillStyle = 'red';
        circle.fill();
        circle.fillStyle = 'black';
        circle.fillText(arr[i], x, 300);
        circle.lineWidth = 1;
        circle.strokeStyle = 'green';
        circle.stroke();
        x += 50;
    }
}
    document.getElementById('quicksort').onclick = function() {
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
    }