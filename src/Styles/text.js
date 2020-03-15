import styled from "@emotion/styled"

export const SectionHero = styled.p`
  font-size: ${props => props.theme.text.bodyLarge};
  color: ${props => props.theme.colors.grey300};
  margin-bottom: ${props => props.theme.pm.pm300};
  line-height: 1.5;
  span {
    color: ${props => props.theme.colors.grey400};
  }
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.text.bodyML};
    margin-bottom: ${props => props.theme.pm.pm300};
  }
`
