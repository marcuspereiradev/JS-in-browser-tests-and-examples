(function() {
    'use strict';
    
    function on(element, event, callback) {
        document.querySelector(element)
        .addEventListener(event, callback, false);
    }
    
    on('[data-js="link"]', 'click', function(event) {
        event.preventDefault();
        alert('Clicou no a');
    });
    
    on('[data-js="div"]', 'click', function() {
        alert('clicou na div');
    });
    
    on('[data-js="span"]', 'click', function() {
        alert('clicou no span');
    });
})();