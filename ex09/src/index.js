function functionElse(num) {
    if(num <= 5) {
        var result = "5 or smaller";
        return result;
    } else {
        var result = "Bigger than 5";
        return result;
    }
}
console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));
module.exports = functionElse;