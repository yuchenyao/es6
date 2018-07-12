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
let array = ['a','bc','def','ghij'];
array = array.sort( (a, b) => a.length < b.length);
//3.多行箭头函数
//单一参数
const fn = foo => {
    return `${foo} World`;
}
//多参数
const fn = (foo, bar) => {
    return foo + bar;
}

//4.无参数箭头函数
//如果箭头函数中没有参数传入，需要一对空括号来表示参数列表
const fn = () => 'Hello World';
//相当于
var fn = function () {
    return 'Hello World';
}