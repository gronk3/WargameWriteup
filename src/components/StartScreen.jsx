import React from "react";
import { Link } from 'react-router-dom'
import "./style.css";

function StartScreen() {
  return (
    <div className="start-screen">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="frame">
            <Link to="/map" style={{textDecoration: 'none'}}>
                <div className="start-text">start</div>
            </Link>
            <div className="div" />
          </div>
          <Link to="/ooooh/not/quite">
            <img
              className="start-flag"
              alt="Start flag"
              src="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/6544f39a8e71c2421fb3a88e/img/flag1.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;