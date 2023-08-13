import React from 'react'
import {motion} from "framer-motion";
import "../styles/Section.scss"
const Section = ({h3,text,hasbtn=true,btntxt,imgsrc,imagesize= "70%",backgrnd,headingclr,textclr,btnclr,btnbgcolor}) => {
  return (
     <section className='section' style={{backgroundColor:backgrnd}}>
        <div >
            <motion.h3 style={{color:headingclr}} initial={{y:"100%",opacity:0}} whileInView={{y:"0",opacity:1}} > {h3}</motion.h3>
            <motion.p initial={{y:"100%",opacity:0}} whileInView={{y:"0",opacity:1,transition:{delay:0.3}}}>{text}</motion.p>
            {
                hasbtn && <motion.button  style={{backgroundColor:btnbgcolor,color:btnclr}} initial={{y:"100%",opacity:0}} whileInView={{y:"0",opacity:1,transition:{delay:0.3,ease:"easeIn"}}}>{btntxt}</motion.button>
            }
            <div>
                <img src={imgsrc} alt="Imgsrc" style={{width:imagesize,}}/>
            </div>

        </div>
     </section>
  )
}

export default Section