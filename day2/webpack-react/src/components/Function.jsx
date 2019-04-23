const React = require('react')
// 函数组件
// props组件通信 父传子
// 组件的本质是构造函数，调用组件的本质是实例化
function Function(props) {
    return <h1>函数组件, {props.name}</h1>;
}

// 导出组件
export default Function