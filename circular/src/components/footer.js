import React from 'react'
import '../css/footer.css'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    const instaLink="https://instagram.com/the_circular_india?igshid=YmMyMTA2M2Y=";
    const linkedIn="https://www.linkedin.com/company/thecircular/";
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 footer'>
                <p style={{marginLeft:"25px"}}>
                    The Circular is fully committed to advancing<br/> Sustainability. 
                    All the activities and partnerships <br/> are aligned with our vision and mission. <br/><br/>
                    <span style={{color:"#00ff0d"}}>The Circular &copy; 2023. All Rights Reserved.</span>
                </p>
                <div style={{marginRight:"25px"}}>
                    <a id="res" href={instaLink} target="_blank" rel="noreferrer"><FaInstagram style={{marginRight:"10px",fontSize:'20px'}}/></a>
                    <a id="res" href={linkedIn} target="_blank" rel="noreferrer"><FaLinkedinIn style={{fontSize:'20px'}}/></a> <br/><br/>
                    <a href='/aboutus/impact' target='_blank' id="res" className='news' rel="noreferrer">
                       <p>Resources</p> 
                    </a> 
                    <a href='https://descworld.org/tidings/' target='_blank' id="res" className='news' rel="noreferrer">
                        <p> News</p>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer;