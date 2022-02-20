function sample(a, b, cb) {
  const c = a + b;
  const d = a - b;

  return cb(c, d);
}

function sum(a, b) {
  return a - b;
}

const result = sample(5, 9, sum);

const result2 = sample(4, 3, function (a, b) {
  return a - b;
});

const result3 = sample(8, 9, function (x, y) {
  return x * y;
});

console.log(result3);
