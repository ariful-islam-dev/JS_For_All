// Inser and Remove Element

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr[3]=9;
// arr.push(9);
arr.unshift(10)
arr.splice(6, 0 , 9)
arr.pop();
arr.shift();
arr.splice(5,1)

console.log(arr);
