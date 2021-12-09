// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  
  return {
    min: min,
    max: max,
    avg: avg
  };
}

// Задание 2


function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    let a = func(arrOfArr[i]);
    if (max < a) max = a;
  }

  return max;
}

// Задание 3

function worker2(arr) {
  let min = arr[1];
  let max = arr[1];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }

  sum = Math.abs(min - max);

  return sum;
}