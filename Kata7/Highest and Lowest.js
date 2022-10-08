//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    let num = [];
    numbers.split(' ').map((p) => num.push(parseInt(p)));
    return num.reduce((a, b) => a > b ? a : b) +" "+
        num.reduce((a, b) => a < b ? a : b);
}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))// "42 -9"