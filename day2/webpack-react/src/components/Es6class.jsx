// 工作中用class组件比较多，因为他比较符合面向对象的概念
const React = require('react')
class Es6class extends React.Component {
    render() {
        return <h1>类组件, {this.props.name}</h1>;
    }
}

export default Es6class