import React from "react"
import Scrollspy from "react-scrollspy"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Svg } from "../Styles/svg"
import { theme } from "../Styles/theme"
const MobileNav = css`
  display: none;
  padding: 0 ${theme.pm.pm200};
  width: 100vw;
  background: #fff;
  box-shadow: 0 -8px 10px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;

  & .isCurrent svg {
    fill: ${theme.colors.primary};
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const MobileNavLink = styled.a`
  width: 25px;
  height: 25px;
  display: inline-block;
  text-decoration: none;
`

export default function mobileNav() {
  return (
    <Scrollspy
      offset={-100}
      css={MobileNav}
      items={["services", "about", "contact"]}
      currentClassName="isCurrent"
    >
      <MobileNavLink href="#services">
        <Svg
          viewbox="0 0 20 20"
          fill="#CACACA"
          path="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
        />
      </MobileNavLink>
      <MobileNavLink href="#about">
        <Svg
          viewbox="0 0 20 20"
          fill="#CACACA"
          path="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 11v4h2V9H9v2zm0-6v2h2V5H9z"
        />
      </MobileNavLink>
      <MobileNavLink href="#contact">
        <Svg
          viewbox="0 0 20 20"
          fill="#CACACA"
          path="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
        />
      </MobileNavLink>
    </Scrollspy>
  )
}
