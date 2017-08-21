function range(start, end, step) {
  if (start == isNaN || end == isNaN || step == isNaN || start > end || step < 0) {
    return []
  } else {
    var some_array = []
    for (i = start; i <= end; i += step) {
      some_array.push(i);
    }
    return some_array
  }
}
console.log(range(0,10,2));
console.log(range(10,30,5));
console.log(range(-5, 2, 3));