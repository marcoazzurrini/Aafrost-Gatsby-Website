import styled from "@emotion/styled"

export const SectionHero = styled.p`
  font-size: ${props => props.theme.text.bodyLarge};
  color: ${props => props.theme.colors.grey300};
  margin-bottom: ${props => props.theme.pm.pm300};
  span {
    color: ${props => props.theme.colors.grey400};
  }
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.text.bodyMedium};
    margin-bottom: ${props => props.theme.pm.pm300};
  }
`
