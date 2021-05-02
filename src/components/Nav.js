import React from "react";
import { Link } from "react-router-dom";
import { GiCoffeeBeans, GiTeapot } from "react-icons/gi";
import { RiHomeSmileFill } from "react-icons/ri";
function Nav() {
  return (
    <div className="nav">
      <div clasName="navUl">
      <ul className="nav-line">
     
        <Link to="/" className="path">
          <RiHomeSmileFill className="iconHome"/>
        </Link>
        <Link to="/coffee" className="path">
          <GiCoffeeBeans className="iconHome" />
        </Link>
        <Link to="/tea" className="path">
          <GiTeapot className="iconHome" />
        </Link>
      </ul>
      </div>
      <div className="navHeader">
      <p >Brewed Drinks Info</p>
      </div>
    </div>
  );
}

export default Nav;
