;(function () {
    'use strict';
    
    var buttons = document.querySelectorAll('.number');
    var display = document.getElementById('display');
    var result = document.getElementById('eval');
    var clear = document.getElementById('clear');
    var memoryPlus = document.getElementById('memPlus');
    var memoryMinus = document.getElementById('memMinus');
    var memoryDisplay = document.getElementById('memDisp');
    var memoryClear = document.getElementById('memClear');
    var memory = 0;

    for(var i = 0, l = buttons.length; i < l; i ++) {
        buttons[i].addEventListener('click', function() {
            display.innerHTML += this.innerHTML;
        })
    }

    result.addEventListener('click', function() {
        display.innerHTML = eval(display.innerHTML);
    });

    clear.addEventListener('click', function() {
        display.innerHTML = '';
    });

    memoryPlus.addEventListener('click', function() {
        memory = memory + parseInt(display.innerHTML);
    });

    memoryMinus.addEventListener('click', function() {
        memory = memory - parseInt(display.innerHTML);
    });

    memoryDisplay.addEventListener('click', function() {
        display.innerHTML = memory;
    });

    memoryClear.addEventListener('click', function() {
        memory = 0;
        display.innerHTML = '';
    });

})();