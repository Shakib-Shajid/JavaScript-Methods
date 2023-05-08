// First Code
const arr = ['learn', 'with', 'sumit'];
arr.forEach(element => console.log(element) );

// Second Code
const array = ['abc', 'def', 'ghi'];
array.forEach(function(currValue){
    console.log(currValue);
})

// Third Code
const newArr = [10, 20, 30, 40, 50];
newArr.forEach(function(val, i, arr){
    console.log("value = " + val +" index = "+ i + " " +" Array = " +  arr);
});