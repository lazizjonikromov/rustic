import React from "react";
import Worker1 from "../../assets/about-prof1.jpg";
import Worker2 from "../../assets/about-prof2.jpg";
import Worker3 from "../../assets/about-prof3.jpg";

const Workers = () => {
  return (
    <div className="workers">
      <div className="container">
        <h2 className="title">Profressional & Passionate</h2>

        <div className="workers-info">
          <div className="worker">
            <div className="worker-image">
              <img src={Worker1} alt="" />
              <ul className="worker-social">
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <h3>
              <a href="#">Edward Eric Jr</a>
            </h3>
            <span>CEO Founder</span>
          </div>
          <div className="worker">
            <div className="worker-image">
              <img src={Worker2} alt="" />
              <ul className="worker-social">
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <h3>
              <a href="#">Tom Holland</a>
            </h3>
            <span>Architect & Project Management</span>
          </div>
          <div className="worker">
            <div className="worker-image">
              <img src={Worker3} alt="" />
              <ul className="worker-social">
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <h3>
              <a href="#">Laura Erakovic</a>
            </h3>
            <span>Executive & Marketing Management</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workers;
