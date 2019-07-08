'use strict';

function countSameElements(collection) {
  var preItem;
  var result = [];
  var cur = -1;
  for(let i = 0; i < collection.length; i++) {
    if(isSpecial(collection[i]) != -1) {
      cur++;
      let pos = isSpecial(collection[i]);
      result[cur] = {};
      result[cur].key = collection[i].charAt(pos-1);
      result[cur].count = parseInt(collection[i].charAt(pos+1));  //将字符串数值转为整数
      continue;
    }

    if(preItem == undefined || preItem != collection[i]) {   //新增对象
      cur++;
      result[cur] = {};
      result[cur].key = collection[i];
      result[cur].count = 1;
      preItem = collection[i];
    }else {                                             //相同则自增
      result[cur].count++;
    }
  }
  console.log(result);
  return result;
}

function isSpecial(str) {
  for(var i = 0; i < str.length; i++) {
    if(str[i] == '-') {
      return i;
    }
  }
  return -1;
}
