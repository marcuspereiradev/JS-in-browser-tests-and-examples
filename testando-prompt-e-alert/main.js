(function(win, doc){
    'use strict';
    /*
    if(prompt("Pergunta?"))
        console.log('resposta ok!');
    else
    console.log('Sem resposta!');
    */
    
    /*
    var name = prompt("Qual o seu nome?");
    if(name)
        console.log("Olá, ", name);
    else
        console.log("Não respondeu =(");
    */
    
    /*
    var del = confirm("Deseja excluir?");
    if(del)
        console.log("Excluído com sucesso", del);
    else
        console.log("Ação cancelada", del);
    */
    /*
    console.log(doc.getElementById('my-link'));
    
    console.log(doc.getElementsByClassName('my-link'));
    
    console.log(doc.getElementsByTagName('p'));
    
    console.log(doc.getElementsByName('nome'));
    
    console.log(doc.querySelector('#my-link'));
    console.log(doc.querySelectorAll('[type="text"]'));
    */
    
    /*
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    
    $inputUsername.value = 'Marcus Pereira';
    $inputPassword.value = 'minhasenha';
    console.log($inputPassword.value, $inputUsername.value);
    */
    
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');
    
    $button.addEventListener('click', function(event) {
        event.preventDefault();    
        console.log('Fui clicado');
    }, false);
    
    $inputUsername.addEventListener('click', function(event) {
        alert('Clicou no input username');
    }, false); 
})(window, document);