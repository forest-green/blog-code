import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Layout } from 'antd';
import './home.sass'

// const { Content } = Layout
/**
 * 首页增加水波动画效果
 * 初始展示网站的局部，以圆形区域为主，主要类似于局部展示的意思
 * 当鼠标移动至相应的圆形区域后，
 * 顶层需要增加水波的动画效果，
 * 同时，网站的首页缓慢展示出来
 * 
 * 类似于增加水波动画  网站首页增加逐渐显现的动画效果
 * */ 
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <div className="clipWrap">

        </div>
        {/* <Layout>
          <Content>

          </Content>
        </Layout> */}
      </div>
    )
  }
}

export default Home