import React from "react"
import styled from "@emotion/styled"
import { HeadingSecondary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"
import EngineerSVG from "../img/engineer.svg"
import SecuritySVG from "../img/security.svg"
import HomeSettingsSVG from "../img/home-settings.svg"
import FastSVG from "../img/fast.svg"

const Services = styled.div`
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

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }

  &:last-of-type {
    margin-bottom: ${props => props.theme.pm.pm300};
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
          <ServiceImage src={EngineerSVG} alt="engineer" />
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
          <ServiceImage src={SecuritySVG} alt="engineer" />
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
          <ServiceImage reverse src={HomeSettingsSVG} alt="security" />
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
          <ServiceImage reverse src={FastSVG} alt="security" />
        </ServiceContent>
      </Service>
    </Services>
  )
}
