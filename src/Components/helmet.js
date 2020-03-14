import React from "react"
import { Helmet } from "react-helmet"
import Favicon from "../img/favicon.ico"
export default function helmet(props) {
  return (
    <Helmet>
      <html lang="en" />
      <title>Marco Azzurrini | Frontend Web Developer</title>
      <meta
        name="description"
        content="Hi, I'm Marco, a passionate frontend web developer, specializing in JavaScript, React and Redux."
      />
      <meta charset="utf-8" />
      <meta name="author" content="Marco Azzurrini" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href={Favicon} />
    </Helmet>
  )
}
