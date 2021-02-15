import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Tabs } from  'antd'
import routes from '../core/routes'
import Nav from './Nav'
import './App.css'

const { TabPane } = Tabs;



const App = () => {
  return (
    <div>
      <Nav/>
      <Switch>
        {
          routes.map((route) => 
            (<Route
              key={route.path}
              {...route}
            />)
          )
        }
      </Switch>
    </div>
  )
}

export default App
