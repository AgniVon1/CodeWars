//https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

function int32ToIp(int32){
    if (int32 === 0) return "0.0.0.0"
    int32 =int32.toString(2).padStart(32, '0').split('');
    const res = [];
    while (int32.length > 0) {
        res.push(parseInt(int32.splice(0, 8).join(''), 2));
    }
    return res.join('.');
}