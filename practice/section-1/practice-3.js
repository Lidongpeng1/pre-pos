'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionB = getObjectValues(objectB);
  var result = [];
  for(var i = 0; i < collectionA.length; i++) {
    for(var j = 0; j < collectionB[0].length; j++) {
      if(collectionA[i] == collectionB[0][j]) {
        result.push(collectionA[i]);
      }
    }
  }

  console.log(result);
  return result;
}

function getObjectValues(object){ 
  var values = []; 
  for (var property in object) 
    values.push(object[property]); 
  return values; 
}