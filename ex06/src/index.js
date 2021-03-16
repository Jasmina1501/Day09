function comparisonToEqual(a) {
    if (a >= 0 && a < 5) {
        return "Less than 5";
    }
    else if (a >= 5 && a < 10) {
        return "Less than 10";
    }
    else if (a >=10 && a <= 20) {
        return "10 or over";
    }
    else {
        return "More than 20";
    }

}
console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));
module.exports=comparisonToEqual;