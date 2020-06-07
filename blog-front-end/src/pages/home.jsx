import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col } from 'antd';
import ArticleHome from './article'
import './home.less'

const { Header, Footer, Content } = Layout;
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
      <Layout className="layout">
        <Header className="header">
          <Row justify="space-between">
            <Col span={4}>
              <div className="logo" />
            </Col>
            <Col offset={4} span={4}>
              <Menu theme="light"  mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content className="content">
          <ArticleHome />
          {/* {this.props.children} */}
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    )
  }
}

export default Home