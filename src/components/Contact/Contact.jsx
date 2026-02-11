
import "./Contact.css"
import contact from "../../assets/contact.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function Contact() {
    useGSAP(()=>{
    gsap.from(".leftcontact img",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scroll:"body",
        scrub:2,
        // markers:true,
        start: "top 80%",
        end: "top 30%"
      }
    })
    gsap.from("form",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scroll:"body",
        scrub:2,
        // markers:true,
        start: "top 80%",
        end: "top 30%"
      }
    })
    })
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={contact} alt=""/>
        </div>
        <div classname="rightcontact">
            <form action="https://formspree.io/f/xnjbnggn" method="POST">
                <input name="Username" type="text" placeholder="Name"/>
                <input name="Email" type="email" placeholder="Email"/>
                <textarea name="Message" id="textarea" placeholder="Message"></textarea>
                <input type="submit" value="Submit" id="btn"/>

            </form>
        </div>
    </div>
  )
}

export default Contact