
export default {
    // 仓库名字
    namespace: 'student',
    // 仓库
    state: {
        author: 'lemon'
    },
    // reducers跟dispatch里面的type
    reducers: {
        editAuthor(state, action) {
            console.log(state, action)
            // 把旧仓库的值放进去，并且把新的仓库值也放进去
            return { ...state, ...action.payload };
        },
    },
};
