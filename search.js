// Search Data

var arr = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27];

var find = 89;
var isFound = false;

for(var i = 0; i < arr.length; i++){
    if(arr[i]=== find){
        console.log('Data Found at index '+ arr[i]);
        isFound = true;
        break;
    }
}

if(!isFound){
    console.log('Data not Found');
}