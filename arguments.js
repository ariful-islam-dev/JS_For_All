function add(a, b) {
  var result = a + b;
  console.log(result);
}

add(10, 20);
add(7, 3);
add(500, 700);

var arr1 = [1, 2, 3];
var arr2 = [5, 7, 9];
var arr3 = [9, 7, 1];

function sumetion(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumetion(arr3)

function sumOfArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    return sum
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));
console.log(sumOfArray(arr3));