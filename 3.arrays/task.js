function compareArrays(arr1, arr2) {
  let result = arr1.every(comparisonArr);

  function comparisonArr(el, i) {
    if (arr1.length == arr2.length && arr2[i] == el) {
      return true;
    } else {
      return false;
    }
  }



  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(item => item > 0).filter(item => item % 3 == 0).map(item => item * 10);
  
  return resultArr; // array
}