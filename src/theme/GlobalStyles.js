import { createGlobalStyle } from "styled-components";
import { colors } from "./helpers";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

const Global = createGlobalStyle`

body{
  font-size:16px;
  transition:600ms;
  color: ${colors.black};
  background-color: ${colors.white};
}
h1{
  margin:0;
  padding:0;
}
.accent{
  color: ${colors.accent};
}
.bold{
font-weight:700;
}
.bolder{
  font-weight:900;
}
`;

export default Global;
