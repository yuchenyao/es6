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

//扩展运算符与解构赋值结合，用于生成数组
//ES5
a  =  list[0], rest = list.slice(1);
//ES6
[a, ...rest] = list;


//如果扩展运算符用于数组赋值，只能将其放在参数最后一位
const [...butlast, last] = [1, 2, 3, 4, 5]; //报错
const [first, ...middle, last] = [1, 2, 3, 4, 5]; //报错

//函数 只能返回一个值，若需要返回多个值，只能返回数组或对象
var dateFields = readDataFields(database);
var d = new Date(...dateFields); //从数据库取出一行数据，通过扩展运算符传入构造函数Date

//扩展运算符可以将字符串转为真正的数组
[...'hello']; //["h", "e", "l", "l", "o"]

//返回字符串的长度
function length(str) {
    return [...str].length;
}









