
var arrayList = new Array(-3,-1,0,1,2,3,4,5,6);
console.log("Array List : " + arrayList);

var getPositiveNumbers = (array) => array.filter(num => num >= 0);

function getSquaredEvens(array){
    let evenNumbers = array.filter(num => num % 2 == 0);
    return evenNumbers.map(num => num*num);
}

console.log("Positive Numbers : " + getPositiveNumbers(arrayList));
console.log("Squared Even Numbers : " + getSquaredEvens(arrayList));