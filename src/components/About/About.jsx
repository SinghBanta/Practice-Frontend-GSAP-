import React from "react";
import "./About.css";
import Card from "../Card/Card";
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: ".circle",
        scroll:"body",
        scrub:2,

        // markers:true,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: ".line",
        scroll:"body",
        scrub:2,
        // markers:true,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll:"body",
        scrub:2,
        // markers:true,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".aboutdetails ul",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll:"body",
        scrub:2,
        // markers:true,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".rightabout",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: ".rightabout .card",
        scroll:"body",
        scrub:2,
        // markers:true,
        start: "top 60%",
        end: "top 30%"
      }
    })

  })

  return (
    <div>
      <div id="about">
        <div className="leftabout">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li>
                  <span>NAME</span> : BANTA SINGH
                </li>
                <li>
                  <span>AGE</span> : 23 YEARS
                </li>
                <li>
                  <span>GENDER</span> : MALE
                </li>
                <li>
                  <span>LANGUAGE KNOWN</span> : HINDI,ENGLISH
                </li>
              </ul>
            </div>
            
            <div className="education">
              <h1>EDUCATION</h1>
              <ul>
                <li>
                  <span>DEGREE</span> : B.TECH
                </li>
                <li>
                  <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
                </li>
                <li>
                  <span>CGPA</span> : 8.43
                </li>
                
              </ul>
            </div>

            <div className="skills">
              <h1>SKILLS</h1>
              <ul>
                <li>
                  MERNSTACK DEVELOER
                </li>
                <li>
                  PROGRAMMER
                </li>
                <li>
                  JAVA
                </li>
                
              </ul>
            </div>
            </div>
        </div>
        <div className="rightabout">
          <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
          <Card title="JAVA" image={java}/>
          <Card title="DSA" image={dsa}/>
        </div>
      </div>
    </div>
  );
}

export default About;
