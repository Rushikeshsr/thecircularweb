import React,{useState, useEffect} from 'react'
import '../css/health.css'
import health1 from '../images/health1.jpg'
import health2 from '../images/health2.jpg'
import health3 from '../images/health3.jpg'
import health4 from '../images/health4.jpg';
import health5 from '../images/health5.jpg';
import aishwaryak from '../images/aishwaryak.jpg';
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import M_D_Surv_Abhay_DESC from '../images/audio/M_D_Surv_Abhay_DESC.mp3';
import abhay from '../images/abhay.jpg';
import story8 from '../images/story8.jpg';
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
        <div className='cover-image p-5'>
            <h1 className='cover-text'>TRANSPARENCY</h1>
        </div>
        <div className='p-5 '>
            <p data-aos="slide-left" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Transparency in Fostering Quality Human Capital</span><br/>
                At The Circular, we are committed to fostering quality and efficient human capital by establishing transparency at every level of our operations. We believe that transparency is essential for building trust, ensuring accountability, and driving positive outcomes in education, employment, and corporate governance. Through our transparent approach, we aim to create a fair and equitable environment where individuals can thrive and reach their full potential.
            </p>
            <p data-aos="slide-right" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Promoting Ethical Corporate Governance</span><br/>
                Unethical corporate governance practices can hinder the growth and development of human capital. To address this, we have adopted external standards, such as the ISO 37001 Anti-Bribery Management Systems Standard, to establish a clear framework for ethical behavior. We define clear roles for boards and top management in overseeing and implementing anti-corruption programs, ensuring accountability and leadership commitment. By conducting due diligence, monitoring, and auditing, we assess compliance with anti-corruption laws and regulations, promoting transparency and curbing unethical practices. We believe in reporting and disclosing our anti-corruption activities and performance to demonstrate transparency and build trust among our stakeholders.
            </p>
            <p data-aos="slide-left" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Curbing Student Exploitation</span><br/>
                In the realm of education, we are committed to preventing student exploitation and unethical practices. We collaborate with educational institutions to provide a safe and transparent environment for students. Through due diligence, we assess compliance with relevant regulations and identify any risks or red flags. We prioritize the protection of whistleblowers, enabling them to report any suspected or actual corruption cases without fear of retaliation. Our enforcement of sanctions for breaches or violations of our anti-corruption program ensures the integrity and reputation of The Circular.
            </p>
            <p data-aos="slide-right" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Early Interventions for Quality Human Capital</span><br/>
                We recognize that building quality human capital starts at an early stage. Therefore, we focus on basic and early interventions to enhance educational outcomes. We support early childhood education initiatives and remedial education programs to ensure a strong foundation for learning. Our commitment to teacher training and development empowers educators with the necessary skills to deliver quality education. We enhance educational curricula to align with the evolving needs of the workforce, integrating essential skills into the learning experience.<br/>
                Through career guidance, mentorship programs, and industry-academia collaboration, we provide students with guidance, exposure, and practical experiences, facilitating their personal and professional growth. Also, we believe in equal access to education and strive to eliminate financial barriers. Through partnerships with educational institutions and stakeholders, we support scholarships and financial aid programs. Our aim is to provide deserving students, especially those from underprivileged backgrounds, with the financial assistance they need to pursue their educational aspirations. By ensuring financial inclusivity, we promote equality of opportunity and contribute to the development of a diverse and skilled human capital pool.
            </p>
            <p data-aos="slide-left" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Measuring Impact and Driving Future Growth</span><br/>
                Transparency is not only about establishing ethical practices but also about measuring and driving impact. We continuously evaluate the outcomes of our initiatives and collect data to understand the effectiveness of our programs. By analyzing education, health, income, and employment indicators, we assess the quality and efficiency of human capital. This data-driven approach enables us to identify areas for improvement and inform future strategies to enhance human capital development.
                </p>
            <p data-aos="slide-right" data-aos-delay="200" className='para'>
                At The Circular, we are committed to transparency as a guiding principle in our pursuit of fostering quality human capital. By adopting external standards, promoting ethical corporate governance, curbing student exploitation, implementing early interventions, providing scholarships and financial aid, and measuring impact, we strive to create an environment where individuals can thrive and contribute to a sustainable and prosperous future.
            </p>
            
        </div>
        <div className='sec2 p-5'>
            <h1 className='text-head mb-2'>The Circular at Primary Health Centers in Rural Telangana.</h1>
            <div className='images-tag mb-4'>
                <img data-aos="fade-left" data-aos-delay="200" className='col-4 pic' style={{boxShadow:"none", width:"600px"}} src={health1} alt="health1" />
                {/* <img data-aos="fade-down" data-aos-delay="200" className='col-4 pic' style={{boxShadow:"none"}} src={health2} alt="health1" /> */}
                <img data-aos="fade-right" data-aos-delay="200" className='col-4 pic' style={{boxShadow:"none", width:"600px"}} src={health3} alt="health1" />
            </div>
            <div className='d-flex justify-content-center mb-3'>
                <img data-aos="fade-down" data-aos-delay="200" className='col-4 pic' style={{boxShadow:"none", width:"600px"}} src={health2} alt="health1" />
            </div>
            <h1 className='text-head mb-2'>Awareness Campaigns</h1>
            <p className='paragraph'>We've  organized multiple awareness campaigns to make sure that healthcare is accessible across all the regions irrespective of their locality.</p>
            <div className='d-flex justify-content-start'>
                <img data-aos="fade-left" data-aos-delay="200" className='col-12 big-image' style={{boxShadow:"none",marginLeft:"25px"}} src={health4} alt="health4" />
            </div>
            <div className='d-flex justify-content-end'>
            <img data-aos="fade-right" data-aos-delay="200" className='col-12 big-image' style={{boxShadow:"none",marginRight:"25px"}} src={health5} alt="health5" />
            </div>
            

        </div>
        <div id="aishwaryak" name="aishwaryak" className='section3 p-5'>
            <div className='image-text'>
                <div data-aos="flip-right" data-aos-delay="200" className='col-6 box-image'>
                    <img className='person' src={aishwaryak} alt="aishwaryak"/>
                    <p>Aishwarya Karnataki</p>
                </div>
                <p className='col-6 image-para'>
                Aishwarya Karnataki is the Co-Founder of Glovatrix, and the visionary behind the groundbreaking wearable device, 'Fifth Sense.' Aishwarya's passion for bridging the communication gap for deaf individuals has led her on a remarkable journey of innovation and empowerment.
                {showBtn?<button onClick={showContent} className='seemore'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                <button onClick={hideContent} className='seemore' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                </p>    
            </div>
            <div className='col-12 image-text'>
                {show?<p data-aos="fade-down" data-aos-delay="200" className='image-para'>Aishwarya's journey began in 2009 when she encountered a deaf child named Atharva who deeply inspired her. Witnessing the challenges Atharva faced in connecting with others due to the limited understanding of sign language, Aishwarya embarked on a mission to learn sign language herself. As she immersed herself in this new language, Atharva's joy and sense of belonging when she could communicate with him in sign language became the driving force behind her determination to make a difference.<br/><br/>
                Equipped with a degree in Electronics Engineering from Manipal University, Aishwarya chose to channel her knowledge and skills towards creating innovative solutions for the deaf community. Combining her expertise in electronics and her proficiency in sign language, the idea for the Fifth Sense translation gloves was born. These wearable devices aim to revolutionize communication for deaf individuals by translating sign language gestures into speech and text, making sign language more accessible and understandable to everyone.<br/><br/>
                Through Glovatrix, Aishwarya envisions a world where deaf individuals can communicate effectively and confidently, without relying on sign language interpreters. The impact of this innovation is profound, allowing speech-disabled patients to have private conversations with their doctors, empowering deaf individuals to give presentations to large audiences, and enabling parents to hear the words 'I love you' from their deaf children for the first time. Aishwarya's vision is centered on empowering the deaf and speech-impaired community, enabling them to lead independent and dignified lives.<br/><br/>
                Driven by her unwavering commitment to the cause, Aishwarya has worked tirelessly to bring the Fifth Sense device to life. Along her journey, she found a valuable partner in Parikshit, a data scientist with expertise in predictive analysis. Together, they formed Glovatrix, a testament to their shared dedication to transforming the lives of deaf individuals through technological innovation.<br/><br/>
                At Glovatrix, their mission is clear: to facilitate seamless communication between people of all abilities and provide every deaf and speech-impaired person the ability to express themselves and be heard in their natural language - sign language. Aishwarya's passion, combined with Parikshit's data-driven expertise, has propelled Glovatrix to the forefront of assistive technology, making a tangible impact on the lives of deaf individuals worldwide.    
                </p>:null}
            </div>
        </div>
        <div className='section4 p-5'>
            <p className='audio-head'>A snippet from the Global Body Meeting at DESC where Mr. Abhay Chakra Sadineni has initiated a nationwide Medical/Disease Surveillance Project !!</p>          
            <div data-aos="slide-right" data-aos-delay="200" className='d-flex justify-content-center'>
                <div className='audio-tag'>
                    <img className='small-image' src={abhay} alt="abhay"/>
                    <audio src={M_D_Surv_Abhay_DESC} controls/>     
                </div>
            </div>
            
        </div>
        <div id="story8" name="story8" className='section3 d-flex justify-content-center p-5'>
            <div data-aos="zoom-in" data-aos-delay="200" className='cardbox d-flex'>
                <img className='image-card' src={story8} alt="Lakshmamma"/>
                <div className='textbox'>
                    <h1 className='audio-head' style={{fontWeight:"bold",marginBottom:"15px"}}>Lakshmamma</h1>
                    <p className='image-para'>Lakshmamma, a senior citizen residing in rural Telangana, found herself struggling to access the government pension she was entitled to. She lacked the knowledge and understanding of the policies and benefits available to her. Living in ignorance, she was unable to avail the financial support she needed in her later years. Our dedicated team took the time to educate Lakshmamma about the pension schemes and resources available to her. Through personalized guidance and support, we empowered her to navigate the bureaucratic processes. Through community engagement programs and regular interactions, she found solace and a sense of belonging, knowing that she was not alone in her struggles. Lakshmamma found purpose and joy in cultivating organic produce. She not only gained access to her entitled benefits but also discovered a newfound sense of purpose and happiness. She became an active participant in her community, sharing her knowledge and experiences with others who were also seeking support. Lakshmamma's journey exemplifies the transformative power of empowerment and how even the smallest opportunities can create significant positive change in someone's life.</p>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Transparency;
