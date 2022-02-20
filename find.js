const arr = [7, 8, 1, 3, 5, 6, 4, 3, 9];

const result = arr.find(function (value, index, obj) {
  return value === 9;
});

console.log(result);


const result2 = arr.findIndex(function(value){
    return value === 9
})

console.log(result2);

function find(arr, cb){
    for (let i = 0; i < arr.length; i++) {
    //    if(cb(arr[i], i)){
    //        return arr[i]
    //    }

    if(cb(i)){
        return i
    }
        
    }
}

const result3 = find(arr, function(value){
    return value === 9
})

const result4 = find(arr, function(value){
    return value === 7
})

console.log(result4);