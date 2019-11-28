import React from "react";
import styled from "styled-components";

const Plan = ({ className, plan }) => {
  return <div className={className}>{plan.name}</div>;
};

export default styled(Plan)`
  border: 3px solid violet;
`;
