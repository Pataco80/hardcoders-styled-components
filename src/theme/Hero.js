import styled from "styled-components";
import Img from "../images/hero.jpg";

const Hero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
    url(${Img}) no-repeat center/cover fixed;

  border: 3px solid red;
  min-height: 100vh;
  width: 100%;
`;

export default Hero;
