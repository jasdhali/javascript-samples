var numbers = [45,4,9,17,24];

var filteredArr = numbers.filter(myFunction);

function myFunction(value){
    return value > 18;
}

console.log( filteredArr );

