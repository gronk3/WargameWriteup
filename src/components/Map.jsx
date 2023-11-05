import React from "react";
import { Link } from 'react-router-dom'
import HTMLComment from 'react-html-comment';
import "./style.css";

function Map () {

  return (
    <div className="map">
      <HTMLComment text="Back to the start screen" />  
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <Link to="/leviathan/0">
            <HTMLComment text="level 5" />
            <img
              className="flag-1"
              alt="Flag"
              src="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/6544f39a8e71c2421fb3a88e/img/flag3@2x.png"
            />
          </Link>
          <Link to="/natas/0">
            <img
              className="flag-2"
              alt="Flag"
              src="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/6544f39a8e71c2421fb3a88e/img/flag3@2x.png"
            />
          </Link>
          <Link to="/krypton/0">
            <img
              className="flag-3"
              alt="Flag"
              src="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/6544f39a8e71c2421fb3a88e/img/flag3@2x.png"
            />
          </Link>
          <Link to="/end">
            <img
              className="flag-end"
              alt="Flag"
              src="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/6544f39a8e71c2421fb3a88e/img/flag1.png"
            />
          </Link>
          <Link to="/home">
            <img
              className="house"
              alt="House"
              src="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/6545021c813cdb8a7a8f046a/img/house-1.png"
            />
          </Link>
          <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <div className="flag-egg"></div>
          </Link>
          <Link to="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/654809e1e0fb1a51eb07ff99/img/cat1-1.png">
            <div className="flag-mini"></div>
          </Link>
        </div>
      </div>
      <div className="overlap">
        <div className="text-wrapper-2">To Find</div>
      </div>
      <div className="skill-information">
          1x Leviathan Flag<br/><br/>
          1x Natas Flag<br/><br/>
          1x Krypton Flag<br/><br/>
          1x End Flag<br/><br/>
          1x Home page<br/><br/>
          4x Hidden Cats (Flags)<br/><br/>
          1x Extra Easter Egg<br/><br/><br/><br/><br/><br/><br/><br/>
          Hint: decode d2VsbHdlbGx3ZWxsCg==
      </div>
    </div>
  );
};

export default Map;