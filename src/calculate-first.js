function single_element(arr) {
  var oddArr = [];
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }

  for (var m = 0; m < oddArr.length - 1; m++) {
    var flag = getResultElem(m, oddArr);
  }
  return result;
}

function getResultElem(m, oddArr) {
  var flag = [];
  for (var i = m + 1; i < oddArr.length; i++) {
    if (oddArr[m] === oddArr[i]) {
      flag.push(i);
    }
    return flag;
  }
}
