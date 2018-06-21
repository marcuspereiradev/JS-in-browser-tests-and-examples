(function(){
    'use strict';
    
    //Calculando o tempo do for
    console.time('Calculando o tempo do for...');
    for(var x = 0; x < 10000; x++) {
        console.log('Calculando...');
    }
    console.timeEnd('Calculando o tempo do for...');
    
    //Visualizando array de objetos como tabela
    var arr = [
        {item: 'Arroz', preco: 'R$12,00'},
        {item: 'Feijão', preco: 'R$8,00'},
        {item: 'Farinha', preco: 'R$6,00'},
        {item: 'Ovo', preco: 'R$0,50'},
        {item: 'Macarrão', preco: 'R$7,50'}
    ];
    console.table(arr);
})();