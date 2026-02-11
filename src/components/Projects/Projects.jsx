
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../Card/Card'
import "./Projects.css"
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
// import va from "../../assets/va.png";
// import fw from "../../assets/fw.png";

function Projects() {
  useGSAP(()=>{
   gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: "#para",
        scroll:"body",
        scrub:2,
        // markers:true,
        start: "top 80%",
        end: "top 30%"
      }
    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: ".slider",
        scroll:"body",
        scrub:2,
        // markers:true,
        start: "top 80%",
        end: "top 30%"
      }
    })
  })

  return (
    <div id="projects">
        <h1 id="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>
        <div className='slider'>
            <Card title="VIRTUAL ASSISTANT" />
            <Card  title="AI POWERED FITNESS WEBSITE"/>
            <Card  title="VIRTUAL ASSISTANT"/>
            <Card  title="VIRTUAL ASSISTANT"/>
        </div>

    </div>
  )
}

export default Projects