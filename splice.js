function splice(arr, a, b = 0, ...rest) {
  var newArr = [];
  var indexOfNewArr = 0;

  // check if b is not 0
  if (b !== 0) {
    // do loop, to creare new array
    for (var i = 0; i < arr.length + rest.length; i++) {
      if (i >= a && i < a + b) {
        continue;
      } else if (i === a) {
        for (var j = 0; j < b; j++) {
          newArr[indexOfNewArr] = rest[j];
          indexOfNewArr++;
        }
      } else {
        newArr[indexOfNewArr] = arr[i];
        indexOfNewArr++;
      }
    }
  }

  for (var i = 0; i < arr.length + rest.length; i++) {
    if (b !== 0) {
      for (var j = 0; j < arr.length; j++) {
        if (j >= a && j < a + b) {
          continue;
        }
      }
    }
  }

  return newArr;
}

var array = [0, 1, 2, 3, 4];

console.log(splice(array, 1, 1, "tambah1", "tambah2"));
