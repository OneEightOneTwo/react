import dva from 'dva';
// 全局antd样式
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model 配置人redux
app.model(require('./models/example').default);
app.model(require('./models/student').default);
app.model(require('./models/tabbars').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
