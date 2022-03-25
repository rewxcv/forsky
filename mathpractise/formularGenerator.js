// function formularNumGenerator(formulaGenerators, settings){
//     this.formulaGenerators = formulaGenerators
//     this.settings = settings
// }
// formularNumGenerator.prototype.generate = function (deepth) {
//     if(deepth == 0) return Math.round(Math.random() * Math.pow(10, numOfDig));
//     var formulaGen = null
//     // select a formular
//     var random = Math.random();
//     this.formulaGenerators.forEach((ele)=>{
//         if(random < ele.rate) formulaGen = ele.formula
//         random -= ele.rate
//     })

// }
function getAFormula(rangeMin, rangeMax, numOfDig, mustCarry) {
    while (true) {
        var num1 = Math.round(Math.random() * Math.pow(10, numOfDig));
        var num2 = Math.round(Math.random() * Math.pow(10, numOfDig));
        var isPlus = Math.random( ) > 0.5;
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
        return { nums: [num1, num2], ops: [isPlus ? "+" : "-"], result: result }
        // return num1 + (isPlus ? " + " : " - ") + num2 + " = "
    }
}
function getDivideFormula(firstRange, secondRange, resultRange, canDivide, cannotDivide) {
    while (true) {
        var num1 = Math.round(Math.random() * firstRange);
        var num2 = Math.round(Math.random() * secondRange);

        // 除数不为0
        if (num2 == 0) {
            continue;
        }

        if ((num1 / num2) > resultRange) {
            continue;
        }

        if(canDivide && num1 % num2 != 0){
            continue;
        }
        if(cannotDivide && num1 % num2 == 0){
            continue
        }

        var result = num1 / num2;
        return { nums: [num1, num2], ops: ["÷"], result: result }
    }
}
function toFormulaStr(formula, outterFrontOp, outterBackOp) {

    if (formula.ops) {
        let needQuat = false
        if(outterBackOp == "×" || outterBackOp == "÷"){
            needQuat = formula.ops.includes("+") || formula.ops.includes("-")
        }else if(outterFrontOp == "×"){
            needQuat = formula.ops.includes("+") || formula.ops.includes("-")　
        }else if(outterFrontOp == "÷"){
            needQuat = true
        }else if(outterFrontOp == "-"){
            needQuat = formula.ops.includes("+") || formula.ops.includes("-")
        }
        let resultStr = ""
        if(needQuat) resultStr += "("
        formula.ops.forEach((op, index) => {
            resultStr += toFormulaStr(formula.nums[index])
            resultStr += " " + op + " "
        })
        resultStr += toFormulaStr(formula.nums[formula.nums.length-1])
        if(needQuat) resultStr += ")"
        return resultStr
    } else {
        return formula;
    }
}
function getPyFormula(rangeMax, numOfDig) {
    while (true) {
        var num1 = Math.round(Math.random() * Math.pow(10, numOfDig));
        var num2 = Math.round(Math.random() * Math.pow(10, numOfDig));
        var isPy = Math.random() > 0.5;
        if (num1 == 0 || num2 == 0) {
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
        if (!isPy && num2 == 0) {
            continue;
        }
        var result = isPy ? num1 * num2 : num1 / num2;
        return { nums: [num1, num2], ops: [isPy ? "×" : "÷"], result: result }
        return num1 + (isPy ? "×" : "÷") + num2 + " = "
    }
}
module.exports = { getAFormula, getPyFormula }