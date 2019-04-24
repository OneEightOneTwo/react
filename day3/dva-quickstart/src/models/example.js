
export default {
  // 仓库名字
  namespace: 'example',
  // 仓库
  state: {
    author: 'yao'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    show(state, action) {
      console.log(state)
      return { ...state, ...action.payload };
    },
  },

};
