function merge(array0, array1) {
  var resultArray = [];
  var counter0 = 0;
  var counter1 = 0;
  for (var i = 0; i < array0.length + array1.length; i++) {
    if (array0[counter0] < array1[counter1] || counter1 >= array1.length) {
      resultArray.push(array0[counter0]);
      counter0++;
    } else {
      resultArray.push(array1[counter1]);
      counter1++;
    }
  }
  return resultArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);