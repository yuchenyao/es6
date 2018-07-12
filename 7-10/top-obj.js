// 顶层对象
// 在浏览器环境中指的是window对象
// 在node环境中指的是global对象
// ES5中顶层对象等价于全局变量
// ES6中 var命令和function命令声明的全局变量，是顶层对象的属性；let命令、const命令、class命令声明的全局变量不属于顶层对象的属性。

var a = 1;
window.a; // 1

let b = 3;
window.b; // undefined