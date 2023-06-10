import React,{useEffect} from 'react'
import '../css/home.css'
import Aos from 'aos'
import { HashLink } from 'react-router-hash-link';
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(()=>{
    Aos.init({duration:1000,easing:'ease-in'});
  },[]);
  return (
    <>
      <div className='section1'> 
          <div className='overlay'></div>
          <video className='video' src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1685849388/Circular%20website/homeVid_pbjtyk.mp4" loop autoPlay muted/>
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
            <p className='para'>
            At The Circular, we began our journey with a simple yet powerful mission: to clean communities, promote sustainable well-being, and combat the outbreak of diseases caused by unhealthy environments. What started as a humble initiative has now grown into a comprehensive organization making a significant impact on numerous lives. It was the realization that our planet and its inhabitants were facing unprecedented challenges that fueled our passion to make a difference. We were driven by a burning desire to transform the way we interact with the environment, our health, and each other.
            </p>
            <p data-aos="flip-left" data-aos-delay="100" style={{"color":"#00ff0d",fontSize:'20px',textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000",fontWeight:"bold"}} className='para'>
              Reached 12000+ students, 400+ farmers, 1000+ Communities

            </p>
            <p className='para'>
            Sustainability is at the heart of everything we do. We believe that by adopting circular economy principles and fostering partnerships, we can create a positive and lasting impact on the environment and society.
            </p>
            <p className='para'>
            Our journey has been guided by emotions - a deep sense of responsibility, empathy for our fellow beings, and an unyielding love for our planet. We are driven by the profound belief that every individual has the power to make a difference, and it is through collective action that we can bring about transformative change.
            </p>
       </div>
       <div className='section4 p-5'>
          <div className='d-flex justify-content-center'>
              <iframe src="https://www.youtube.com/embed/yflcBF8sH8E?rel=0"
               width={1000} height={500} title='The Circularstellar' 
               allowFullScreen allow='autoplay; encrypted-media'></iframe>
            </div>
          <div className='text-center mt-4'>
            <h1 className='heading' style={{color:"black"}}>CURRENT RESEARCH</h1>
            <hr className='line' style={{width:"150px", borderColor:"aliceblue"}}/>
          </div>
          <p className='para'>
            Light pollution, the intrusion of artificial light into our night sky, poses a growing threat to the delicate balance of nature and our well-being. At The Circular, we are dedicated to elucidating on this pressing issue and spearheading initiatives to mitigate its adverse effects. Light pollution transcends the boundaries of astronomy, impacting the lives of individuals who are unaware of its profound implications. Excessive and misdirected lighting disrupts the natural day-night cycles that regulate our lives, leading to sleep disturbances and reduced melatonin levels in our brains. This interruption in our circadian rhythms has far-reaching consequences for our overall health and well-being. Moreover, the energy consumed by unnecessary and inefficient lighting contributes to environmental degradation and wasteful economic practices.
          </p>
          <div className='text-center'>
            <img className='medpich' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685859666/Circular%20website/light_pollution_r95cnj.jpg" alt="lightpollution"/>
           </div> 
          <p className='para'>
            <span style={{fontSize:"20px",fontWeight:"bold"}}>Causes and Consequences</span><br/>
            <span style={{fontWeight:"bold"}}>Inefficient Lighting </span>: Poorly designed or placed streetlights and floodlights, along with the widespread use of blue-white LEDs, contribute to light pollution. This not only consumes excessive energy but also affects human health, disrupting our sleep patterns and affecting our overall physiology.
          </p>
          <p className='para'>
            <span style={{fontWeight:"bold"}}>Ecological Imbalance </span>: Light pollution disrupts the natural behaviors of wildlife in both urban and rural areas. Nocturnal species suffer from altered feeding and breeding patterns, impacting entire ecosystems. Migration patterns of birds and other creatures are also disrupted, leading to potential population declines.
          </p>
          <p className='para'>
            <span style={{fontWeight:"bold"}}>Cultural Heritage </span>: Indigenous communities, deeply connected to the night sky as part of their cultural identity, face the loss of this intangible heritage. Light pollution obscures their ability to observe and engage with celestial events, eroding their traditional knowledge and spiritual practices.
          </p>
          <p className='para'>
            <span style={{fontWeight:"bold"}}>Economic Implications </span>: The unnecessary wastage of energy due to light pollution translates into a significant economic burden. By curbing light pollution, we can reduce energy consumption, lower costs, and redirect resources toward more sustainable and meaningful endeavors.
          </p>
          <div className='d-flex justify-content-center'>
            <img className='medpich m-2' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685861010/Circular%20website/homeImage_bgo7at.jpg" alt="circadian"/>
            <img className='medpich m-2' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685859670/Circular%20website/nocturnal_xlx0v2.jpg" alt="nocturnal"/>
           </div> 
          <p className='para'>
            <span style={{fontSize:"20px",fontWeight:"bold"}}>Solutions</span><br/>
            <span style={{fontWeight:"bold"}}>Responsible Outdoor Lighting </span>: Embrace the Five Principles for Responsible Outdoor Lighting by DarkSky International. Consider factors like light direction, shielding, and appropriate light intensity to minimize light spillage and glare.
          </p>
          <p className='para'>
            <span style={{fontWeight:"bold"}}>Transition to Warm LEDs </span>: Replace blue-white LEDs with warm (less than 3000K) LEDs, which are energy-efficient and less disruptive to human and animal biology. This transition can have a significant impact on reducing light pollution.
          </p>
          <p className='para'>
            <span style={{fontWeight:"bold"}}>Community Engagement </span>: Foster conversations about light pollution in your community. Raise awareness of its effects on human health, wildlife, and cultural heritage. Encourage responsible lighting practices among neighbors and local businesses.
          </p>
          <p className='para'>
            <span style={{fontWeight:"bold"}}>Astronomical Education </span>: Promote educational programs that highlight the importance of dark skies and celestial observations. Categorize educational resources to increase awareness about the connection between sunspot activity, solar phenomena, and their impact on our energy systems and climate dynamics.
          </p>
          <p className='para'>
            <span style={{fontWeight:"bold"}}>Collaboration and Advocacy </span>: Partner with observatories, astrophotographers, amateur astronomers, and relevant stakeholders to advocate for the protection of dark skies. Support initiatives that aim to reduce light pollution and promote sustainable lighting practices.
          </p>
          <p data-aos="flip-left" data-aos-delay="100" className='para text-center' style={{fontSize:"20px",fontWeight:"bold"}}>
            Together, let us reclaim our dark skies, inspire scientific curiosity,<br/>
            and establish healthy and sustainable communities.
          </p>
          <div className='d-flex justify-content-center'>
            <img className='medpich m-2' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685859867/Circular%20website/75587568_732265917278541_7891593705902047232_n_wpuigk.jpg" alt="together1"/>
            <img className='medpich m-2' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685859865/Circular%20website/326721101_3368144893464345_705687219525769447_n_vgsvfm.jpg" alt="together2"/>
           </div> 
       </div>
      <div className='section2 p-3'>
        <div className='text-center'>
         <h1 className='heading'>PAST STORIES</h1>
         <hr className='line'/>
        </div>
        <div className='image-row'>
          <div className='col-4 d-flex justify-content-center'>
            <HashLink smooth style={{textDecoration:"none"}} name="neelmani" to='/humancapital/skills#neelmani'>
              <div className='card image story1'>
                <h2 className='name'>Neelmani</h2>
              </div>
            </HashLink>  
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <HashLink smooth style={{textDecoration:"none"}} name="chetan" to='/humancapital/quality#chetan'>
              <div className='card image story2'>
                <h2 className='name'>Chetan</h2>
              </div>
            </HashLink>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <HashLink smooth style={{textDecoration:"none"}} name="sujana" to='/humancapital/quality#sujana'>
              <div className='card image story3'>
                <h2 className='name'>Sujana</h2>
              </div>
            </HashLink>  
          </div>
        </div>
        <div className='image-row'>
          <div className='col-4 d-flex justify-content-center'>
            <HashLink smooth style={{textDecoration:"none"}} name="padmini" to='/humancapital/quality#padmini'>
              <div className='card image story4'>
                <h2 className='name'>Padmini</h2>
              </div>
            </HashLink> 
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <HashLink smooth style={{textDecoration:"none"}} name="jamuna" to='/humancapital/skills#jamuna'>
              <div className='card image story5'>
                <h2 className='name'>Jamuna</h2>
              </div>
            </HashLink> 
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <HashLink smooth style={{textDecoration:"none"}} name="story6" to='/focus/nature#story6'>
              <div className='card image story6'>
                <h2 className='name'>Prameela</h2>
              </div>
            </HashLink> 
          </div>

        </div>
        <div className='image-row'>
          <div className='col-4 d-flex justify-content-center'>
            <HashLink smooth style={{textDecoration:"none"}} name="story7" to='/focus/nature#story7'>
              <div className='card image story7'>
                <h2 className='name'>Chandrakala</h2>
              </div>
            </HashLink>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <HashLink smooth style={{textDecoration:"none"}} name="lakshmamma" to='/humancapital/health#lakshmamma'>
              <div className='card image story8'>
                <h2 className='name'>Lakshmamma</h2>
              </div>
            </HashLink>
          </div>
          <div className='col-4 d-flex justify-content-center'>
          <HashLink smooth style={{textDecoration:"none"}} name="yadamma" to='/humancapital/quality#yadamma'>
            <div className='card image story9'>
              <h2 className='name'>Yadamma</h2>
            </div>
            </HashLink>
          </div>

        </div>
        <HashLink smooth style={{textDecoration:"none"}} name="anitha" to='/humancapital/quality#anitha'>
          <div className='image-row'>
            <div className='col-8 d-flex justify-content-center'>
                <div className='image2 story10'>
                  <h2 className='name'>Anitha</h2>
                </div>
            </div> 
          </div>
        </HashLink> 
      </div>
      <div className='section3 p-4'>
        <h2 data-aos="fade-right" className='sec3-head '>Triumphing over Challenges</h2>
         <p data-aos="fade-left" data-aos-delay="200" className='para'>Perseverance is the common thread that runs through the narratives of these professionals. Through sheer determination and an unwavering commitment to their dreams, they not only conquered their challenges but also emerged as stronger, wiser, and more resilient sustainability advocates. Their stories serve as a reminder that success often lies just beyond the realm of persistence.</p> 
        <div className='text-center  mt-4'>
            <h1 className='sec2-head'>SUSTAINABILITY ADVOCATES</h1>
            <hr className='line' style={{'width':'250px'}}/>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <HashLink to="/humancapital/transparency#sridhar" style={{textDecoration:"none"}} name="sridhar" smooth> 
            <div className='col-4 image-box'>
              <img className='persons' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849394/Circular%20website/sridharp_asyeye.jpg"} alt="sridharp"/>
              <p style={{color:"black"}}>Sridhar Pabbisetty</p>
            </div>
          </HashLink>
          <div className='col-4 image-box'>
            <img className='persons' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849389/Circular%20website/ripal_h77oin.jpg"} alt="ripal"/>
            <p style={{color:"black"}}>Ripal Desai</p>
          </div>
          <div className='col-4 image-box'>
            <img className='persons' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849395/Circular%20website/vasudevv_sodpzp.jpg"} alt="vasudevv"/>
            <p style={{color:"black"}}>Vasudev Vangara</p>
          </div>
         </div> 
         <div className='d-flex justify-content-center mt-4'>
          <HashLink to="/humancapital/health#aishwaryak" style={{textDecoration:"none"}} name="aishwaryak" smooth> 
            <div className='col-4 image-box'>
              <img className='persons' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849362/Circular%20website/aishwaryak_vtp2qg.jpg"} alt="aishwaryak"/>
              <p style={{color:"black"}}>Aishwarya Karnataki</p>
            </div>
          </HashLink>
          <div className='col-4 image-box'>
            <img className='persons' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849393/Circular%20website/sharitijas_lbtg2h.jpg"} alt="shartijas"/>
            <p style={{color:"black"}}>Sharitija Saxena</p>
          </div>
          <div className='col-4 image-box'>
            <img className='persons' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849387/Circular%20website/pankhurij_ldow5h.jpg"} alt="pankhurij"/>
            <p style={{color:"black"}}>Pankhuri Jain</p>
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
          <img className='logo' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849377/Circular%20website/indianemb_muosh4.png"} alt="indianemblem"/>
          <p className='para'>Recognized by Government of India NGO Darpan. Unique ID: TS/2023/0345218.<br/>
          Under the Registrar of Societies, Government of Telangana</p>
          <img className='logo' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849394/Circular%20website/telangana_c5wfx6.png"} alt="telangana logo"/>
        </div>
        <div className='navigator mb-2'>
          <HashLink smooth to="/focus#top"><button className='button'>Focus</button></HashLink>
          <HashLink smooth to="/partnerships#top"><button className='button'>Partnerships</button></HashLink>
          <HashLink smooth to="/humancapital#top"><button className='button'>Human Capital</button></HashLink>
          <HashLink smooth to="/aboutus#top"><button className='button'>About Us</button></HashLink>
          <HashLink smooth to="/contactus#top"><button className='button'>Contact Us</button></HashLink>
          <HashLink smooth to="/resources#top"><button className='button'>Impact Data</button></HashLink>
        </div>
        
      </div>
    </>
    
  )
}

export default Home;