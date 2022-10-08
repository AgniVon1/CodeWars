//https://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr){
    //coding here...
    var min = arr[0].length;
    for ( var str of arr){
        if (min > str.length)
            min = str.length;
    }

    for ( var i = 0 ; i < arr.length; i++){
        arr[i] = arr[i].substring(0,min);
    }
    return arr;
}
console.log((["ab","cde","fgh"]))  // should return ["ab","cd","fg"]