//Travers an Array

var arr = [4, 5, 1, 6, 8, 9];

for (var i = 0; i < arr.length; i++) {
  // console.log(arr[i]);

  arr[i] = arr[i] + 2;
}
console.log(arr);

var sum = 0;

for(var i = 0; i<arr.length; i++){
    sum += arr[i]
}
console.log(sum);

for (var i = 0; i<arr.length; i++){
    if(arr[i]%2===0){
        console.log(arr[i]);
    }
}

for(var i = 0; i<arr.length; i++){
    if(arr[i] %2 === 1){
        console.log(arr[i]);
    }
}
