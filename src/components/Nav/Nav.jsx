import React, { useRef } from 'react'
import {Link} from 'react-scroll';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import './Nav.css'
const Nav = () => {
    let menu=useRef();
    let mobile=useRef();
    // console.log(menu);
    // console.log(mobile);

    useGSAP(()=>{
        let tl=gsap.timeline();
        tl.from("nav h1",{
            y:-100,
            duration:1,
            opacity:0,
        })
        tl.from("nav ul li",{
            y:-100,
            stagger:1
        })

    })
  return (
    <div>
        <nav>
           <h1>PORTFOLIO</h1>
           <ul className='desktopMenu'>
            <Link activeClass="active" to='home' smooth={true} duration={500} spy={true}><li>Home</li></Link>
            <Link activeClass="active" to='about' smooth={true} duration={500} spy={true}><li>About</li></Link>
            <Link activeClass="active" to='projects' smooth={true} duration={500} spy={true}><li>Projects</li></Link>
            <Link activeClass="active" to='contact' smooth={true} duration={500} spy={true}><li>Contact</li></Link>
            </ul> 

            <div className="hamburger" ref={menu} onClick={()=>{
                mobile.current.classList.toggle('activeMobile');
                menu.current.classList.toggle('activeHam');

            }}>
                <div className="ham "></div>
                <div className="ham "></div>
                <div className="ham "></div>
            </div>

            <ul className='mobileMenu' ref={mobile}>
            <Link activeClass="active" to='home' smooth={true} duration={500} spy={true}>Home</Link>
            <Link activeClass="active" to='about' smooth={true} duration={500} spy={true}>About</Link>
            <Link activeClass="active" to='projects' smooth={true} duration={500} spy={true}>Projects</Link>
            <Link activeClass="active" to='contact' smooth={true} duration={500} spy={true}>Contact</Link>
            </ul> 
        </nav>
    </div>
  )
}

export default Nav