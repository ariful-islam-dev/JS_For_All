// First Look at Closuere

let b = 10;
function a() {
  var x = 5;

  return function () {
    console.log(x);
  };
}

const abc = a();

console.dir(abc);
