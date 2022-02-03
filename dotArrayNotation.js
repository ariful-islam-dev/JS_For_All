var point = {
  x: 10,
  y: 20,
  z: 15,
};

// console.log(point.x);
// console.log(point.y);
// console.log(point.x + point.z);

// console.log(point['x']);
// console.log(point['z']);

point.x = 45;
point.a = 16;

console.log(point);
point["y"] = 100;
var prop = 'z';
point[prop]= 55;
console.log(point);
point.a= undefined;
console.log(point);

delete point.a;

console.log(point);
