import React from "react"
import Chevron from "../img/chevronDown.png"
import styled from "@emotion/styled"
import { HeadingPrimary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"
import { BtnMedium } from "../Styles/buttons"
const Header = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    justify-content: center;
    align-items: flex-start;
  }
`

const ChevronDown = styled.a`
  width: 30px;
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 15px);
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

export default function header() {
  return (
    <Header id="header">
      <HeadingPrimary>
        Hello
        <span role="img" aria-label="peace sign">
          ✌🏼
        </span>
        , <br />
        We are <span>AaFrost</span>{" "}
      </HeadingPrimary>
      <SectionHero>
        Your realiable,
        <span> air-conditioning & refrigeration engineer.</span>
      </SectionHero>
      <BtnMedium>Get a Quote</BtnMedium>
      <ChevronDown href="#work">
        <img src={Chevron} alt="scroll down" />
      </ChevronDown>
    </Header>
  )
}
