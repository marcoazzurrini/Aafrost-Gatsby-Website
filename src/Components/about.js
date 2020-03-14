import React from "react"
import styled from "@emotion/styled"

const About = styled.div`
  max-width: ${props => props.theme.sizes.aboutW};
  padding-top: ${props => props.theme.pm.pm500};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    padding-top: ${props => props.theme.pm.pm300};
  }
`

const HeadingSecondary = styled.h3`
  font-size: ${props => props.theme.text.headingSecondary};
  color: ${props => props.theme.colors.grey400};
  margin-bottom: ${props => props.theme.pm.pm200};

  span {
    color: ${props => props.theme.colors.primary};
  }
`

const SectionHero = styled.p`
  font-size: ${props => props.theme.text.bodyLarge};
  color: ${props => props.theme.colors.grey300};
  margin-bottom: ${props => props.theme.pm.pm300};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.text.bodyMedium};
    margin-bottom: ${props => props.theme.pm.pm300};
  }
`

const AboutText = styled.p`
  font-size: ${props => props.theme.text.bodyMedium};
  color: ${props => props.theme.colors.grey200};
  margin-bottom: ${props => props.theme.pm.pm200};
  line-height: 1.8;
`

export default function about() {
  return (
    <About id="about">
      <HeadingSecondary>
        <span>About</span> Us
      </HeadingSecondary>
      <SectionHero>Everything about me, myself and I.</SectionHero>
      <AboutText>
        This very website you're now watching. I wanted something fast and with
        good SEO for my portfolio, so vanilla JS with SCSS seemed like the best
        fit. The visual effect on the top right of the header is achieved via a
        light library called animate.js, dynamically modifying a SVG file.{" "}
      </AboutText>
      <AboutText>
        This very website you're now watching. I wanted something fast and with
        good SEO for my portfolio, so vanilla JS with SCSS seemed like the best
        fit. The visual effect on the top right of the header is achieved via a
        light library called animate.js, dynamically modifying a SVG file.{" "}
      </AboutText>
      <AboutText>
        This very website you're now watching. I wanted something fast and with
        good SEO for my portfolio, so vanilla JS with SCSS seemed like the best
        fit. The visual effect on the top right of the header is achieved via a
        light library called animate.js, dynamically modifying a SVG file.{" "}
      </AboutText>
    </About>
  )
}
