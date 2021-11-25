function getAFormula(rangeMin, rangeMax, numOfDig, mustCarry) {
    while (true) {
        var num1 = Math.round(Math.random() * Math.pow(10, numOfDig));
        var num2 = Math.round(Math.random() * Math.pow(10, numOfDig));
        var isPlus = Math.random() > 0.5;  
        // if(isPlus)continue;
        if (num1 < Math.pow(10, numOfDig - 1) && num2 < Math.pow(10, numOfDig - 1)) {
            continue;
        }
        if (isPlus && (num1 + num2) >= rangeMax) {
            continue;
        }
        if (num1 < num2) {
            var temp = num2;
            num2 = num1
            num1 = temp
        }
        if (!isPlus && (num1 - num2) <= rangeMin) {
            continue;
        }
        result = isPlus ? (num1 + num2) : (num1 - num2);
        if (mustCarry && Math.ceil(result / 10) == Math.ceil(num1 / 10)) {
          continue;
        }
        return num1 + (isPlus ? " + " : " - ") + num2 + " = "
    }
}
function getPyFormula(rangeMax, numOfDig, mustCarry) {
    while (true) {
        var num1 = Math.round(Math.random() * Math.pow(10, numOfDig));
        var num2 = Math.round(Math.random() * Math.pow(10, numOfDig));
        var isPy = Math.random() > 0.5;
        if(num1 == 0 || num2 == 0) {
            continue;
        }
        // if(isPlus)continue;
        if (num1 < Math.pow(10, numOfDig - 1) && num2 < Math.pow(10, numOfDig - 1)) {
            continue;
        }
        if ((num1 * num2) >= rangeMax) {
            continue;
        }
        if (!isPy) {
            num1 = num1 * num2
        }
        // 除数不为0
        if (!isPy && num2 == 0){
            continue;
        }
        return num1 + (isPy ? " × " : " ÷ ") + num2 + " = "
    }
}
module.exports = {getAFormula, getPyFormula}