// What is pure functions

//`* It Returns the same result if given the same arguments`
//`* It does not cause any observable side effects`

function sqr(n) {
  return n * n;
}

console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));

let n = 10;

function change() {
  n = 100;
}
change();

console.log(n);

const point = {
  x: 45,
  y: 30,
};

function printPoint(point) {
  point.x = 100;
  point.y = 100;

  console.log(point);
}

printPoint(point);
console.log(point);
