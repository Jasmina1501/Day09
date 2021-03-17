function myForLoop1() {
    var evenNumbers = "";
    var counter = 0;
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
        evenNumbers += i.toString();
        counter++;
        if (counter < 5 && counter > 0) {
            evenNumbers += ", ";
            }
        }
    }
    return evenNumbers;
}
function myForLoop2() {
    var evenInverseNumbers = "";
    var counter = 0;
    for (var i = 9; i >= 0; i--) {
        if (i % 2 === 0) {
        evenInverseNumbers += i.toString();
        counter++;
        if (counter < 5 && counter > 0) {
            evenInverseNumbers += ", ";
            }
        }
    }
    return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());
module.exports = {
    myForLoop1,
    myForLoop2
};