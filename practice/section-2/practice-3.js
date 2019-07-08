'use strict';

function countSameElements(collection) {
  var preItem;
  var result = [];
  var cur = -1;
  for(let i = 0; i < collection.length; i++) {
    if(isSpecial(collection[i]) != -1) {
      let pos = isSpecial(collection[i]);
      if(preItem != collection[i].charAt(pos-1)) {           //与之前不同
        cur++;
        result[cur] = {};
        result[cur].name = collection[i].charAt(pos-1);
        result[cur].summary = parseInt(collection[i].charAt(pos+1));  //将字符串数值转为整数
      }else if(getBracketValue(collection[i])!= -1){        //有中括号[]
        result[cur].summary += getBracketValue(collection[i]);
      }else {
        result[cur].summary += parseInt(collection[i].charAt(pos+1));
      }
      continue;
    }

    if(preItem == undefined || preItem != collection[i]) {   //新增对象
      cur++;
      result[cur] = {};
      result[cur].name = collection[i];
      result[cur].summary = 1;
      preItem = collection[i];
    }else {                                             //相同则自增
      result[cur].summary++;
    }
  }
  console.log(result);
  return result;

}

function isSpecial(str) {
  for(var i = 0; i < str.length; i++) {
    if(str[i] == '-' || str[i] == '[' || str[i] == ':') {
      return i;
    }
  }
  return -1;
}

function getBracketValue(str) {
  var value = "";
  var flag = false;
  for(var i = 0; i < str.length; i++) {
    if(flag == true) {
      value += str[i];
    }
    if(str[i] == '[') {
      flag = true;
    }else if(str[i] == ']') {
      return parseInt(value);
    }
  }
  return -1;
}
