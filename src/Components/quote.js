import React from "react"
import styled from "@emotion/styled"
import InfoSVG from "../img/information-solid.svg"
import { BtnMedium } from "../Styles/buttons"
const Quote = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.aboutW};
  margin-top: ${props => props.theme.pm.pm400};
  padding: 5rem;
  background: #f3f9fc;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.pm.pm100};
    margin-top: 0;
  }
`

const QuoteHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: ${props => props.theme.pm.pm100};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    margin-top: ${props => props.theme.pm.pm100};
  }
`

const QuoteTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.text.bodyLarge};
  margin-left: ${props => props.theme.pm.pm200};
`

const QuoteForm = styled.form`
  margin-top: ${props => props.theme.pm.pm300};
  diplay: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

const QuoteInput = styled.input`
  font-size: ${props => props.theme.text.bodyMedium};
  background: transparent;
  color: ${props => props.theme.colors.grey300};
  border: none;
  outline: none;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.grey100};
  padding: ${props => props.theme.pm.pm100};
  display: inline-block;
  width: 45%;

  &:first-of-type {
    margin-right: 10%;
  }
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    width: 100%;
    margin-left: 0;
    margin-bottom: ${props => props.theme.pm.pm200};
  }
`
const QuoteTextArea = styled.textarea`
  background: transparent;
  color: ${props => props.theme.colors.grey300};
  font-size: ${props => props.theme.text.bodyMedium};
  padding: ${props => props.theme.pm.pm100};
  border: none;
  outline: none;
  display: inline-block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.grey100};
  margin: ${props => props.theme.pm.pm300} 0;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    margin-top: ${props => props.theme.pm.pm100};
  }
`

const InvisibleLabel = styled.label`
  visibility: hidden;
  height: 0;
  width: 0;
  display: inline-block;
`

const Info = styled.img`
  width: ${props => props.theme.pm.pm200};
`

export default function quote() {
  return (
    <Quote id="quote">
      <QuoteHeader>
        <Info src={InfoSVG} alt="info" />
        <QuoteTitle>Get a Quote</QuoteTitle>
      </QuoteHeader>

      <QuoteForm
        name="quote"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="quote" />
        <InvisibleLabel htmlFor="email">Email</InvisibleLabel>
        <InvisibleLabel htmlFor="name">Name</InvisibleLabel>
        <InvisibleLabel htmlFor="message">Message</InvisibleLabel>
        <QuoteInput name="email" id="email" placeholder="Your email address" />
        <QuoteInput id="name" name="name" placeholder="Your telephone number" />
        <QuoteTextArea id="message" name="message" placeholder="Message" />
        <button css={BtnMedium} type="submit">
          Submit
        </button>
      </QuoteForm>
    </Quote>
  )
}
