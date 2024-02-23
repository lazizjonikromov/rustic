import React from "react";
import Header from "./Header";
import Services from "./Services";
import LatestProjects from "./LatestProjects";
import About from "./About";
import Price from "./Price";
import Clients from "./Clients";
import Articles from "./Articles";

const Main = () => {
  return (
    <>
      <Header />
      <Services />
      <LatestProjects />
      <About />
      <Price />
      <Clients />
      <Articles />
    </>
  );
};

export default Main;
