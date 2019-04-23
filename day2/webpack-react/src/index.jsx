const React = require('react')
const ReactDOM = require('react-dom')
console.log(React)
// const vnode = React.createElement('div',null,'hello world')

const data = {
    title:"hello world",
    attr:"abc",
    url:"https://avatars2.githubusercontent.com/u/48898125?s=200&v=4"
}
const template = <div>
    <p>1.JSX</p>
    {data.title}
    {(()=>{
        return '你好'
    })()}
    <p name={data.attr}>属性值</p>
    {/* <img className="abc" src={data.url} /> */}
    <hr />

    <p>2.组件</p>
    <Function name="World" />
    <Es6class name="Hello" skill="ps" />
    <Es6class name="World" skill="js" />
    <hr />

    <p>3.状态state</p>
    <State />
    <hr />

    <p>4.生命周期</p>
    <Lifecycle />
    <hr />
</div>

console.log(template)
// 构造函数组件 
import Function from './components/Function.jsx'
// 类组件 不需要注册，引入之后直接使用，组件的首字母必须大写
import Es6class from './components/Es6class.jsx'
import State from './components/State.jsx'
import Lifecycle from './components/Lifecycle.jsx'

ReactDOM.render(
    template,
    document.querySelector("#demo")
)