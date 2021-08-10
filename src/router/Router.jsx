import React from 'react'
import Home from 'pages/Home/Home'
import List from 'pages/List/List'
import { Route, Switch } from 'react-router'
import NavBar from '../pages/Home/components/NavBar/NabBar'

const Router = () => {
  return (
    <>
      <NavBar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/listado" component={List} />
        <Route
          component={() => (
            <div>
              <h1 className="">ERROR 404</h1>
              <span className="">Página no encontrada</span>
            </div>
          )}
        />
      </Switch>
    </>
  )
}

export default Router
