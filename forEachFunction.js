const arr = [1, 2, 3, 4, 5];

let sum = 0;
arr.forEach(function (value, index, arr) {
  sum += value;
});

console.log(sum);

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
forEach(arr, function (value, index, arr) {
    console.log(value, index, arr);
  sum += value;
});

console.log(sum);

forEach(arr, function(value, index, arr){
    arr[index]= value+5
})

console.log(arr);