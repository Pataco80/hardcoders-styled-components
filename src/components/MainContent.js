import React from "react";
import Hero from "../theme/Hero";
import styled from "styled-components";
import { colors, pxToRem } from "../theme/helpers";
import Plans from "../components/Plans";

const MainContent = ({ className }) => {
  return (
    <Hero>
      <section className={className}>
        <h2 className="bolder">Hébergement Mutualisé</h2>
        <p>L'hébergement simple et pas cher !</p>
        <p>
          <span role="img" aria-label="Gratuit">
            🤑
          </span>{" "}
          Demandez votre domaine !{" "}
          <span className="bolder">Un domaine gratuit offert</span> avec tous
          les hébergements !
        </p>
      </section>
      <section>
        <Plans />
      </section>
    </Hero>
  );
};

export default styled(MainContent)`
  color: ${colors.white};
  text-align: center;
  font-size: ${pxToRem(24)};
  h2 {
    font-size: ${pxToRem(56)};
    margin: 0;
    padding-top: ${pxToRem(24)};
  }
  p {
    margin: ${pxToRem(2)} 0;
  }
`;
