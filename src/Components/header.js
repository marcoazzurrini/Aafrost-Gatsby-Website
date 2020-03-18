import React from "react"
import Chevron from "../img/chevronDown.png"
import styled from "@emotion/styled"
import { HeadingPrimary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"
import { BtnMedium } from "../Styles/buttons"
import LondonImage from "../img/london_skyline_diag.png"

const Header = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: ${props => props.theme.pm.pm300};
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    justify-content: center;
    align-items: flex-start;
    margin-top: 0;
  }
`

const ChevronDown = styled.a`
  width: 25px;
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 12.5px);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    bottom: 2.4rem;
  }
  img {
    width: 100%;
  }

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    display: none;
  }
`

const HeaderImage = styled.img`
  height: 80%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    height: 35%;
  }
`

export default function header() {
  return (
    <Header id="header">
      <HeaderImage src={LondonImage} alt="london" />
      <HeadingPrimary>
        Hello
        <span role="img" aria-label="peace sign">
          {" "}
          ✌🏼
        </span>
        , <br />
        We are <span>AaFrost</span>{" "}
      </HeadingPrimary>
      <SectionHero>
        London's best,
        <span> air-conditioning & refrigeration engineer.</span>
      </SectionHero>
      <a css={BtnMedium} href="#quote">
        Get a Quote
      </a>
      <ChevronDown href="#services">
        <img src={Chevron} alt="scroll down" />
      </ChevronDown>
    </Header>
  )
}
