//For Loops

// for (var i = 0; i < 1000; i+=100) {
//   console.log(i+1 + " Ariful Islam Howlader");
// }

// for (initializer, condition, increment){
//
// }

for (var i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

var sum = 0;

for (var i = 0; i <= 100; i++) {
  console.log(sum + " + " + i + " = " + (sum + i));
  sum += i;
}


var evenTotal = 0;
for(var i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(evenTotal + " + " + i +" = "+ (evenTotal+i));
        evenTotal+=i;
    }
}