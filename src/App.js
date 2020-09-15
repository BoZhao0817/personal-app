import React from 'react';
import './App.module.less'
import {BrowserRouter, NavLink} from 'react-router-dom';
import {Menu} from "antd";
import Router from './router';
import styles from './App.module.less'

// import css to make antd works, delete it after import fixBabel
//import 'antd/dist/antd.css'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
          {/*<Menu className={styles.menu} theme='dark'>*/}
          {/*  <Menu.Item><NavLink to="/">Home</NavLink></Menu.Item>*/}
          {/*  <Menu.Item><NavLink to="/login">Login</NavLink></Menu.Item>*/}
          {/*  <Menu.Item><NavLink to="/register">Register</NavLink></Menu.Item>*/}
          {/*</Menu>*/}
        <Router></Router>
      </BrowserRouter>

    </div>
  );
}

export default App;
