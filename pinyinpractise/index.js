let {gradeOneFirstWrite,gradeOneFirstRead,gradeOneSecondWrite } = require("./chars.js");
var a = "                              "
var OUTPUT_FOFRMAT = {PINYIN_CHARS_JSON:'pcjson'}
function printSingleResult(item){
  var str = item.pronunciation + a.substring(item.pronunciation.length) + item.simplified + " : " + item.definitions
  console.log(str);
}
function printResult(result, outFormat) {
  if(OUTPUT_FOFRMAT.PINYIN_CHARS_JSON == outFormat){
    outResult = []
    result.forEach((item) => {
      outResult.push({pingyin: item.pronunciation, char:item.simplified})
    })
    console.log(JSON.stringify(outResult))
    return 
  }
 
  result.forEach((item) => {
    printSingleResult(item)
  })
}
function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
}
const cedict = require('coupling-dict-chinese');
function genPinyins(mustInclude, outFormat){

  var mustInclude = mustInclude.split("");
  var result = []
  var allWrite = gradeOneFirstWrite.concat(gradeOneSecondWrite);
  var scope = allWrite;
  var cbCnt = 0
  scope.forEach((item) => {
    scope.forEach((itemin) => {
      if (mustInclude && (mustInclude.indexOf(item) < 0 && mustInclude.indexOf(itemin) < 0)) {
        return;
      }
      cbCnt++
      var temp = cedict.searchByChinese(item + itemin, words => {
        cbCnt--
        if (words && words.length) {
          for(var i = 0; i < 3; i++){
            if(words[i]) result.push(words[i])
          }
          //printSingleResult(words[0])
        }
        if(cbCnt == 0){
          shuffle(result)
          printResult(result, outFormat)
        }
      })
    })
  })
}
var mustInclude = "捉条爬姐您草房"
genPinyins(mustInclude, OUTPUT_FOFRMAT.PINYIN_CHARS_JSON);
//module.exports = genPinyins;