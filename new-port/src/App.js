import React from "react"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
