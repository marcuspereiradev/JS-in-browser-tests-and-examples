(function(win, doc) {
    'use strict';
/*
    console.log('Início');
    win.setTimeout(function(){
        console.log('Carregou o setTimeout');    
    },3000);
    console.log('Fim');
})(window, document);
*/

/*
    console.log('Início');
    win.setInterval(function(){
        console.log('Carregou o setInterval');    
    },3000);
    console.log('Fim');
*/

    /*
    //Função recursiva é quando chama uma função dentro da outra. Função time sendo chamado no setTimeout
    var counter = 0;
    function time() {
        console.log('Time: ', counter++);
        //Este if indica quando o setTimeout deve parar.
        if(counter > 10)
            return;
        win.setTimeout(time, 1000);
    }
    time();
    */
    
    /*
    //clearTimeout
    var counter = 0;
    var $button = doc.querySelector('[data-qualquercoisa="button"]');
    var temporizador;
    
    function time() {
        console.log('Time:', counter++);
        if(counter > 20)
            return;
        temporizador = win.setTimeout(time, 1000);
    }
    time();
    
    $button.addEventListener('click', function() {
        win.clearTimeout(temporizador);
    }, false);
    */
    
    //clearInterval
    var counter = 0;
    var $button = doc.querySelector('[data-qualquercoisa="button"]');
    var temporizador;
    
    function time() {
        console.log('Time:', counter++);
    }
    temporizador = win.setInterval(time, 1000);
    
    $button.addEventListener('click', function() {
        clearInterval(temporizador);
    }, false);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})(window, document);