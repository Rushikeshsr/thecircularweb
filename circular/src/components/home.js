import React,{useEffect} from 'react'
import '../css/home.css'
import Aos from 'aos'
import indianemb from '../images/indianemb.png';
import telangana from '../images/telangana.png';
import homeVid from '../images/homeVid.mp4';
import {Link} from 'react-router-dom';
import sridharp from '../images/sridharp.jpg'
import ripal from '../images/ripal.jpg'
import aishwaryak from '../images/aishwaryak.jpg'
import pankhurij from '../images/pankhurij.jpg'
import sharitijas from '../images/sharitijas.jpg'
import vasudevv from '../images/vasudevv.jpg'
import { HashLink } from 'react-router-hash-link';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:1000,easing:'ease-in'});
  },[]);
  return (
    <>
    <div className='main'>
      <div className='section1 col-12'> 
          <div className='overlay'></div>
          <video className='video' src={homeVid} loop autoPlay muted/>
          <div className='content d-flex flex-column justify-content-center'>
            <p>
            Welcome to <span style={{color:"#00ff0d"}}>The Circular</span>, <br/>
            where we strive to create sustainable livelihood opportunities for <br/>
            the local communities in a way that promotes eco-friendly practices<br/> and reduces environmental impact.
            Our mission is to build a thriving <br/>
            local economy that works for everyone, while also protecting <br/>
            the environment and natural resources that make our region so special.
            </p>
          </div>   
      </div>
      <div className='p-5'>
            <p data-aos="fade-up" className='para'>
            Our journey began with a shared vision, a deep sense of purpose, and an unwavering commitment to creating a better world. It was the realization that our planet and its inhabitants were facing unprecedented challenges that fueled our passion to make a difference. We were driven by a burning desire to transform the way we interact with the environment, our health, and each other.
            </p>
            <p data-aos="flip-left" data-aos-delay="400" style={{"color":"#00ff0d",fontSize:'20px',textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000",fontWeight:"bold"}} className='para'>
              Reached 12000+ students, 400+ farmers, 1000+ Middle-Class communities
            </p>
            <p data-aos="fade-left" data-aos-delay="400" className='para'>
            Why focus on “Middle-Class Students and Communities”? This is the question that we were asked many times. In a society that often celebrates the extremes of poverty and wealth, the struggles faced by middle-class students in India often go unnoticed. These students find themselves in a constant battle, navigating a landscape of societal expectations and financial limitations. They are the unsung heroes, fighting against the odds to pursue their dreams and aspirations. Middle-class students in India occupy a unique position, neither in abject poverty nor enjoying the privileges of the wealthy. They face the challenge of pursuing their education without the safety net of financial aid or scholarships that are often available to low-income students. They also lack the vast resources and connections that students from affluent backgrounds may have at their disposal. This places them in a precarious situation, where they must work harder and make sacrifices to afford their education.
            </p>
            <p data-aos="fade-right" data-aos-delay="400" className='para'>
              In addition to financial struggles, middle-class students in India often face the burden of familial responsibilities. Many come from families where parents may be struggling to make ends meet or facing health issues. They may have younger siblings who depend on them for care and support. These responsibilities demand their time and energy, leaving little room for personal growth or self-care. Yet, these students rise to the occasion, demonstrating immense strength and resilience.
            </p>
            <p data-aos="fade-left" data-aos-delay="400" className='para'>
              So, motivated by the urgent need to address pressing issues such as climate change, resource depletion, and societal inequities, our leadership team embarked on a mission to foster positive change. We firmly believe that by embracing the principles of circular economy, harnessing the power of nature, advancing medicine, and promoting sustainable hospitality, we can pave the way for a brighter and more sustainable future. 
            </p>
            <p data-aos="fade-down" data-aos-delay="400" className='para'>
              Our journey has been guided by emotions - a deep sense of responsibility, empathy for our fellow beings, and an unyielding love for our planet. We are driven by the profound belief that every individual has the power to make a difference, and it is through collective action that we can bring about transformative change.
            </p>
       </div>
      <div className='section2 p-3'>
        <div className='text-center'>
         <h1 className='heading'>STORIES</h1>
         <hr className='line'/>
        </div>
        <div className='image-row'>
          <div className='col-4 d-flex justify-content-center'>
            <div className='card image story1'>
              <h2 className='name'>Neelmani</h2>
            </div>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <div className='card image story2'>
              <h2 className='name'>Chetan</h2>
            </div>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <div className='card image story3'>
              <h2 className='name'>Sujana</h2>
            </div>
          </div>
        </div>
        <div className='image-row'>
          <div className='col-4 d-flex justify-content-center'>
            <div className='card image story4'>
              <h2 className='name'>Padmini</h2>
            </div>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <div className='card image story5'>
              <h2 className='name'>Jamuna</h2>
            </div>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <div className='card image story6'>
              <h2 className='name'>Prameela</h2>
            </div>
          </div>

        </div>
        <div className='image-row'>
          <div className='col-4 d-flex justify-content-center'>
            <div className='card image story7'>
              <h2 className='name'>Chandrakala</h2>
            </div>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <HashLink smooth style={{textDecoration:"none"}} name="story8" to='/humancapital/health#story8'>
              <div className='card image story8'>
                <h2 className='name'>Lakshmamma</h2>
              </div>
            </HashLink>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <div className='card image story9'>
              <h2 className='name'>Yadamma</h2>
            </div>
          </div>

        </div>
        <div className='image-row'>
          <div className='col-8 d-flex justify-content-center'>
              <div className='image2 story10'>
                <h2 className='name'>Anitha</h2>
              </div>
            </div>
        </div>
      </div>
      <div className='section3 p-4'>
        <h2 data-aos="fade-right" className='sec3-head '>Triumphing over Challenges</h2>
         <p data-aos="fade-left" data-aos-delay="200" className='para'>Perseverance is the common thread that runs through the narratives of these professionals. Through sheer determination and an unwavering commitment to their dreams, they not only conquered their challenges but also emerged as stronger, wiser, and more resilient sustainability advocates. Their stories serve as a reminder that success often lies just beyond the realm of persistence.</p> 
        <div className='text-center  mt-4'>
            <h1 className='sec2-head'>SUSTAINABILITY ADVOCATES</h1>
            <hr className='line' style={{'width':'250px'}}/>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <div className='col-4 image-box'>
            <img className='persons' src={sridharp} alt="sridharp"/>
            <p>Sridhar Pabbisetty</p>
          </div>
          <div className='col-4 image-box'>
            <img className='persons' src={ripal} alt="ripal"/>
            <p>Ripal Desai</p>
          </div>
          <div className='col-4 image-box'>
            <img className='persons' src={vasudevv} alt="vasudevv"/>
            <p>Vasudev Vangara</p>
          </div>
         </div> 
         <div className='d-flex justify-content-center mt-4'>
          <HashLink to="/humancapital/health#aishwaryak" style={{textDecoration:"none"}} name="aishwaryak" smooth> 
            <div className='col-4 image-box'>
              <img className='persons' src={aishwaryak} alt="aishwaryak"/>
              <p style={{color:"black"}}>Aishwarya Karnataki</p>
            </div>
          </HashLink>
          <div className='col-4 image-box'>
            <img className='persons' src={sharitijas} alt="shartijas"/>
            <p>Sharitija Saxena</p>
          </div>
          <div className='col-4 image-box'>
            <img className='persons' src={pankhurij} alt="pankhurij"/>
            <p>Pankhuri Jain</p>
          </div>
        </div>
      </div>
      <div  className='section2 p-3'>
        <div data-aos="zoom-in" data-aos-delay="200" id="krishna" className='image-row'>
            <div className='col-8 d-flex justify-content-center'>
                <div style={{height:"420px"}} className='image2 story11'>
                  <h2 className='name'>Krishna</h2>
                </div>
              </div>
          </div>
        </div>
      <div className='section4 p-3'>
        <div className='text-logo mb-4'>
          <img className='logo' src={indianemb} alt="indianemblem"/>
          <p className='para'>Recognized by Government of India NGO Darpan. Unique ID: TS/2023/0345218.<br/>
          Under the Registrar of Societies, Government of Telangana</p>
          <img className='logo' src={telangana} alt="telangana logo"/>
        </div>
        <div className='navigator mb-2'>
          <Link to="/focus"><button className='button'>Focus</button></Link>
          <Link to="/partnerships"><button className='button'>Partnerships</button></Link>
          <Link to="/humancapital"><button className='button'>Human Capital</button></Link>
          <Link to="/aboutus"><button className='button'>About Us</button></Link>
          <Link to="/contactus"><button className='button'>Contact Us</button></Link>
          <Link to="/resources"><button className='button'>Impact Data</button></Link>
        </div>
        
      </div>
    </div>
    </>
    
  )
}

export default Home;