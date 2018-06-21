(function(win, doc) {
    'use strict';
    
//    function afterDomContentLoaded() {
//        alert('afterDomContentLoaded');
//        var fragment = doc.createDocumentFragment();
//        var childP = doc.createElement('p');
//        var textChildP = doc.createTextNode('Eu sou um texto da tag p!');
//
//        childP.appendChild(textChildP);
//        fragment.appendChild(childP);
//
//        doc.body.appendChild(fragment);
//    }
//    
//    function afterWindowLoad() {
//        alert('afterWindowLoad');
//    }
//    //O evento DOMContentLoaded ativa antes de carregar a página.
//    doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);
//    
//    //O evento load ativa depois que tudo no window estiver carregado.
//    win.addEventListener('load', afterWindowLoad, false);
    
    
    
    
    //MAIS EXMPLOS. COPIA DE ARRAYS, LEMENTOS DO DOM E OUTROS
    
    //A copia do array pode ser feita com slice e map
    var arr = [1,2,3,4,5,6,7,8,9,10];
    var arr2 = arr.slice();
    console.log(arr, arr2, arr === arr2);
    
    var arr3 = arr.map(function(item) {
        return item;
    });
    console.log(arr, arr3, arr === arr3);
    
    //Copiando um elemento do dom
    var $divs = document.querySelector('div');
    var $copyDivs = Array.prototype.slice.call($divs);
    console.log($divs, $copyDivs, $divs === $copyDivs);
    
    //Verificando o tipo do objeto sem o typeof
    var arr4 = [1,2,3];
    console.log(Object.prototype.toString.call(arr4));
    
    function myFunction() {}
    console.log(Object.prototype.toString.call(myFunction));
    
    function myFunction2() {
       console.log(Object.prototype.toString.call(arguments));
    }
    myFunction2();
    
    //mini verificador de tipo
    function is(obj) {
        return Object.prototype.toString.call(obj);
    }
    console.log(is([1,2,3]));
    console.log(is(function(){}));
    
})(window, document);