import React from "react";
import { Link } from "react-router-dom";
import { GiCoffeeBeans, GiTeapot } from "react-icons/gi";
import { RiHomeSmileFill } from "react-icons/ri";
import Filter from "./Filter";
import Like from "./like";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
function Nav() {
  return (
    <div className="nav">
      <div className="navUl">
        <ul className="nav-line">
          {["bottom"].map((bottom) => (
            <OverlayTrigger
              key={bottom}
              placement={bottom}
              overlay={
                <Tooltip id={`tooltip-${bottom}`} className="tooltip">
                  <strong>HOME</strong>
                </Tooltip>
              }
            >
              <Link to="/" className="path">
                <RiHomeSmileFill className="iconHome" />
              </Link>
            </OverlayTrigger>
          ))}
          {["bottom"].map((bottom) => (
            <OverlayTrigger
              key={bottom}
              placement={bottom}
              overlay={
                <Tooltip id={`tooltip-${bottom}`} className="tooltip">
                  <strong>COFFEE</strong>
                </Tooltip>
              }
            >
              <Link to="/coffee" className="path">
                <GiCoffeeBeans className="iconHome" />
              </Link>
            </OverlayTrigger>
          ))}
          {["bottom"].map((bottom) => (
            <OverlayTrigger
              key={bottom}
              placement={bottom}
              overlay={
                <Tooltip id={`tooltip-${bottom}`} className="tooltip">
                  <strong>TEA</strong>
                </Tooltip>
              }
            >
              <Link to="/tea" className="path">
                <GiTeapot className="iconHome" />
              </Link>
            </OverlayTrigger>
          ))}

          <div>
            <Like />
          </div>
        </ul>
      </div>
      <div className="navHeader">
        <p>Brewed Drinks Info</p>
      </div>
      <div className="filter-bar">
        <Filter />
      </div>
    </div>
  );
}

export default Nav;
