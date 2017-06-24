// 1. 
function someStr(str) {
    var newArr = str.split('');
    newArr.sort();
    newArr.reverse();
    str = newArr.join('');

    return str;
}

var someStrRes = someStr('bcdaeflmjgkhi');
console.log(someStrRes);

// 2.
let arr = [2, 4, 7, 1, -2, 10, -9];

function sortArr(prev, next) {
    return next - prev;
}

arr.sort(sortArr);
console.log(arr);

// 4. 
function dupl(arr) {
    let nevArr = arr.concat(arr);

    return nevArr;
}

var duplRes = dupl(['one', 2, 'three', 4]);
console.log(duplRes);

// 5.
let arrFive = [1, 2, 3, 4, 5];
let res = arrFive.splice(2, 2);
console.log(arrFive);


let arrPaste = [1, 2, 3, 4, 5];
let result = arrPaste.splice(2, 2, 'three', 'four');
console.log(arrPaste);

// 7.
let arrText = ['I', 'am', 'an', 'array'];
let resText = arrText.splice(3, 0, 'awesome');
console.log(arrText);

// 9.
var aaa = [10, 20, 30, 40];
var firstCopy = aaa.slice(0);
console.log(firstCopy);
var secCopy = aaa.concat();
console.log(secCopy);