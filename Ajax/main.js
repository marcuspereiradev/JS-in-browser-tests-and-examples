(function () {
    //Ubuntu vem com o python instalado, então vc pode servir qualquer direitorio indo no console,
    //indo até o diretório que vc quer servir e rodar python -m SimpleHTTPServer
    //Vai mostrar uma mensagem no console falando que tá ouvindo numa porta, tipo 3000 pode exemplo
    //Aí tu acessa localhost:3000 é teu diretório vai estar lá
    
    'use strict';
    
    var ajax = new XMLHttpRequest();
    ajax.open('GET', '/data/data.json');
    ajax.send();
    
    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function() {
        if(isRequestOk) {
            var data = JSON.parse(ajax.responseText);
            console.log('Requisição ok!', data.message);
        }
    }, false);
    
    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();