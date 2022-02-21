function print(inp) {
  return inp
}

function multiplyByFive(n) {
  return n * 5;
}

function add(a, b) {
  return a + b;
}

const prnt = print(multiplyByFive(add(3, 5)));

console.log(prnt);
