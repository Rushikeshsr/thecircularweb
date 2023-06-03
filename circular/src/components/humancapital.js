import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Education from '../images/Education.jpg';
import Health from '../images/Health.jpg';
import Skills from '../images/Skills.jpg';
import Quality from '../images/Quality.jpg';
import humanCapitalVid from '../images/humanCapitalVid.mp4';
import Transparency from '../images/Transparency.jpg'
import { HashLink } from 'react-router-hash-link';
import Aos from 'aos';

const HumanCapital = () => {
  useEffect(()=>{
    Aos.init({duration:1000, easing:"ease-in"})
  },[])
  return (
   <>
   <div className='main'>
      <div className='section1'> 
          <div className='overlay'></div>
          <video className='video' src={humanCapitalVid} loop autoPlay muted/>
          <div className='content d-flex flex-column justify-content-center'>
            <p style={{fontSize:"40px"}}>
                Welcome to <br/>
                <span style={{color:"#00ff0d"}}>The Circular's <br/>
                HUMAN CAPITAL</span><br/>
            </p>
          </div>   
       </div>
       <div className='sec2 p-5'>
        <p className='paragh'>
            In today's rapidly evolving world, where knowledge, skills, and innovation drive economies, the concept of human capital has gained paramount importance. The Circular recognizes the significance of human capital as a crucial vertical that shapes the sustainable development agenda. By focusing on the development, empowerment, and well-being of individuals, human capital becomes a catalyst for economic growth, social progress, and environmental sustainability.
        </p>
        <p data-aos="fade-left" data-aos-delay="200" className='paragh'>
            The Circular's Human Capital vertical was initiated to address the skills gap and establish equity in employment opportunities. As the number of new companies increased, unethical business practices and fraud in hiring became prevalent, leading to detrimental effects on students. Moreover, there were concerns about unethical corporate governance. To tackle these challenges, The Circular introduced the co-hiring model for local businesses.
        </p>
        <p data-aos="fade-right" data-aos-delay="200" className='paragh'>
            The focus on "Middle-Class Students and Communities" stems from the recognition that their struggles often go unnoticed in a society that tends to celebrate extremes of poverty and wealth. Middle-class students in India face unique challenges as they navigate societal expectations and financial limitations. They find themselves in a constant battle to pursue their dreams and aspirations, often without the safety net of financial aid or scholarships available to low-income students. Unlike their affluent peers, they lack extensive resources and connections that could aid their educational journey. This places them in a precarious situation, where they must work harder and make sacrifices to afford their education.
        </p>
        <p data-aos="fade-left" data-aos-delay="200" className='paragh'>
            Beyond financial struggles, middle-class students in India also bear the burden of familial responsibilities. Many come from families where parents are struggling to make ends meet or facing health issues. They often shoulder the responsibility of caring for younger siblings, leaving little time for personal growth or self-care. Despite these challenges, these students exhibit remarkable strength and resilience, overcoming obstacles to pursue their education and build a better future.
        </p>
        <p data-aos="fade-right" data-aos-delay="200" className='paragh'>
            Motivated by the urgent need to address pressing issues such as climate change, resource depletion, and societal inequities, The Circular's leadership team embarked on a mission to foster positive change. Embracing the principles of circular economy, harnessing the power of nature, advancing medicine, and promoting sustainable hospitality are key focus areas in this journey. By taking action in these domains, The Circular aims to create a brighter and more sustainable future for all.
        </p>
        <p data-aos="fade-left" data-aos-delay="200" className='paragh'>
            The driving force behind The Circular's initiatives is a deep sense of responsibility, empathy for fellow beings, and an unwavering love for our planet. The belief that every individual has the power to make a difference is at the core of our efforts. Through collective action and collaboration, we strive to bring about transformative change and create a world where sustainability, equity, and compassion thrive.
        </p>
       </div>
       <div className='sec3 p-3'>
            <div className='text-center'>
                <h1 className='sec2-head'>KEY AREAS</h1>
                <hr className='line'/>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Education</h1> <br/>
                        <p>Education lies at the heart of our Human Capital initiative. We recognize <br/>
                        that quality education is not just a fundamental right but also a transformative <br/>
                        force that can break the cycle of poverty and drive positive change. We collaborate <br/>
                        with passionate educators, schools, and educational institutions to promote equitable <br/>
                        access to quality education, nurture critical thinking and creativity, and equip <br/>
                        learners with the skills needed to thrive in a rapidly changing world. By fostering a <br/>
                        culture of lifelong learning, we aim to empower individuals to reach their full potential <br/>
                         and become agents of positive change.
                        </p> <br/>
                        <Link to='/humancapital/education'><button className='btnlr'>Learn More</button></Link>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200">
                        <img className='pic' src={Education} alt="education"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":2}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Skills</h1> <br/>
                        <p>Skills development is another key pillar of our Human Capital vertical.<br/>
                         We partner with industry experts, vocational training centers, and skill development<br/>
                        organizations to bridge the gap between education and employment. Through targeted training<br/>
                        programs and capacity-building initiatives, we equip individuals with the skills and <br/>
                        knowledge required for sustainable livelihoods. By aligning skill development with<br/>
                        the needs of the job market, we aim to enhance employability, promote entrepreneurship,<br/>
                        and drive economic growth.
                        </p> <br/><br/>
                        <Link to='/humancapital/skills'><button className='btnlr'>Learn More</button></Link>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":1}}>
                        <img className='pic' src={Skills} alt="Skills"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":1}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Health</h1> <br/>
                        <p>Health and well-being are integral components of human capital. <br/>
                        We prioritize the physical, mental, and emotional well-being of individuals,<br/>
                        recognizing that a healthy workforce and community are essential for sustainable <br/>
                        development. We collaborate with healthcare professionals, community health workers,<br/>
                        and organizations to promote preventive healthcare, improve access to quality <br/>
                        healthcare services, and raise awareness about key health issues. By prioritizing health, <br/>
                        we strive to create thriving communities where individuals can lead productive and fulfilling lives.
                        </p> <br/><br/>
                        <HashLink smooth to='/humancapital/health#top'><button className='btnlr'>Learn More</button></HashLink>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":2}}>
                        <img className='pic' src={Health} alt="Health"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":2}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Quality</h1> <br/>
                        <p>Addressing the quality of employment, imparting relevant skills, and bridging<br/>
                        the industry gap are critical for enhancing human capital in India. By prioritizing <br/>
                        job quality, promoting skill development, and aligning educational and training <br/> 
                        programs with industry needs,India can nurture a skilled workforce that meets <br/>
                        the demands of a dynamic and evolving economy.
                        </p> <br/><br/>
                        <Link to='/humancapital/quality'><button className='btnlr'>Learn More</button></Link>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":1}}>
                        <img className='pic' src={Quality} alt="Quality"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":1}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Transparency</h1> <br/>
                        <p>Transparency in hiring, employment, governance, and startups is vital<br/>
                         for building trust, promoting fairness, and fostering sustainable socio-economic <br/>
                          development. By embracing transparency in these areas, individuals, organizations,<br/>
                        and societies can create a more equitable, accountable, and prosperous future.
                        </p> <br/><br/>
                        <Link to='/humancapital/transparency'><button className='btnlr'>Learn More</button></Link>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":2}}>
                        <img className='pic' src={Transparency} alt="Hepatology"/>
                    </div>
                </div>
            </div>

       </div>
    </div>
   </>
  )
}

export default HumanCapital;