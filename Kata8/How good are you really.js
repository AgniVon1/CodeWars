
//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
    return (yourPoints > (classPoints.reduce((sum, num)=> sum + num ,0)/classPoints.length))
}
console.log(betterThanAverage([2, 3], 5))
