(function(){
    function myFunction(a,b,c) {
        return 'oi!';    
    }
    // Mostra quantos parâmetros a função pode receber.
    console.log(myFunction.length);
    //toString em uma função retorna toda função como string.
    console.log(myFunction.toString());
    
    function myFunction2(a,b,c,d) {
        console.log(this.lastName,a,b,c,d);    
    }
    var obj = {
        lastName: 'Pereira'
    };
    var obj2 = {
        lastName: 'Santos'
    };
    //call() é o mesmo que charmar a função normalmente "myFunction();" mas se passado um objeto por parâmetro ele será o this da função.
    //Ele também recebe argumentos por parâmetros "call(this, arg, arg)"
    myFunction2.call(obj2,1,2,3,4);
    // Se não precisar chamar o this, pode ser passado a própria função ou null no lugar "myFunction2.call(null,1,2,3,4);"
    
    var arr = [1,2,3,4];
    
    //apply() é parecido com o call(), a diferença é que
    //Com o aplly() é possível chamar um array sendo que ele coloca cada elemento do array em cada argumento.
    //O call() não recebe array.
    myFunction2.apply(obj, arr);
    
    
    //PROTOTYPE
    function MyFunction(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    
    MyFunction.prototype.fullName = function() {
        return this.name + ' ' + this.lastName;
    }
    
    var marcus = new MyFunction('Marcus', 'Pereira');
    
    MyFunction.prototype.age = 31;
    
    console.log(marcus.fullName());
    console.log(marcus.age);
    
    function myFunction3() {
        Array.prototype.forEach.call(arguments, function(item, index) {
            console.log(item);
        });
    }
    myFunction3(1,2,3,4,5,6,7,8);
    
    function myFunction4() {
        var result = Array.prototype.reduce.call(arguments, function(acumulado, atual, index) {
            return acumulado + atual;
        });
        console.log(result);
    }
    myFunction4(1,2,3,4,5,6,7,8);
   
    
})();