//codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
    var answer =[0,0];
    for(let buff of input){
        answer[(buff > 0)? 0:1] +=buff;
    }
    return answer;
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))