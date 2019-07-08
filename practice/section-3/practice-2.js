'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result = [];
  for(let i = 0; i < collectionA.length; i++) {
    let curKey = collectionA[i].key;
    let curCount = collectionA[i].count;
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
