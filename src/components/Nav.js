import React, { Component } from 'react';
import { Tabs } from  'antd'
import { withRouter } from 'react-router'
const { TabPane } = Tabs;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.callback = this.callback.bind(this)
  }
  callback(key) {
    this.props.history.push({
      pathname: key
    })
  }
  render() {
    return (
      <Tabs defaultActiveKey="/" onChange={this.callback}>
        <TabPane tab="JavaScript" key="/"></TabPane>
        <TabPane tab="Html" key="/user"></TabPane>
        <TabPane tab="工程化" key="/jj"></TabPane>
    </Tabs>
    )
  }
}


export default withRouter(Nav);
