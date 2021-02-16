import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './core/routes'
import Nav from './components/Nav'
import './App.css';

const App = () => {
  return (
    <div className="content">
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
