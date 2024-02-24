import React from "react";
import "../../style/projects.scss";
import { Link } from "react-router-dom";
import { latestProjects } from "../../data";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="breadcrumb">
          <Link to={"/"}>Home</Link>
          <span>/</span>
          <Link to={"/projects"}>Projects</Link>
        </div>
        <h1 className="title">Our Projects</h1>
      </div>

      <div className="project__items">
        {latestProjects.map((item, i) => (
          <Link to={item.path} key={i} className="project__item">
            <div className="project__img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="project__content">
              <span>{item.category}</span>
              <h2>{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
