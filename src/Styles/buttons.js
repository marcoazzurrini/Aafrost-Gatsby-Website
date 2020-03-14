import styled from "@emotion/styled"

export const BtnMedium = styled.a`
  background: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.pm.pm100} ${props => props.theme.pm.pm200};
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: ${props => props.theme.text.bodyMedium};
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.15);
`
