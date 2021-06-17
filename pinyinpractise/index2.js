function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
}
let {gradeOneFirstWrite,gradeOneFirstRead,gradeOneSecondWrite } = require("./chars.js");
shuffle(gradeOneSecondWrite)
console.log(JSON.stringify(gradeOneSecondWrite))
// 2021.5.9 测验 许这到运讲成时风欢足相听