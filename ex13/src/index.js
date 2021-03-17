function inverseWhile() {
    var i = 5;
    var fiveNumbers = "";
    var counter = 0;
    while (i <= 5 && i >= 0) {
        fiveNumbers += i.toString();
        i--;
        counter++;
        if(counter < 6) {
            fiveNumbers += ",";
        }
    }
    return fiveNumbers;
}
console.log(inverseWhile());
module.exports=inverseWhile;

