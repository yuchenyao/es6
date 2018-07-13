//JSX是用来描述 UI 的JavaScript 扩展语法, React 使用这种语法描述组件的UI
// 是 UI描述 和 UI数据 之间的桥梁

// 1. 基本语法
// 使用成对的标签构成一个树状结构的数据
const element = (
    <div>
        <h1>Hello World!</h1>
    </div>
)

// 2. 标签类型
// 标签有两种类型，DOM 和 React组件
// 使用DOM标签时，标签的首字母必须小写
const element = <h1>Hello world!</h1>;
// 使用React组件类型标签 组件名称首字母必须大写
const element = <HelloWorld />
// 还可以嵌套使用
const element = (
    <div>
        <HelloWorld />
    </div>;
)

// 3. JavaScript 表达式
// 表达式在JSX的使用场景主要有两个 通过表达式给标签属性赋值 和 通过表达式定义子组件

// 通过表达式给标签属性赋值
const element = <Mycomponent foo={1+2} />

// 通过表达式定义子组件
const todos = ['items1', 'items2', 'items3'];
const element = (
    <ul>
        {todos.map( message => <Item key={message} message={message} /> ) }
    </ul>
)
// map虽然是函数，但是返回值是JavaScript表达式
// JSX中只能使用JavaScript表达式，不能使用多行JavaScript语句
// 错误
const element = <Mycomponent foo={const val = 1 + 2; return val; } />

// JSX中可以使用三目运算符或逻辑与(&&)运算符代替if语句
let complete;
const element = (
    <div>
        {
            complete ? <CompletedList /> : null
        }
    </div>
)
// 4. 标签属性


// 5. 注释
// JSX中注释需要用括号 {} 将 /**/ 包裹起来
const element = (
    <div>
        {/*这是一个注释*/}
        <span>React</span>
    </div>
)


//语法糖
// JSX不是必需的 所有的JSX语法都会被转换成对React.createElement() 的调用
// JSX
const element = <div className='foo'>Hello, React</div>
//转换后
const element = React.createElement('div', {className: 'foo'}, 'Hello, React');








