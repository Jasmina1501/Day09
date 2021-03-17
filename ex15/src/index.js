function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    var counter = 0;
    do {
        myNumbers += i.toString()
        i++;
        counter++;
        if (counter < 10) {
            myNumbers += ", "
        }
    } while(i < 10);
    return myNumbers;
}
console.log(myDoWhile());
module.exports = myDoWhile;