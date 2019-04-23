// 工作中用class组件比较多，因为他比较符合面向对象的概念
const React = require('react')
class State extends React.Component {
    // 构造器
    constructor(props) {
        // super是配合extends使用的，是拿来继承React.Component一些属性和方法的，必须写的，用于继承
        super(props);
        // 相当于vue组件里面data  M数据模型
        this.state = {
            name: 'yao',
            style: {
                color: 'red'
            }
        };
    }
    testClick(num) {
        console.log(this, num)
        console.log(this.state.name)
        // M -> V
        // 只能通过setState来去改变state的值，从而更新视图
        this.setState({
            name: 'lemon'
        });
    }
    testClickWithoutThis() {
        console.log(this)
    }
    render() {
        let {
            name,
            style
        } = this.state
        return (
            <div>
                <h1 style={style}>
                    名字为{name}
                </h1>
                {/* onclick -> onClick*/}
                <button onClick={this.testClick.bind(this, 1)}>绑定this</button>
                <button onClick={this.testClickWithoutThis}>没有绑定this</button>
            </div>
        );
    }
}

export default State