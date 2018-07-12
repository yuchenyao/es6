//ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
//let可以创建块级作用域，ES6推荐在函数中使用let定义变量，而非var
var a = 2;
{
  let a = 3;
  console.log(a); // 3
}
console.log(a); // 2

//const声明一个只读的常量。一旦声明，常量的值就不能改变。
//const 声明的常量类似于指针，它指向某个引用，也就是说这个「常量」并非一成不变的
// {
//     const ARR = [5,6];
//     ARR.push(7);
//     console.log(ARR); // [ 5, 6, 7 ]
//     //ARR = 10; // TypeError: Assignment to constant variable.
// }

//const一旦声明变量，就必须立即初始化，变量名大写
//const FOO; //SyntaxError: Missing initializer in const declaration

//const的作用域与let命令相同：只在声明所在的块级作用域内有效。
// if (true) {
//     const MAX = 10;
//     console.log(MAX); //10
// }
//     console.log(MAX); //ReferenceError: MAX is not defined

//const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
// if (true) {
//     console.log(MAX); //ReferenceError: MAX is not defined
//     const MAX = 10;
// }

//Notice: let const声明的变量都不提升，只能在声明后使用
//let const 作用域相同，只在声明所在的块级作用域内有效
//const 声明变量时必须赋值，变量名称大写
//const声明的常量，也与let一样不可重复声明


