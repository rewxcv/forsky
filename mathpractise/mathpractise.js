function getAFormula(rangeMin, rangeMax,  numOfDig) {
    while (true) {
        var num1 = Math.round(Math.random() * Math.pow(10,numOfDig));
        var num2 = Math.round(Math.random() * Math.pow(10,numOfDig));
        var isPlus = Math.random() > 0.5;
        if(isPlus)continue;
        if (num1 < Math.pow(10, numOfDig-1) && num2 < Math.pow(10, numOfDig-1)) {
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
        return num1 + (isPlus ? " + " : " - ") + num2 + " = "
    }
}

var count = 0;
var result = []
while (count < 60) {
    result.push(getAFormula(0, 100, 2))
    count++
}
var resultStr = "";
result.forEach((item, index)=>{
    resultStr += item + "               ".substr(item.length);
    if((index+1) % 4 ==0) resultStr += "\r\n\r\n"
})
console.log(resultStr)
