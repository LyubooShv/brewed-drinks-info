import React, { Component } from "react";
import tea from "./tea.jpg";
import caffee from "./caffee.jpg";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>Brewed Drinks Info</header>
        <div className="homeImg">
          <Link to="/coffee" className="path">
            
            <div className="pCaffee">
              <img src={caffee} alt="caffee" className="caffeeImg" />
              <p>Coffee</p>
            </div>
          </Link>
          <Link to="/tea" className="path">
           
            <div className="pTea">
              <img src={tea} alt="tea" className="teaImg" />
              <p>Tea</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
