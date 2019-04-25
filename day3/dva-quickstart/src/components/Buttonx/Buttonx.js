import {
    Component
} from 'react'
import { Button, WhiteSpace } from 'antd-mobile';
import './Buttonx.css'
import { connect } from 'dva';
// props和state区别
// state组件的私有数据 内部数据
// props来自于父组件的（仓库） 外部数据
export default connect((state) => {
    return state
})(class Buttonx extends Component {
    constructor(props) {
        // 继承于父组件的props
        super(props)
        this.state = {}
    }
    'addTab'() {
        console.log(1)
        this.props.dispatch({
            // dispatch触发action触发reducers
            type: "tabbars/addTab",
            // 传递的数据
            payload: {
                tabbars: [{
                    title: "Lemon",
                    key: "Lemon",
                    icon: {
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                    },
                    selectedIcon: {
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }
                }]
            }
        })
    }
    render() {
        return (
            <div>
                <Button onClick={this.addTab.bind(this)}>增加tab</Button><WhiteSpace />
                <Button>删除tab</Button><WhiteSpace />
                <Button>default</Button><WhiteSpace />
                <Button>default</Button><WhiteSpace />
            </div>
        )
    }
})