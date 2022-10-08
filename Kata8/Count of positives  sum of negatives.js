//codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
    if  (input === null || input.length === 0){
        return [];
    }
    else{
        var answer =[0,0];
        for(let buff of input){
            if (buff > 0)
            {answer[0]+=1;}
            else
            {answer[1] +=buff;}
        }
        return answer;
    }
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))