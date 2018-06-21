(function(){
    var name = "Main";
    console.log(name);
})();

(function(){
    var myObject = {
        myProperty: 1,
        init: function(){
        return this.myProperty;
        }
    };
 console.log(myObject.init());
/////////////////////////////////////
    
    function myFunction(){
        return this;
    }
    console.log(myFunction(), myFunction() === window);
    
    var myObject = {
        myProperty: 1,
        init: function(){
        return this;
        }
    };
    console.log(myObject, myObject.init() === myObject);
////////////////////////////////////////
    
    function MyConstructor() {
        this.prop1 = "prop1";
        this.prop2 = "prop2";
    }
    var constructor = new MyConstructor();
    console.log(constructor);
/////////////////////////////////////////////
    
    function myFunction2() {
        return arguments[1];
    }
    console.log(myFunction2(7,19));
})();