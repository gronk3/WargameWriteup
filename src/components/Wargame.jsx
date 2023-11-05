import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { CurrInformation } from './helper';

function Wargame () {

  const navigate = useNavigate();
  const params = useParams();
  
  React.useEffect(() => {
    if ((params.wargame === "natas" && params.level < 0 || params.level > 15)
        || ((params.wargame === "leviathan" || params.wargame === "krypton") 
        && (params.level < 0 || params.level > 7))) {
      alert("Invalid level select");
      navigate('/map');
    }
  }, [params.level, params.wargame]);

  return (
    <div className="wargame">
      <div className="div">
        <div className="overlap-group">
          <div className="wargame-block" />
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="text-wrapper">{params.wargame.toUpperCase()}</div>
          <CurrInformation wargame={params.wargame} level={params.level}></CurrInformation>
          <div className="element">
            <Link className="link" to={"/" + params.wargame + "/0"}>
              0
            </Link>
            <br />
            <Link className="link" to={"/" + params.wargame + "/1"}>
              1
            </Link>
            <br />
            <Link className="link" to={"/" + params.wargame + "/2"}>
              2
            </Link>
            <br />
            <Link className="link" to={"/" + params.wargame + "/3"}>
              3
            </Link>
            <br />
            <Link className="link" to={"/" + params.wargame + "/4"}>
              4
            </Link>
            <br />
            <Link className="link" to={"/" + params.wargame + "/5"}>
              5
            </Link>
            <br />
            <Link className="link" to={"/" + params.wargame + "/6"}>
              6
            </Link>
            {params.wargame === "natas"
              ?
              <>
                <br />
                <Link className="link" to={"/" + params.wargame + "/7"}>
                  7
                </Link>
                <br />
                <Link className="link" to={"/" + params.wargame + "/8"}>
                  8
                </Link>
                <br />
                <Link className="link" to={"/" + params.wargame + "/9"}>
                  9
                </Link>
                <br />
                <Link className="link" to={"/" + params.wargame + "/10"}>
                  10
                </Link>
                <br />
                <Link className="link" to={"/" + params.wargame + "/11"}>
                  11
                </Link>
                <br />
                <Link className="link" to={"/" + params.wargame + "/12"}>
                  12
                </Link>
                <br />
                <Link className="link" to={"/" + params.wargame + "/13"}>
                  13
                </Link>
                <br />
                <Link className="link" to={"/" + params.wargame + "/14"}>
                  14
                </Link>
                <br />
                <Link className="link" to={"/" + params.wargame + "/15"}>
                  15
                </Link>
              </>
              :
              <></>
            }
            <br/>
            <Link className="link" to={"/" + params.wargame + "/end"}>
              □
            </Link>
          
          </div>
          <Link className="link" to="/map">
            <img
              className="vecteezy-flag-pixel"
              alt="Vecteezy flag pixel"
              src="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/6544f39a8e71c2421fb3a88e/img/flag1.png"
              />
          </Link>
        </div>
        <div className="overlap">
          <div className="text-wrapper-2">Skills</div>
        </div>
        <div className="skill-information">
            Using brain<br/><br/>
            Terminal commands<br/><br/>
            `$strings` command<br/><br/>
            `$ltrace` command<br/><br/>
            `$trace` command<br/><br/>
            Reading more documentation<br/><br/>
            Utilising online resources<br/><br/>
            Utilising online resources<br/><br/>
            Brute force<br/><br/>
            GDB<br/><br/>
            HTML knowledge<br/><br/>
            PHP<br/><br/>
            SQLi<br/><br/>
        </div>
      </div>
    </div>
  );
}

export default Wargame;
