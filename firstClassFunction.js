/**
 * A Function can be Stored in a variable
 * A Function can be stroed in an Array
 * A Function can be stroed in an Object
 * We can create function as need
 * We can pass functiona an an Arguments
 * We can return functions from Another function
 *
 */

// Frsit Cllass Function

function add(a, b) {
  return a + b;
}

const sum = add;
console.log(sum(4, 5));

//2
const arr = [];
arr.push(add);
console.log(arr[0](4, 3));

// 3

const obj = {
  sum: add,
};

console.log(obj);
console.log(obj.sum(7,9));


// 4
setTimeout(function(){
    console.log('I have Created......');
}, 1000)


