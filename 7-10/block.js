//块级作用域可以解决以下两种场景：
//1.内层变量可能会覆盖外层变量
// var temp = new Date();
// function f() {
//     console.log(temp);
//     if (false) {
//         var temp = "hello world";
//     }
// }
// f(); //undefined
//console.log("ITcenter");
//2.用来计数的循环变量泄露为全局变量
//

//块级作用域与函数声明
//ES6明确允许在块级作用域之中声明函数，函数声明类似于let，在块级作用域之外不可引用