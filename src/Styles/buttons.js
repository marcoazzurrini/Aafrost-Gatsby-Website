import { jsx, css } from "@emotion/core"
import { theme } from "./theme"

export const BtnMedium = css`
  background: ${theme.colors.primary};
  padding: ${theme.pm.pm100} ${theme.pm.pm200};
  color: #fff;
  display: inline-block;
  border: none;
  border-radius: 3px;
  font-size: ${theme.text.bodyMedium};
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`
