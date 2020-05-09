import React from "react"
import { useStyletron } from "baseui"
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from "baseui/header-navigation"
import { StyledLink as Link } from "baseui/link"
import { Button } from "baseui/button"

export const Nav = () => {
  const [css, theme] = useStyletron()

  const navStyle: string = css({
    width: "100%",
    display: "flex",
  })
  const h1Style: string = css({
    fontFamily: "Roboto",
    fontSize: "35px",
    letterSpacing: "-1px",
    color: "rgba(69,69,69,.8)",
  })
  const headerStyle: string = css({
    border: "0px",
  })

  return (
    <HeaderNavigation overrides={{}}>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem className={h1Style}>ABNER JR FUNELAS</NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Link href="#basic-link1">About</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="#basic-link2">Youtube</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="#basic-link3">Patreon</Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.right}></NavigationList>
    </HeaderNavigation>
  )
}
