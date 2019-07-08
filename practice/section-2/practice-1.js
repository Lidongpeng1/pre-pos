'use strict';

function countSameElements(collection) {
  var preItem;
  var result = [];
  var cur = -1;
  for(let i = 0; i < collection.length; i++) {
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
  return result;

}
