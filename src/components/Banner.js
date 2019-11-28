import React from "react";
import styled from "styled-components";
import { colors, pxToRem } from "../theme/helpers";

const Banner = ({ className, children }) => {
  return (
    <div className={className}>
      <p className="bold">{children}</p>
    </div>
  );
};

export default styled(Banner)`
  background: ${colors.primary};
  color: ${colors.white};
  padding: ${pxToRem(2)};
  text-align: center;
  text-transform: capitalize;
`;
