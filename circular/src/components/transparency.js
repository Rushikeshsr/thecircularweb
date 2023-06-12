import React,{useState,useEffect} from 'react'
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import '../css/health.css'
import Aos from 'aos';

const Transparency = () => {
    const [show,setShow]=useState(false);
    const [showBtn,setBtn]=useState(true);
    const showContent=()=>{
        setShow(true)
        setBtn(false)
    }
    const hideContent=()=>{
        setShow(false)
        setBtn(true)
    }

    useEffect(()=>{
        Aos.init({duration:1000, easing:"ease-in"})
    },[])

  return (
    <>
        <div className='cover-imageT p-5'>
            <h1 className='cover-text' style={{color:"aliceblue",textShadow:"2px 2px 20px black"}}>TRANSPARENCY</h1>
        </div>
        <div className='p-5 '>
            <p className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Transparency in Fostering Quality Human Capital</span><br/>
                At The Circular, we are committed to fostering quality and efficient human capital by establishing transparency at every level of our operations. We believe that transparency is essential for building trust, ensuring accountability, and driving positive outcomes in education, employment, and corporate governance. Through our transparent approach, we aim to create a fair and equitable environment where individuals can thrive and reach their full potential.
            </p>
            <p data-aos="fade-right" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Promoting Ethical Corporate Governance</span><br/>
                Unethical corporate governance practices can hinder the growth and development of human capital. To address this, we have adopted external standards, such as the ISO 37001 Anti-Bribery Management Systems Standard, to establish a clear framework for ethical behavior. We define clear roles for boards and top management in overseeing and implementing anti-corruption programs, ensuring accountability and leadership commitment. By conducting due diligence, monitoring, and auditing, we assess compliance with anti-corruption laws and regulations, promoting transparency and curbing unethical practices. We believe in reporting and disclosing our anti-corruption activities and performance to demonstrate transparency and build trust among our stakeholders.
            </p>
            <p data-aos="fade-left" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Curbing Student Exploitation</span><br/>
                In the realm of education, we are committed to preventing student exploitation and unethical practices. We collaborate with educational institutions to provide a safe and transparent environment for students. Through due diligence, we assess compliance with relevant regulations and identify any risks or red flags. We prioritize the protection of whistleblowers, enabling them to report any suspected or actual corruption cases without fear of retaliation. Our enforcement of sanctions for breaches or violations of our anti-corruption program ensures the integrity and reputation of The Circular.
            </p>
            <p data-aos="fade-right" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Early Interventions for Quality Human Capital</span><br/>
                We recognize that building quality human capital starts at an early stage. Therefore, we focus on basic and early interventions to enhance educational outcomes. We support early childhood education initiatives and remedial education programs to ensure a strong foundation for learning. Our commitment to teacher training and development empowers educators with the necessary skills to deliver quality education. We enhance educational curricula to align with the evolving needs of the workforce, integrating essential skills into the learning experience.<br/>
                Through career guidance, mentorship programs, and industry-academia collaboration, we provide students with guidance, exposure, and practical experiences, facilitating their personal and professional growth. Also, we believe in equal access to education and strive to eliminate financial barriers. Through partnerships with educational institutions and stakeholders, we support scholarships and financial aid programs. Our aim is to provide deserving students, especially those from underprivileged backgrounds, with the financial assistance they need to pursue their educational aspirations. By ensuring financial inclusivity, we promote equality of opportunity and contribute to the development of a diverse and skilled human capital pool.
            </p>
            <p data-aos="fade-left" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Measuring Impact and Driving Future Growth</span><br/>
                Transparency is not only about establishing ethical practices but also about measuring and driving impact. We continuously evaluate the outcomes of our initiatives and collect data to understand the effectiveness of our programs. By analyzing education, health, income, and employment indicators, we assess the quality and efficiency of human capital. This data-driven approach enables us to identify areas for improvement and inform future strategies to enhance human capital development.
                </p>
            <p data-aos="fade-right" data-aos-delay="200" className='para'>
                At The Circular, we are committed to transparency as a guiding principle in our pursuit of fostering quality human capital. By adopting external standards, promoting ethical corporate governance, curbing student exploitation, implementing early interventions, providing scholarships and financial aid, and measuring impact, we strive to create an environment where individuals can thrive and contribute to a sustainable and prosperous future.
            </p>
        </div>
        <div className='section2 p-5'>
            <div className='text-center m-3'>
                <img className='medpich m-1' data-aos="fade-left" src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1686024346/Circular%20website/trans3_qecc3m.jpg"} alt='cloudinery trans3'></img>
                <img className='medpich m-1' data-aos="fade-right"  src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1686024346/Circular%20website/trans4_aplvpk.jpg"} alt='cloudinery trans4'></img>
                <img className='medpich m-2' data-aos="fade-right" style={{width:"400px",height:"400px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1686025345/Circular%20website/trans1_pe3ivt.jpg"} alt='cloudinery tans1'></img>
            </div>
        </div>
        <div id="sridhar" name="sridhar" className='section3 p-5'>
            <div className='image-text'>
                <div className='col-6 box-image'>
                    <img data-aos="flip-left" className='person' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849394/Circular%20website/sridharp_asyeye.jpg" alt="sridhar"/>
                    <p>Sridhar Pabbisetty</p>
                </div>
                <p className='col-6 image-para'>
                    Sridhar Pabbisetty is a dynamic professional with a diverse background and extensive experience in various fields, including public policy, governance, entrepreneurship, and urban development. He has held key positions in renowned institutions and organizations, contributing significantly to their growth and success. With a deep understanding of the Indian governance landscape, Sridhar has made significant contributions to inclusive growth, impact investing, enterprise development, urban poverty alleviation, and the informal economy.
                    {showBtn?<button onClick={showContent} className='seemore'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                    <button onClick={hideContent} className='seemore' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                </p>  
            </div>
            <div className='col-12 image-text'>
                {show?<p data-aos="fade-down" className='image-para'>Currently, Sridhar holds the position of Dean at MIT School of Government in Pune. Also, he is the Founding Director of Kautilya School of Public Policy at GITAM University, where he leads the establishment of a premier public policy school that contextualizes global advancements in public policy for India.<br/><br/>
                Following his education, Sridhar embarked on a journey marked by continuous learning and impactful contributions. He has held various leadership roles and played instrumental roles in several organizations and initiatives.<br/><br/>
                Prior to his current roles, Sridhar held the position of Chief Executive Officer at Namma Bengaluru Foundation, where he led the organization in setting strategies and visions. He focused on creating an organizational culture centered around high performance, innovation, and excellence while driving transformative changes within the organization.<br/><br/>
                He actively engaged with the board of directors, advisors, and trustees to ensure organizational transformation and developed a robust fundraising ecosystem aligned with the organization's vision and on-ground impact.<br/><br/>
                Sridhar's commitment to social impact is evident in his involvement with various initiatives and organizations. He served as a member of the Advisory Board for the Acara Impact Entrepreneurship program at the University of Minnesota, mentoring global impact entrepreneurship teams on inclusive growth and governance.<br/><br/>
                He was also a Co-Founder of the Tour of Nilgiris and held executive positions at the Ride A Cycle Foundation, promoting cycling and its benefits.
                </p>:null}
            </div>  
        </div>
    </>
    
  )
}

export default Transparency;
