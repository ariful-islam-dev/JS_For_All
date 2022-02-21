function add(a, b, c) {
  return a + b + c;
}

// console.log(add(1, 2, 3));

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = currying(5)(10)(15);

console.log(result);
