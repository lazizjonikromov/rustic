import React from "react";
import Header from "./Header";
import Services from "./Services";
import LatestProjects from "./LatestProjects";
import About from "./About";
import Price from "./Price";

const Main = () => {
  return (
    <>
      <Header />
      <Services />
      <LatestProjects />
      <About />
      <Price />
    </>
  );
};

export default Main;
