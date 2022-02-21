function greet(msg) {
  function greetings(name) {
    return msg + ", " + name + "!";
  }
  return greetings;
}

const gm = greet("Good Morning");
const gn = greet('Good Night')
const hello = greet('Hello')

console.log( gm('Ariful Islam'));
console.log( gn('Ariful Islam'));
console.log( hello('Ariful Islam'));


function base(b){
  return function (n){
        let result = 1;

        for (let i = 0; i <b; i++) {
            result *= n        
        }

        return result
        
    }
    
}

const base10 = base(10)
console.log(base10(2));
const base5 = base(5);
console.log(base5(2));
const base2 = base(2);
console.log(base2(7));