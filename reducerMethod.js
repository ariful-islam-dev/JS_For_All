const arr = [7, 8, 1, 3, 5, 6, 4, 3, 9];

const sum = arr.reduce(function (prev, cur) {
  return prev + cur;
}, 0);

console.log(sum);

const max = arr.reduce(function (prev, curr) {
  return Math.max(prev, curr);
}, 0);

console.log(max);

function reduce(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }

  return acc;
}

const customSum = reduce(
  arr,
  function (acc, cur) {
    return acc + cur;
  },
  0
);

console.log(sum);

const customMax = reduce(
  arr,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);

console.log(customMax);


const customMin = reduce(arr, function(prev, curr){
    return Math.min(prev, curr);
}, arr[0])


console.log(customMin);