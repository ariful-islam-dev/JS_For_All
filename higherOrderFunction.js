function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;

  //   function multiply() {
  //     const m = func(a, b);
  //     return c * d * m;
  //   }

  return function () {
    const m = func(a, b);
    return c * d * m;
  };
}

const multiply = manipulate(3, 4, add);

console.log(multiply());
