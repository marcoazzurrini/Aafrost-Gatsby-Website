import React from "react"

export const Svg = props => {
  return (
    <svg width="100%" viewBox="0 0 448 512" fill={props.fill}>
      <path d={props.path} />
    </svg>
  )
}
