;(function () {
    'use strict'
    
    var buttons = document.querySelectorAll('button');
    var display = document.getElementById('display');
   
    alert(buttons.length);

    for(var i = 0, l = buttons.length; i < l; i ++) {
        buttons[i].addEventListener("click", function() {
            display.innerHTML = this.innerHTML;
        })
    }
})();