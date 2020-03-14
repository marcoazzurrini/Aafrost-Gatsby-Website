import React from "react"
import { Helmet } from "react-helmet"
import Favicon from "../img/favicon.ico"
export default function helmet(props) {
  return (
    <Helmet>
      <html lang="en" />
      <title>AaFrost | Refrigeration & Air Conditioning engineers.</title>
      <meta
        name="description"
        content="AaFrost, the leading refrigeration and air conditioning servicing company in central London."
      />
      <meta charset="utf-8" />
      <meta name="author" content="Marco Azzurrini" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href={Favicon} />
    </Helmet>
  )
}
