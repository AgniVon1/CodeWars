function towerBuilder(nFloors) {
    let out = [];
    for (var i = 0;i < nFloors;i++){
        out.push(" ".repeat(nFloors - i - 1)
            +"*".repeat( i * 2 + 1)
            + " ".repeat(nFloors - i - 1))
    }
    return out;
}