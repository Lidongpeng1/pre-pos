'use strict';

function collectSameElements(collectionA, objectB) {
  var cA = getObjectKeys(collectionA);
  var cB = getObjectValues(objectB)[0];

  var result = [];
  for(var i = 0; i < cA.length; i++) {
    for(var j = 0; j < cB.length; j++) {
      if(cA[i] == cB[j]) {
        result.push(cA[i]);
      }
    }
  }

  console.log(result);
  return result;
}

function getObjectKeys(object)
{ 
  var keys = []; 
  for (var property in object) 
  keys.push(object[property].key); 
  return keys; 
} 

function getObjectValues(object)
{ 
  var values = []; 
  for (var property in object) 
  values.push(object[property]); 
  return values; 
}