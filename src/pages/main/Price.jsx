import React, { useState } from "react";
import { Link } from "react-router-dom";

const Price = () => {
  const [price, setPrice] = useState(false);

  return (
    <div className="price">
      <div className="container">
        <div className="row">
          <h2 className="title text-center mb-3">
            Start Your Dream With An Affordable
          </h2>

          <div className="pricing__tab d-flex justify-content-center gap-3 align-items-center ">
            <span className={`${price ? "" : "active"}`}>Billed Monthly</span>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={() => setPrice(!price)}
              />
            </div>
            <span className={`${price ? "active" : ""}`}>Billed Annually</span>
          </div>

          <div className="pricing__content">
            <div className="pricing__item">
              <span className="price__title">{price ? "Pro" : "Basic"}</span>
              <div className="item__price">
                <span>{price ? "$99" : "$17"}</span>
                <span className="time">/ {price ? "Year" : "Month"}</span>
              </div>
              <p className="desc">
                {price
                  ? "For the first year with 30-days money-back guarantee"
                  : "Free with 14 days trial, then you can choose plan"}
              </p>
              <ul className="project__list">
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "20 Users" : "1 User"}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "Unlimited Dashboard" : "1 Dashboard"}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "50 Projects" : "5 Projects"}
                </li>
              </ul>
              <Link to={"/"} className="myBtn">
                Get Started Now
              </Link>
            </div>

            <div className="pricing__item">
              <span className="price__title">ADVANCED</span>
              <div className="item__price">
                <span>{price ? "$59" : "$24"}</span>
                <span className="time">/ {price ? "Year" : "Month"}</span>
              </div>
              <p className="desc">
                {price
                  ? "For the first year with 30-days money-back guarantee"
                  : "Free with 14 days trial, then you can choose plan"}
              </p>
              <ul className="project__list">
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "3 Users" : "5 Users"}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "Unlimited Dashboard" : "1 Dashboard"}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "50 Projects" : "5 Projects"}
                </li>
              </ul>
              <Link to={"/"} className="myBtn">
                Get Started Now
              </Link>
            </div>

            <div className="pricing__item">
              <span className="price__title">{price ? "Basic" : "Pro"}</span>
              <div className="item__price">
                <span>{price ? "$24" : "$29"}</span>
                <span className="time">/ {price ? "Year" : "Month"}</span>
              </div>
              <p className="desc">
                {price
                  ? "For the first year with 30-days money-back guarantee"
                  : "Free with 14 days trial, then you can choose plan"}
              </p>
              <ul className="project__list">
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "20 Users" : "1 User"}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "Unlimited Dashboard" : "1 Dashboard"}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "50 Projects" : "5 Projects"}
                </li>
              </ul>
              <Link to={"/"} className="myBtn">
                Get Started Now
              </Link>
            </div>

            <div className="pricing__item">
              <span className="price__title">{price ? "Pro" : "Basic"}</span>
              <div className="item__price">
                <span>{price ? "$99" : "$17"}</span>
                <span className="time">/ {price ? "Year" : "Month"}</span>
              </div>
              <p className="desc">
                {price
                  ? "For the first year with 30-days money-back guarantee"
                  : "Free with 14 days trial, then you can choose plan"}
              </p>
              <ul className="project__list">
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "3 Users" : "5 Users"}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "Unlimited Dashboard" : "1 Dashboard"}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  {price ? "50 Projects" : "5 Projects"}
                </li>
              </ul>
              <Link to={"/"} className="myBtn">
                Get Started Now
              </Link>
            </div>
          </div>

          <span className="text-center contact__asking">
            You have a large team? <Link to={"/"}>Contact us</Link> for information about more enterprise options
          </span>
        </div>
      </div>
    </div>
  );
};

export default Price;
