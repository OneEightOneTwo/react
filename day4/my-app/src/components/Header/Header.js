import React from 'react'
import { connect } from 'react-redux'
class Header extends React.Component {
    render() {
        return (
            <header onClick={this.testDispatch.bind(this)}>OK</header>
        )
    }
    testDispatch() {
        console.log(1)
        this.props.dispatch({
            // 触发对应的action
            type:"EDITAUTHOR",
            // 传递数据
            payloads:{
                name:"lemon"
            }
        })
    }
}

export default connect((state) => {
    return { ...state }
})(Header)