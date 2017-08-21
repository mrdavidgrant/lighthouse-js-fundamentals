function lastIndexOf(array, value) {
  var counter = array.length - 1;
  var found = false;
  while (found === false && counter >= 0) {
    if (array[counter] !== value) {
      counter--;
    } else {
      found = true;
    }

  }
  if (found === false) {
    counter = -1;
  }
  return counter;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);