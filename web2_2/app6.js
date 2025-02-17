var resultado = true && false;
console.log("AND")
console.log("A B R")
console.log("0|"+"0|"+"0|"+"-->"+resultado);
console.log("0|"+"1|"+"0|"+"-->"+resultado);
console.log("1|"+"0|"+"0|"+"-->"+resultado);
var resultado = true && true;
console.log("1|"+"1|"+"0|"+"-->"+ resultado);

var resultado = true ||false;
console.log("OR")
console.log("A B R")
console.log("0|"+"0|"+"0|"+"-->"+ false);
console.log("0|"+"1|"+"1|"+"-->"+resultado);
console.log("1|"+"0|"+"1|"+"-->"+resultado);
console.log("1|"+"1|"+"1|"+"-->"+resultado);

var resultado = true !=false;
console.log("NOT")
console.log("A  R")
console.log("0|"+"-->"+ resultado);
console.log("1|"+"-->"+ false);