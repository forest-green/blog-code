import React, { Component } from 'react';
import './App.css';
/**
 * 此处app作为父级组件，也可以称之为根路由
 * 这样的写法配合Router.js文件中的render写法，类似于Vue中的Router-view所起到的作用
 * */ 
class App extends Component{
  render() {
    return <div>{this.props.children}</div>
  }
}

export default App;
