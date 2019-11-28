import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const landigPage = () => {
  return (
    <>
      <Banner>
        <span role="img" aria-label="Gratuit">
          🤑
        </span>{" "}
        Un domaine gratuit offert avec tous les hébergements !
      </Banner>
      <Header />
      <MainContent />
    </>
  );
};

export default landigPage;
