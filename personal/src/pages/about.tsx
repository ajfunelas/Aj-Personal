import React from 'react'
import { useStyletron } from "baseui"

export const About = () => {
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
            About Page
          </div>
        </div>
      )
}