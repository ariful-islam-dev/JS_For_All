const persons = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 21,
  },
];
const array = [];

for (let i = 0; i < persons.length; i++) {
  array[persons[i].name] = persons[i];
}

console.log(array);

const arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7, 10, -8, -9];
arr.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr);

persons.sort((a, b) => {
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
});

console.log(persons);
