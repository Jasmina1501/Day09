function inverseWhile() {
    var i = 5;
    var fiveNumbers = "";
    while (i <= 5 && i >= 0) {
        fiveNumbers += i.toString();
        i--;
    }
    return fiveNumbers;
}
console.log(inverseWhile());
module.exports=inverseWhile;
