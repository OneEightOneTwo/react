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
    {data.title}
    {(()=>{
        return '你好'
    })()}
    <p name={data.attr}>属性值</p>
    <img className="abc" src={data.url} />
    <Function name="World" />
    <Es6class name="Hello" />
</div>

console.log(template)
// 构造函数组件 
import Function from './components/Function.jsx'
// 类组件 不需要注册，引入之后直接使用，组件的首字母必须大写
import Es6class from './components/Es6class.jsx'

ReactDOM.render(
    template,
    document.querySelector("#demo")
)