// && || !

// A && B
// true && true = true



// A || B
//true || true = true
// true || false = true
// false || true = true
// false || false = false

var a = 10;
var b = 20;
var c = 30;
var d = 40;

if( a > b && c > d){
    console.log('A is greater thand B and C is greter than D');
}else{
    console.log('At least one condition is false');
}

if( a > b || c > d){
    console.log('A is greater thand B OR C is greter than D');
}else{
    console.log('At least one condition is false');
}

var check = !(a > b);

console.log(check);
