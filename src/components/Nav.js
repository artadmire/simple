import React, { Component } from 'react';
import { Tabs } from  'antd'
import { withRouter } from 'react-router'
const { TabPane } = Tabs;

const tabsMap = [
  {
    tab: "JavaScript",
    key: "/"
  },
  {
    tab: "Html",
    key: "/user"
  },
  {
    tab: "工程化",
    key: "/module"
  }
]

class Nav extends Component {
  constructor(props) {
    super(props);
    let pathname;
    try {
      pathname = this.props.history.location.pathname
    } catch (error) {}
    this.state = {
      activeKey: pathname || '/'
    }
    this.callback = this.callback.bind(this);
  }
  callback(key) {
    this.setState({activeKey: key});
    this.props.history.push({
      pathname: key
    })
  }
  render() {
    return (
      <Tabs activeKey={this.state.activeKey} onChange={this.callback}>
        {
          tabsMap.map((tabs) => (<TabPane {...tabs} />))
        }
      </Tabs>
    )
  }
}


export default withRouter(Nav);
