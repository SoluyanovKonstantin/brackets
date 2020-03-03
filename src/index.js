module.exports = function check(str, bracketsConfig) {
  let innerStr = str;
  let i = 0;
  while (i < innerStr.length) {
    let j = 0;
    while (j < bracketsConfig.length) {
      if (innerStr[i+1] === bracketsConfig[j][1]){ 
        if (innerStr[i] === bracketsConfig[j][0]) {
          innerStr = innerStr.substring(0, i) + innerStr.substring(i+2);
          i--;
          j = 0;
        } else i++;
      }
      else if (innerStr[i+1] === bracketsConfig[j][0]) {
        i++;
        j = 0;
      }
      else j++;
    }
    i++;
  }
  return innerStr.length > 0 ? false : true;
}