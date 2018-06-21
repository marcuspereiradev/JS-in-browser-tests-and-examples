(function() {
    'use strict';
    
    // parentNode trás p pai a partir do nó em que você está.
    //no caso estamos na classe main e seu pai é o body.
    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $firstText = $mainContent.firstChild;
    var $h1 = $mainHeader.firstElementChild;
    var $mainFooter = document.querySelector('.main-footer');
    console.log($main.parentNode);
    
    //childNodes retorna os filhos incluse as quebras de linha
    //não só as tags. Para vir a tag tem que tirar o espaço
    console.log($main.childNodes);
    //Retorna o primeiro filho inclusive os espaços (#text).
    console.log($main.firstChild);
    //Retorna o último filho inclusive os espaços (#text).
    console.log($main.lastChild);
    //Retorna o irmão inclusive os espaços.
    console.log($main.nextSibling);
    //Retorna o irmão anterior inclusive os espaços
    //Como o mains não tem irmão nesse exemplo, ele não retorna nada se retirado os espaços.
    console.log($main.previousSibling);
    //Retorna um número baseado no tipo daquele nó.
    console.log($main.nodeType);
    //Retorna o conteúdo textual de text e comment.
    console.log($mainContent.firstChild.nodeValue);
    //Retorna o nome do nó
    console.log($main.nodeName);
    
    
    // ELEMENTOS QUE SÓ TRAZEM NÓS QUE SÃO ELEMENTOS(TAG) DO DOM
    
    //Retorna somente os nós que são elementos html.
    console.log($main.children);
    //Retorna o primeiro filho html.
    console.log($main.firstElementChild);
    //Retorna o ultimo filho html
    console.log($main.lastElementChild);
    //Retorna o próximo irmão.
    console.log($main.nextElementSibling);
    //Retorna a quantidade de elementos html que tem. 
    //Parecido com o child.lenght
    console.log($main.childElementCount);
    
    //MÉTODOS
    
    //Retorna um boolean de acordo com atributo passado
    //retornando true se ele existe e false se não.
    console.log($main.hasAttribute('class'));
    //Retorna um boolean se existir qualquer atributo.
    //retornando true se existir e false se não.
    console.log($main.hasAttributes());
    //Acrescenta um elemento passaado por parâmetro como filho
    $mainContent.appendChild($mainHeader);
    // Insere o elemento antes de alguma tag. Recebe dois parâmetros
    // no primeiro o elemento a ser inserido e o segundo é o "antes de quem"
    $mainContent.insertBefore($mainHeader, $firstText);
    //Clona um nó
    var $cloneMainHeader = $mainHeader.cloneNode(true);
    $mainContent.appendChild($cloneMainHeader);
    console.log(document.querySelectorAll('.main-header').lenght);
    // Retorna um boolean caso o elemento tenha um nó de texto ou não.
    console.log($h1.hasChildNodes());
    //Remove um filho
    $mainContent.removeChild($cloneMainHeader);
    //Substitui um filho por outro. Primeiro parâmetro é o substituto e o sugundo o substituído.
    $main.replaceChild($cloneMainHeader, $mainFooter);
    //Cria um no de texto. É um método de document
    var $newText = document.createTextNode('Olá!');
    $main.appendChild($newText);
    //cria uma nova tag
    var $newP = document.createElement('p');
    $newP.appendChild($newText);
    $main.appendChild($newP);
    
    
    //ATRIBUTOS
    //Retorna o nome da id.
    //É possível setar um novo nome para id ou class.
    //$main.id = 'arroz'
    //$main.className = 'feijao'
    console.log($main.id);
    //Retorna o nome da classe
    console.log($main.className);
    //Retorna qualquer um dos nomes. Sempre retorna string
    console.log($main.getAttribute('class'));
    console.log($main.getAttribute('id'));
    //Serve tanto prara setar um novo nome a um atributo
    //quanto criá-lo. .setAttribute('atributo', 'valor')
    $main.setAttribute('data-js', 'main-datajs');
   
    
})();