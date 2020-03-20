import React from "react"
import Helmet from "../Components/helmet"
import MainNav from "../Components/navbar"
import Header from "../Components/header"
import About from "../Components/about"
import Contact from "../Components/contact"
import Services from "../Components/services"
import MobileNav from "../Components/mobileNav"
import Quote from "../Components/quote"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { theme } from "../Styles/theme"
import { Wrapper } from "../Styles/wrapper"
import { Messenger } from "../Components/messengerChat"
export default () => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          overflow-x: hidden;
          font-family: "Montserrat", sans-serif;
        }
        input,
        button,
        textarea {
          font-family: "Montserrat", sans-serif;
        }
        p {
          font-weight: 400;
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: "Libre Baskerville", serif;
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
        }
      `}
    />
    <Wrapper>
      <Messenger />
      <Helmet />
      <MobileNav />
      <MainNav />
      <Header />
      <Services />
      <Quote />
      <About />
      <Contact />
    </Wrapper>
  </ThemeProvider>
)
