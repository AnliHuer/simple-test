function getOddArray(arr) {
  var oddArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
}

function getOddNumArray(oddArr) {
  return oddArr.filter(function(val) {
    return val % 2 === 0;
  });
}

function getGroup(oddNumArr) {
  var group = [
    [],
    [],
    []
  ];
  oddNumArr.forEach(function(val) {
    if (val < 10) {
      group[0].push(val);
    } else if (val < 100) {
      group[1].push(val);
    } else if (val < 1000) {
      group[2].push(val);
    }
  });
  return group;
}

function getAverage(group) {
  var result = [];
  var sum = 0;
  group.forEach(function(val) {
    if (val.length) {
      sum = val.reduce(function(pre, cur) {
        return pre + cur;
      });
      result.push(sum / val.length);
    }
  });
  return result;
}

function even_group_calculate_average(arr) {
  var oddNumArr = getOddNumArray(getOddArray(arr));
  if (oddNumArr.length === 0) {
    oddNumArr = [0];
  }
  return getAverage(getGroup(oddNumArr));
}
