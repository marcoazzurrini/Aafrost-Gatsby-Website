import React from "react"
import styled from "@emotion/styled"
import { Svg } from "../Styles/svg"

const MobileNav = styled.nav`
  display: none;
  padding: 0 ${props => props.theme.pm.pm200};
  width: 100vw;
  background: #fff;
  box-shadow: 0 -8px 10px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80px;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const MobileNavLink = styled.a`
  width: ${props => props.theme.pm.pm200};
  height: ${props => props.theme.pm.pm200};
  display: inline-block;
  text-decoration: none;
`

export default function mobileNav() {
  return (
    <MobileNav>
      <MobileNavLink>
        <Svg
          viewbox="0 0 20 20"
          fill="#127EB1"
          path="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"
        />
      </MobileNavLink>
      <MobileNavLink>
        <Svg
          viewbox="0 0 20 20"
          fill="#CACACA"
          path="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 11v4h2V9H9v2zm0-6v2h2V5H9z"
        />
      </MobileNavLink>
      <MobileNavLink>
        <Svg
          viewbox="0 0 20 20"
          fill="#CACACA"
          path="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
        />
      </MobileNavLink>
    </MobileNav>
  )
}
