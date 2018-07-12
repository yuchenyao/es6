//扩展运算符是三个点 (...) 将一个数组转为用逗号分隔的参数序列
console.log(...[1,2,3]); //1 2 3

console.log(7,...[1,2,3],9); //7 1 2 3 9

//如果后面是空数组，则无效果
[...[], 1]; //[1]

//代替apply方法 func.apply(thisArg, [argsArray])

//ES5写法
function f(x, y, z) {
    //
}
 var args = [0, 1, 2];
f.apply(null, args);

//ES6写法
function f(x, y, z) {
    //
}
var args = [0, 1, 2];
f(...args);

//ES5
Math.max.apply(null, [14, 3, 77]);
//ES6
Math.max(...[14, 3, 77]);
//等同于
Math.max(14, 3, 77);

//ES5
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);
//push方法的参数不可以是数组，因此通过apply方法变通使用push方法

//ES6
arr1.push(...arr2);
















