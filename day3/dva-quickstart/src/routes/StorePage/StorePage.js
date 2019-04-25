import { Component } from 'react'
import { connect } from 'dva'
class StorePage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    editStudentState() {
        console.log(this.props)
        this.props.dispatch({
            // 触发reducer
            // 触发student仓库里面的editAuthor的reducer
            type: "student/editAuthor",
            // 传递到仓库的值
            payload: {
                author: "jing"
            }
        })
    }
    render() {
        return (
            <div>
                StorePage页面

                <p>{this.props.student.author}</p>
                <button onClick={this.editStudentState.bind(this)}>修改仓库的值</button>
            </div>
        )
    }
}
// 把仓库里面的值导进组件里面
export default connect((state) => {
    return state
})(StorePage)