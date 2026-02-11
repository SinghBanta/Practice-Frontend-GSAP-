import "./Home.css";
import manImage from "../../assets/man.png";
import { useEffect } from "react";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-scroll';

import Typewriter from "typewriter-effect/dist/core";
const Home = () => {

  useGSAP(()=>{
    let tl=gsap.timeline();
    tl.from(".line1",{
        y:80,
        duration:1,
        opacity:0,
    })
     tl.from(".line2",{
        y:80,
        duration:1,
        opacity:0,
    })
    tl.from(".line3",{
        y:80,
        duration:1,
        opacity:0,
    })
    gsap.from(".righthome img",{
        x:200,
        duration:1,
        opacity:0,
    })

  })
  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: ["SOFTWARE DEVELOPER", "WEB DEVELOPER", "PROGRAMMER"],
      autoStart: true,
      loop: true,
      cursor: "|",
    });
  }, []);

  return (
    <div>
      <div id="home">
        <div className="lefthome">
          <div className="homedetails">
            <div className="line1">Hi there!</div>
            <div className="line2">I'M BANTA SINGH</div>
            <div id="typewriter" className="line3"></div>
            <button> <Link to='contact' smooth={true} duration={300} spy={true}>Hire Me</Link></button>
          </div>
        </div>
        <div className="righthome">
          <img src={manImage} alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Home;
