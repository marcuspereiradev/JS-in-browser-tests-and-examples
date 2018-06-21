(function() {
    "use strict";
    var name = "Marcus Pereira";
    console.log(name);
})();
// A diretiva "use strict" não permite declaração de variável sem o var.

(function() {
    var obj = {
        propriedade1: {
            propriedade2: {
                propriedade3: {
                    propriedade31: "propriedade31",
                    propriedade32: "propriedade32",
                    propriedade33: "propriedade33"
                }
            }
        }
    };
    //console.log(obj.propriedade1.propriedade2.propriedade3);
    // Para não ter que usar isso tudo " console.log(obj.propriedade1.propriedade2.propriedade3); " usa-se a instrução with
    with(obj.propriedade1.propriedade2.propriedade3) {
        console.log(propriedade31, propriedade32,propriedade33);
    }
})();