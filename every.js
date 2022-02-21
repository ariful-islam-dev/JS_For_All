const arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7, 10];

const result = arr.every(function (value) {
  return value % 2 === 0;
});

const result2 = arr.every(function (value) {
  return value > 0;
});


console.log(result2);
