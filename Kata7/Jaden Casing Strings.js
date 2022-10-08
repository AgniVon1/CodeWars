//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
function test(str) {
    str =  str.split(' ').map((str) =>str[0].toUpperCase() +str.substring(1));
    return str.join(" ")
};
String.prototype.toJadenCase = function () {
    return  this.split(' ').map(function(str) { return  str[0].toUpperCase() + str.substring(1);}).join(" ");
};


let str = "How can mirrors be real if our eyes aren't real";
console.log(test(str))
console.log(str.toJadenCase() )