//console.log(String.fromCharCode(65));
//console.log(String.fromCharCode(90));
//console.log(String.fromCharCode(97));
//console.log(String.fromCharCode(122));

var numberCodeA = 65;
var numberCodeZ = 90;
while(numberCodeA <= numberCodeZ) {
    console.log(String.fromCharCode(numberCodeA));
    numberCodeA++;
}


for(var numberCodeA = 97, numberCodeZ = 122; numberCodeA <= numberCodeZ; numberCodeA++) {
    console.log(String.fromCharCode(numberCodeA));
}