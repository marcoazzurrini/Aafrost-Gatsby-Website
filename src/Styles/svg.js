import React from "react"

export const Svg = props => {
  return (
    <svg width="100%" viewBox={props.viewbox} fill={props.fill}>
      <path d={props.path} />
    </svg>
  )
}
