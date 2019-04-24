import React from 'react';
// dva提供了一个connect的方法
// 如果你用了它就会自动帮你把该组件连上这个Model（redux）
import { connect } from 'dva';

function ReduxPage(props) {
    // let {
    //     dispatch
    // } = props;
    // let store = dispatch({
    //     type: 'example/show',
    //     payload: {}, // 需要传递的信息
    // })
    // console.log(store)
    return (
        <div>
            store页面 {props.example.author}
    </div>
    );
}

ReduxPage.propTypes = {
};
// 连接Model 调用connect去连接仓库  相当于vuex中的getters，该组件已经可以跟仓库通信

// 把仓库的值拿到组件里面
export default connect((state) => {
    console.log(state)
    return state;
})(ReduxPage);
// 不连接Model
// export default ReduxPage;
