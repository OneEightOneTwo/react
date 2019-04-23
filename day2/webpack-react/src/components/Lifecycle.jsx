// 工作中用class组件比较多，因为他比较符合面向对象的概念
const React = require('react')
import Child from './Child.jsx'
class Lifecycle extends React.Component {
    // 构造器 初始化数据模型，没有虚拟DOM和真实DOM 相当于beforeCreate
    constructor(props) {
        console.log('-----------constructor-------------')
        // super是配合extends使用的，是拿来继承React.Component一些属性和方法的，必须写的，用于继承
        super(props);
        // 相当于vue组件里面data  M数据模型
        this.state = {
            name: 'yao',
            style: {
                color: 'red'
            },
            // 控制组件的child增加或者删除
            bool: true
        };
        console.log(this.render())
    }
    // react没有 编译前 编译后 beforeCreate created
    // 挂载前 相当于 beforeMount
    componentWillMount() {
        // 更改数据state，修改状态
        console.log('-----------componentWillMount-------------')
        this.setState({
            name: 'lemon',
        })
    }
    componentDidMount() {
        // 更改数据state，修改状态
        // 虚拟DOM变成真实DOM
        // 获取真实DOM在这个生命周期里面
        console.log('-----------componentDidMount-------------')
        this.refs.h1.style.color = "red"
        console.log(this.refs.h1)
        setTimeout(() => {
            this.setState({
                name: 'jinginging',
            })
        }, 1000)
    }
    // 监听输入框的值
    getInputValue(event) {
        // console.log(event.target.value)
        // M->V
        this.setState({
            name: event.target.value
        })
    }
    deleteChildCp() {
        this.setState({
            bool: !this.state.bool
        })
    }
    render() {
        // 新的虚拟DOM和旧的虚拟DOM进行差异更新
        let vnode = <div>
            <h1 ref="h1">
                父组件{this.state.name}
            </h1>
            {/* HOC 高阶组件，函数式编程 */}
            {(()=>{
                if(this.state.bool){
                    return <Child skill={this.state.name} />
                }else{
                    return;
                }
            })()}
            <input value={this.state.name} onChange={this.getInputValue.bind(this)} />
            <button onClick={this.deleteChildCp.bind(this)}>删掉子组件</button>
        </div>
        console.log('-----------render-------------')
        console.log(vnode);
        return vnode;
    }
    // 性能优化的重要一环
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('-----------shouldComponentUpdate-------------')
    //     console.log(this.state.name)
    //     // render的节流，减少render的触发从而提升性能
    //     // 返回true那就是触发render 如果返回false就不触发render
    //     if (this.state.name.length > 7) {
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    componentWillUpdate() {
        // 虚拟DOM更新
        console.log('-----------componentWillUpdate-------------')
    }
    componentDidUpdate() {
        // 真实DOM更新
        console.log('-----------componentDidUpdate-------------')
    }
}

export default Lifecycle