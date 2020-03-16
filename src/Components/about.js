import React from "react"
import styled from "@emotion/styled"
import { HeadingSecondary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"

const About = styled.div`
  max-width: ${props => props.theme.sizes.aboutW};
  padding-top: ${props => props.theme.pm.pm500};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    padding-top: ${props => props.theme.pm.pm300};
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
      <SectionHero>AAFROST, from Londoners, to Londoners.</SectionHero>
      <AboutText>
        AAFROST is a contractor specialising in the design, supply,
        installation, service and maintenance of commercial and industrial
        refrigeration and air-conditioning systems, incorporating heat recovery
        and energy conservation where possible.
      </AboutText>
      <AboutText>
        We’ve grown and developed significantly along the way and are proud to
        be known for our energy efficient, quality innovative cooling solutions
        and outstanding service to our industry
      </AboutText>
      <AboutText>
        We believe that by taking the time to understand the parameters and
        requirements of any project helps NTM achieve the highest level of
        service. Minimising disruption is a key factor. Having obtained an
        understanding of the requirements and priorities, we carry out the works
        to accommodate you day or night, weekday or weekend, accelerated to meet
        business critical dates as and when required. Our aim is to consistently
        deliver the highest quality on time and to an agreed budget.
      </AboutText>
    </About>
  )
}
