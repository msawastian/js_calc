;(function () {
    'use strict'
    
    var buttons = document.querySelectorAll('.number');
    var display = document.getElementById('display');
    var result = document.getElementById('eval');
    var clear = document.getElementById('clear');

    for(var i = 0, l = buttons.length; i < l; i ++) {
        buttons[i].addEventListener("click", function() {
            display.innerHTML += this.innerHTML;
        })
    }

    result.addEventListener("click", function() {
        display.innerHTML = eval(display.innerHTML);
    })

    clear.addEventListener("click", function() {
        display.innerHTML = '';
    })
})();