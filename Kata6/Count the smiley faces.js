//https://www.codewars.com/kata/583203e6eb35d7980400002a
function countSmileys(arr) {
    return arr.filter((p) => p.match('[:;][-~]?[)D]')).length
}