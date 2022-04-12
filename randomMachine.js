var num1 = document.getElementById('num-1');
var num2 = document.getElementById('num-2');
var num3 = document.getElementById('num-3');

var start_input = document.getElementById('start-input');
var stop_input = document.getElementById('stop-input');

var start = document.getElementById('start-btn');
var stop = document.getElementById('stop-btn');

var check = false;

start.addEventListener('click', function () {
    if (stop_input.value > 999 || stop_input.value <= start_input.value) stop_input.value = 999;
    if (start_input.value < 0 || stop_input.value <= start_input.value) start_input.value = 0;

    var result = Math.floor(Math.random() * (parseInt(stop_input.value) + 1 - start_input.value) + start_input.value);
    if (!check) {
        var k = setInterval(function () {
            num1.innerHTML = Math.floor(Math.random() * 10);
            num2.innerHTML = Math.floor(Math.random() * 10);
            num3.innerHTML = Math.floor(Math.random() * 10);
        }, 30)
        stop.onclick = function () {
            clearInterval(k);
            num1.innerHTML = parseInt(result / 100 % 10);
            num2.innerHTML = parseInt(result / 10 % 10);
            num3.innerHTML = parseInt(result % 10);
            check = false;
        };
    }
    check = true;

});