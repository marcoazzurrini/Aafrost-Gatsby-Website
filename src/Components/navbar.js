import React from "react"
import styled from "@emotion/styled"
import LogoImg from "../img/logo.png"

const Navbar = styled.nav`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: ${props => props.theme.sizes.navbarH};
  background: #fff;
  z-index: 5;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    display: none;
  }
`

const NavbarContent = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.a`
  height: 100%;
  max-height: 40px;
  img {
    height: 100%;
  }
`

const NavbarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavbarMenuItem = styled.li`
  margin-left: 1.5rem;
  cursor: pointer;
`

const NavbarMenuLink = styled.a`
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.grey200};
  margin-right: ${props => props.theme.pm.pm200};
  font-size: ${props => props.theme.text.bodyMedium};
`

export default function MainNav() {
  return (
    <Navbar>
      <NavbarContent>
        <Logo href="#header">
          <img src={LogoImg} alt="logo and scroll to top" />
        </Logo>
        <NavbarMenu>
          <NavbarMenuItem>
            <NavbarMenuLink href="#services" primary>
              Services
            </NavbarMenuLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarMenuLink href="#about">About</NavbarMenuLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarMenuLink href="#contact">Contacts</NavbarMenuLink>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  )
}
