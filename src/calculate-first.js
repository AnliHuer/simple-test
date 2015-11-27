function getResultElem(j, oddArr) {
  for (var i = 0; i < oddArr.length; i++) {
    if (j !== i && oddArr[j] === oddArr[i]) {
      return false;
    } else if (i === oddArr.length - 1) {
      return true;
    }
  }
}


function single_element(arr) {
  var oddArr = [];
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }

  for (var j = 0; j < oddArr.length; j++) {
    if (getResultElem(j, oddArr)) {
      result.push(oddArr[j]);
    }
  }
  return result;
}
