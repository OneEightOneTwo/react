// createStore创建仓库
import { createStore } from 'redux'

const store = createStore(
    // 仓库
    (state = {
        author: 'yao',
        skill: ['ps', 'js', 'css']
    },
        // 需要组件里面的dispatch触发
        action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            case 'EDITAUTHOR':
                state.author = action.payloads.name
                return {
                    ...state
                }
            default:
                return state
        }
    })

export default store