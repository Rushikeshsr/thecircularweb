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

const Health = () => {
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
            <h1 className='cover-text'>HEALTH</h1>
        </div>
        <div className='p-5 '>
            <p className='para'>
                In addition to our focus on education and sustainability, The Circular recognizes the importance of healthcare in promoting the well-being and human capital development of individuals within educational institutions. To address this, we collaborate with healthcare providers and institutions to establish a network of quality and affordable healthcare services for our partner educational institutions.            </p>
            <p data-aos="slide-left" data-aos-delay="200" className='para'>
                By working closely with healthcare providers, we aim to ensure that students, faculty, and staff have access to essential healthcare services that meet their needs. This includes preventive care, primary healthcare, and specialized services, as required. Our goal is to create a healthcare ecosystem that supports the overall health and well-being of the educational community.
            </p>
            <p data-aos="slide-right" data-aos-delay="200" className='para'>
                We also understand the significance of measuring the impact of healthcare on human capital outcomes. By conducting research and analysis, we assess the correlation between healthcare interventions and outcomes such as learning, earnings, and life expectancy. This helps us understand the effectiveness of healthcare initiatives and guides our decision-making process to optimize the impact on human capital development.            </p>
            <p data-aos="slide-left" data-aos-delay="200" className='para'>
                Quality and accountability are fundamental principles in delivering healthcare services. At The Circular, we are committed to ensuring the quality of healthcare services provided to our partner educational institutions. We leverage data and feedback to monitor and evaluate the performance of healthcare providers, allowing us to identify areas for improvement and enhance the overall quality of care. Through this approach, we strive to deliver healthcare services that meet the highest standards and promote positive health outcomes.            </p>
            <p data-aos="slide-right" data-aos-delay="200" className='para'>
                Our collaboration with healthcare providers and institutions allows us to establish a network of quality and affordable healthcare services for our partner educational institutions. By measuring the impact of healthcare on human capital outcomes, ensuring quality and accountability, and continuously improving our healthcare services, we contribute to the overall well-being and development of individuals within educational communities.
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
        <div className='section3 d-flex justify-content-center p-5'>
            <div id="story8" name="story8" data-aos="zoom-in" data-aos-delay="200" className='cardbox d-flex'>
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

export default Health;
