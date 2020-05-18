import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider as StyletronProvider } from "styletron-react"
import { LightTheme, BaseProvider, styled, useStyletron } from "baseui"
import { Home } from "./pages/homepage"
import { About } from "./pages/about"

const engine = new Styletron()
const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
})

const Routes = () => {
  const [css, theme] = useStyletron()
  const routeStyle: string = css({
    width: "100%",
    minHeight: "100vh",
  })

  return (
    <div className={routeStyle}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About}/>
      </Router>
    </div>
  )
}

const App = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Routes />
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  )
}
export default App
