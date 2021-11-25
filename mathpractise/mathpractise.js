const getAFormula = require("./formularGenerator");

var count = 0;
var result = []
while (count < 60) {
    result.push(getAFormula(0, 100, 2))
    count++
}
var resultStr = "";
result.forEach((item, index) => {
    resultStr += item + "               ".substr(item.length);
    if ((index + 1) % 4 == 0) resultStr += "\r\n\r\n"
})
console.log(resultStr)
