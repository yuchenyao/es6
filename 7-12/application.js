//数组合并
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

//ES5
arr1.concat(arr2, arr3);
console.log(arr1.concat(arr2, arr3)) //[ 'a', 'b', 'c', 'd', 'e' ]

//ES6
//[...arr1, arr2, arr3];
console.log([...arr1, ...arr2, ...arr3]); //[ 'a', 'b', 'c', 'd', 'e' ]

