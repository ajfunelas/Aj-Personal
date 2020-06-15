import React from "react"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from "./components/About"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/">
            <Hero></Hero>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
