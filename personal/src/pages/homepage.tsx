import React from "react"
import { useStyletron } from "baseui"
import { Nav } from "../components/nav"

export const Home = () => {
  const [css, theme] = useStyletron()

  const mainStyle: string = css({
    display: "flex",
    height: "100%",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",
  })

  return (
    <div className={mainStyle}>
      <div>
        <Nav />
      </div>
    </div>
  )
}
