//箭头函数，使用 => 定义的函数，属于匿名函数一类，优势是上下文绑定

//ES5中
var sum = function(a,b) {
    return a+b
}
//使用箭头函数，首先使用=>代替关键字 function
var sum = (a,b) => {
    return a+b
}

//如果函数的返回值是一个表达式，或函数体没有副作用，可以省略括号{}，和return关键字
var sum = (a,b) => a+b

//ES6箭头函数有四种使用语法
//1.单一参数的单行箭头函数
const fn = foo => `${foo} World`
//调用
fn('Hello'); // Hello World

//过滤
//ES5
var array = ['a','bc','def','ghij'];
array = array.filter(function (item) {
    return item.length >= 2;
});

//ES6
let array = ['a','bc','def','ghij'];
array = array.filter(item => item.length >=2);//'bc','def','ghij'

//2.多参数的单行箭头函数
const fn = (a,b) => a+b;
fn(2,3); //5

// 排序
// ES5
var array = ['a','bc','def','ghij'];
array = array.sort(function (a,b) {
    return a.length < b.length;
}); //

// ES6

//3.多行箭头函数



//4.无参数箭头函数