import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { theme } from "../Styles/theme"
import Chevron from "../img/chevronDown.png"
import styled from "@emotion/styled"
import { HeadingPrimary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"
import { BtnMedium } from "../Styles/buttons"
import Img from "gatsby-image"

const HeaderSection = styled.div`
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

const HeaderImage = css`
  width: 70%;
  max-width: 1350px;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "london_skyline_diag.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <HeaderSection id="header">
      <Img
        fluid={data.imageOne.childImageSharp.fluid}
        css={HeaderImage}
        style={{ position: "absolute" }}
        alt="london"
      />

      <HeadingPrimary>
        Hello
        <span role="img" aria-label="peace sign">
          {" "}
          ✌🏼
        </span>
        , <br />
        We are <span>AAFROST</span>{" "}
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
    </HeaderSection>
  )
}

export default Header
