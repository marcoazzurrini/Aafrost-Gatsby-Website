import React from "react"
import styled from "@emotion/styled"
import { HeadingSecondary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"
import EngineerSVG from "../img/engineer.svg"
import SecuritySVG from "../img/security.svg"

const Services = styled.div`
  padding-top: ${props => props.theme.pm.pm500};
  width: 100%;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    padding-top: 0;
  }
`

const ServiceContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  margin-bottom: ${props => props.theme.pm.pm300};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`
const ServiceDescription = styled.p`
  width: 60%;
  padding-right: ${props => (props.reverse ? 0 : props.theme.pm.pm400)};
  padding-left: ${props => (props.reverse ? props.theme.pm.pm400 : 0)};
  p {
    margin-bottom: ${props => props.theme.pm.pm200};
    color: ${props => props.theme.colors.grey300};
    line-height: 1.5;
  }

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0;
  }
`

const ServiceDetails = styled.ul`
  margin-bottom: ${props => props.theme.pm.pm500};
  li {
    margin-bottom: ${props => props.theme.pm.pm300};
    color: ${props => props.theme.colors.grey400};
  }

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    margin-bottom: ${props => props.theme.pm.pm300};
  }
`

const ServiceImage = styled.img`
  width: 40%;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export default function services() {
  return (
    <Services id="services">
      <HeadingSecondary>
        Refrigeration <span>Services</span>
      </HeadingSecondary>
      <SectionHero>A collection of some my best projects.</SectionHero>
      <ServiceContent>
        <ServiceDescription>
          <p>
            This very website you're now watching. I wanted something fast and
            with good SEO for my portfolio, so vanilla JS with SCSS seemed like
            the best fit. The visual effect on.
          </p>
          <p>
            This very website you're now watching. I wanted something fast and
            with good SEO for my portfolio, so vanilla JS.
          </p>
        </ServiceDescription>
        <ServiceImage src={EngineerSVG} alt="engineer" />
      </ServiceContent>

      <ServiceDetails>
        <li>This very website you're now watching. I wanted something fast.</li>
        <li>This very website you're now watching. I wanted something fast.</li>
        <li>This very website you're now watching. I wanted something fast.</li>
        <li>This very website you're now watching. I wanted something fast.</li>
        <li>This very website you're now watching. I wanted something fast.</li>
      </ServiceDetails>

      <HeadingSecondary>
        Air <span>Conditioning</span>
      </HeadingSecondary>
      <SectionHero>A collection of some my best projects.</SectionHero>
      <ServiceContent reverse>
        <ServiceDescription reverse>
          <p>
            This very website you're now watching. I wanted something fast and
            with good SEO for my portfolio, so vanilla JS with SCSS seemed like
            the best fit. The visual effect on.
          </p>
          <p>
            This very website you're now watching. I wanted something fast and
            with good SEO for my portfolio, so vanilla JS.
          </p>
        </ServiceDescription>
        <ServiceImage reverse src={SecuritySVG} alt="security" />
      </ServiceContent>

      <ServiceDetails>
        <li>This very website you're now watching. I wanted something fast.</li>
        <li>This very website you're now watching. I wanted something fast.</li>
        <li>This very website you're now watching. I wanted something fast.</li>
        <li>This very website you're now watching. I wanted something fast.</li>
        <li>This very website you're now watching. I wanted something fast.</li>
      </ServiceDetails>
    </Services>
  )
}
