const arr = [1, 2, 3, 4, 5, 6, 7];

const sqrArr = arr.map(function (value, index, arr) {
  // return Math.random()*100;
  return value * value;
});

// console.log(arr);

// console.log(sqrArr);

function map(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = cb(arr[i], i, arr);

    newArr.push(temp);
  }

  return newArr;
}

const multiply = map(arr, function (value) {
  return value * value * value;
});
console.log(multiply);

const mTen = map(arr, function (value) {
  return value * 10;
});

console.log(mTen);
