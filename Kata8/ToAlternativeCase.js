
String.prototype.toAlternatingCase = function () {
    return this.split('').map((leter) => (leter.charCodeAt(0) >= 65 && leter.charCodeAt(0) <= 90) ? leter.toLowerCase() : leter.toUpperCase()).join("")
}

String.prototype.toAlternatingCase = function () {
    new_str = "";
    for(var i = 0; i < this.length; i++) {
        if(this[i] === this[i].toUpperCase()) {
            new_str += this[i].toLowerCase();
        }
        else {
            new_str += this[i].toUpperCase();
        }
    }
    return new_str;
}

String.prototype.toAlternatingCase = function () {
    return this.replace(/./g, function (match) {
        return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log("TEst".toAlternatingCase())
