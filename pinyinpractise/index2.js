var a = "                              "
function printSingleResult(item){
  var str = item.pronunciation + a.substring(item.pronunciation.length) + item.simplified + " : " + item.definitions
  console.log(str);
}
function printResult(result) {
 
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
var gradeOneFirstWrite = "天地人你我他一二三四五上下口耳目手足站坐日月水火山石田禾对云雨风花鸟虫六七八九十爸妈马土不画打棋鸡字词语句子桌纸文数学音乐".split("")
var gradeOneFirstRead = "天地人你我".split("");
var gradeOneSecondWrite = ("春冬风雪花飞入" // lesson 1 识字1
  + "姓什么双国王方"//lesson 2 识字2
  + "青清气晴情请生"//lesson 3 识字3
  + "字左右红时动万"//lesson 4 识字4
  + "吃叫主江住没以"//lesson 1 课文1
  + "会走北京门广"//lesson 2 课文2
  + "过各种样伙伴这"//lesson3 课文3
  + "太阳校金秋因为"//lesson4 课文4
  + "他地河说也听哥"//课文5
  + "单居招呼快乐"//课文6
  + "玩很当音讲行许"//课文7
  + "思床前光低故乡"//课文8
  + "色外看爸晚笑再"//课文9
  + "午节叶米真分豆"//课文10
  + "那着到高兴千成"//课文11
  + "间迷造运池欢网"//识字5
  + "古凉细夕李语香"//识字6
  + "打拍跑足声身体"//识字7
  + "之相近习远玉义"//识字8
  + "首采无树爱尖角"//课文12
  + "亮机台放鱼朵美"//课文13
  + "值呀边呢吗吧加"//课文14
).split("");
var mustInclude = undefined;
var result = []
var promises = [];
var allWrite = gradeOneFirstWrite.concat(gradeOneSecondWrite);
var scope = allWrite;
var cbCnt = 0
shuffle(gradeOneFirstWrite)
console.log(JSON.stringify(gradeOneFirstWrite))
// 2021.5.9 测验 许这到运讲成时风欢足相听