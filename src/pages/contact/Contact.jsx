import React from "react";
import { Link } from "react-router-dom";
import "../../style/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row contact__box">
          <div className="contact__info">
            <h2 className="title">Contact</h2>
            <h3>New York, United States</h3>
            <ul className="pt-4">
              <li>
                <p>No. 1002, Dahill Rd Str, Borough Park, NY 9982, USA</p>
              </li>
              <li>
                <a href="#">(+070) 3689 56 56 56</a>
              </li>
              <li>
                <a href="#">contact@nordicstudio.co</a>
              </li>
            </ul>
            <Link to={"/contact"} className="myBtn">
              Map Direction
            </Link>
          </div>

          <div className="contact__send">
            <h2>SEND A MESSAGE FOR US</h2>

            <form className="form__send">
              <div className="send__inner-box">
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
              </div>
              <textarea
                id="message"
                rows="6"
                placeholder="Here goes your message"
                required
              ></textarea>
              <button type="submit" className="myBtn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
