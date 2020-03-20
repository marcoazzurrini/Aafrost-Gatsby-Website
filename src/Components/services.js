import React from "react"
import styled from "@emotion/styled"
import { theme } from "../Styles/theme"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { HeadingSecondary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"

import Img from "gatsby-image"
const ServicesContainer = styled.div`
  padding-top: ${props => props.theme.pm.pm500};
  width: 100%;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    padding-top: 0;
  }
`

const Service = styled.div`
  margin-bottom: ${props => props.theme.pm.pm400};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    margin-bottom: ${props => props.theme.pm.pm300};
  }
`

const ServiceContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  margin-bottom: ${props => props.theme.pm.pm300};
  &:last-of-type {
    margin-bottom: ${props => props.theme.pm.pm300};
  }
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    flex-direction: column;
    margin-bottom: 0;
  }
`
const ServiceDescription = styled.div`
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

const ServiceImage = css`
  width: 40%;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    margin: ${theme.pm.pm300} 0;
  }
`

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
      aerial: file(relativePath: { eq: "aerial.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ventilation: file(relativePath: { eq: "ventilation.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      buildings: file(relativePath: { eq: "buildings.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mountains: file(relativePath: { eq: "mountains.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ServicesContainer id="services">
      <Service>
        <HeadingSecondary>
          Refrigeration <span>Services</span>
        </HeadingSecondary>
        <SectionHero>
          Stress no more! Your refrigeration systems are finally in expert
          hands.
        </SectionHero>
        <ServiceContent>
          <ServiceDescription>
            <p>
              We specialise in the design, supply, installation and maintenance
              of industrial and commercial refrigeration and air conditioning
              systems. We also incorporate heat recovery and energy conservation
              services into our work.
            </p>
            <p>
              Our success rate comes from Planned Preventative Maintenance
              (PPM), the lifespan of regularly serviced systems will outlast
              units that have been neglected. Choose from our competitive
              service packs or ask us to create a bespoke agreement for you.
              We’ll survey your site for free and provide you with the best
              energy saving, maintenance agreement to suit your needs and
              budget.
            </p>
          </ServiceDescription>
          <Img
            css={ServiceImage}
            fluid={data.aerial.childImageSharp.fluid}
            alt="engineer"
          />
        </ServiceContent>
        <ServiceContent reverse>
          <ServiceDescription reverse>
            <p>
              All our quotes include the latest FGAS regulations, depending on
              the size of your units we’ll carry out leak testing annually and
              record all data for your records.
            </p>
            <p>
              You will receive advice and support at every stage of your
              refrigeration project from the initial enquiry and site survey,
              right through to hand over and after sales support.
            </p>
            <p>
              We a provide an emergency breakdown service 24 hours a day, seven
              day a week, 365 day a year, and if required can provide a response
              time of within 4 hours.
            </p>
          </ServiceDescription>
          <Img
            css={ServiceImage}
            fluid={data.mountains.childImageSharp.fluid}
            alt="engineer"
          />
        </ServiceContent>
      </Service>

      <Service>
        <HeadingSecondary>
          Air <span>Conditioning</span>
        </HeadingSecondary>
        <SectionHero>
          Get your setup up and working blazing fast with our 24/7 Engineers.
        </SectionHero>
        <ServiceContent>
          <ServiceDescription>
            <p>
              With modern buildings and offices containing heat generating
              sources such as people, glazing, computers, printers and lighting,
              virtually all businesses have some requirement for air
              conditioning services.
            </p>
            <p>
              With modern buildings and offices containing heat generating
              sources such as people, glazing, computers, printers and lighting,
              virtually all businesses have some requirement for air
              conditioning services. Air con systems of today now provide
              heating as well as cooling and even sanitary hot water can now be
              provided from the same system. With the increased demand for
              energy efficiency and savings, air conditioning systems are the
              obvious choice for temperature control of buildings.
            </p>
          </ServiceDescription>
          <Img
            css={ServiceImage}
            reverse
            fluid={data.mountains.childImageSharp.fluid}
            alt="security"
          />
        </ServiceContent>
        <ServiceContent reverse>
          <ServiceDescription reverse>
            <p>
              Our Service and Maintenance department can provide maintenance
              contracts and F Gas compliance from a single system on one site,
              right through to a national contract covering hundreds of sites
              across the country.
            </p>
            <p>
              Whether it is a single split or multi split system, VRF system
              with a multiple indoor units from one outdoor unit, large direct
              expansion system or chilled water system, ICE can select the right
              solution for your application.
            </p>
          </ServiceDescription>
          <Img
            css={ServiceImage}
            reverse
            fluid={data.buildings.childImageSharp.fluid}
            alt="security"
          />
        </ServiceContent>
      </Service>
    </ServicesContainer>
  )
}
