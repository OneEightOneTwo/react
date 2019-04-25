
export default {
    // 仓库名字
    namespace: 'tabbars',
    // 仓库
    state: {
        tabBars: [{
            title: "Life",
            key: "Life",
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
        }, {
            title: "Life",
            key: "Life",
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
        }, {
            title: "Life",
            key: "Life",
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
        }, {
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
    },
    // reducers跟dispatch里面的type
    reducers: {
        addTab(state, action) {
            console.log(state.tabBars, action.payload.tabbars)
            // 合并新数组
            state.tabBars = [...state.tabBars,...action.payload.tabbars]
            // 更新仓库state
            return { ...state};
        },
    },
};
