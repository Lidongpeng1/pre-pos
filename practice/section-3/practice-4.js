'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let preItem;
  let C = [];
  let cur = -1;
  for(let i = 0; i < collectionA.length; i++) {
    if(isSpecial(collectionA[i]) != -1) {
      cur++;
      let pos = isSpecial(collectionA[i]);
      C[cur] = {};
      C[cur].key = collectionA[i].charAt(pos-1);
      C[cur].count = parseInt(collectionA[i].charAt(pos+1));  //将字符串数值转为整数
      continue;
    }

    if(preItem == undefined || preItem != collectionA[i]) {   //新增对象
      cur++;
      C[cur] = {};
      C[cur].key = collectionA[i];
      C[cur].count = 1;
      preItem = collectionA[i];
    }else {                                             //相同则自增
      C[cur].count++;
    }
  }
  
  let result = [];
  for(let i = 0; i < C.length; i++) {
    let curKey = C[i].key;
    let curCount = C[i].count;
    let same = false;
    for(let j = 0; j < objectB.value.length; j++) {
      if(curKey == objectB.value[j]) {     //相同
        curCount -= curCount/3;
        result.push({key:curKey,count:Math.ceil(curCount)});
        same = true;
        break;
      }
    }
    if(same == false) {
      result.push({key:curKey,count:curCount});
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
