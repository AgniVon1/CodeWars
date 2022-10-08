
//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word){
    var result = "";
    word = word.toLowerCase()
    for (char of word) {
        if (word.indexOf(char) !== word.lastIndexOf(char)) {
            result += ")";
        } else
            result += "(";
    }
    return result;
}