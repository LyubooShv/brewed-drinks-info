import React, { Component } from "react";
import tea from "./tea.jpg";
import caffee from "./caffee.jpg";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="homeImg">
          <div className="pCaffee">
            <img src={caffee} alt="caffee" className="caffeeImg" />
            <p>Caffee</p>
          </div>
          <div className="pTea">
            <img src={tea} alt="tea" className="teaImg" />
            <p>Tea</p>
          </div>
        </div>
      </div>
    );
  }
}
