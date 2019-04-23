// 工作中用class组件比较多，因为他比较符合面向对象的概念
const React = require('react')
class Child extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <h1>
            子组件{this.props.skill}
        </h1>;
    }
    componentWillReceiveProps(){
        // 该组件获取了新的props时候触发
        console.log("-----------componentWillReceiveProps-------------")
    }
    componentWillUnmount(){
        // 监听自身是否被销毁了
        console.log("-----------componentWillUnmount-------------")
    }
}

export default Child