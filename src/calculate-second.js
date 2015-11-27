function getOddArray(arr) {
  var oddArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
}


function getMeadinNum(oddArr) {
  var medianNum;

  medianNum = oddArr.length % 2 !== 0 ? oddArr[(oddArr.length - 1) / 2] : (oddArr[oddArr.length / 2] + oddArr[oddArr.length / 2 - 1]) / 2;
  return medianNum;
}


function calculate_median(arr) {
  var oddArr = getOddArray(arr);

  oddArr.sort(function(a, b) {
    return a > b;
  });

  return getMeadinNum(oddArr);
}
