import React from 'react';
// import logo from './logo.svg';
import './App.css';

// 路由 HashRouter转为Router Router代替HashRouter
import { HashRouter as Router, Route } from "react-router-dom";

// 页面组件
import HomePage from './pages/HomePage/HomePage'
import DetailPage from './pages/DetailPage/DetailPage'

// 函数组件
function App() {
  return (
    <div className="App">
      {/* 配置路由 vue router-view */}
      <Router>
          <Route path="/home" exact component={HomePage} />
          <Route path="/detail" exact component={DetailPage} />
      </Router>
      
    </div>
  );
}

export default App;
