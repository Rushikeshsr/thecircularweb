import React,{useEffect} from 'react'
import '../css/partnership.css';
import aranyalogo from '../images/aranyalogo.jpeg'
import caregoodlogo from '../images/caregoodlogo.png'
import desclogo from '../images/desclogo.png'
import smaelogo from '../images/smaelogo.png'
import gp from '../images/gp.jpg'
import dslogo from '../images/dslogo.png'
import osmanialogo from '../images/osmanialogo.jpeg'
import Aos from 'aos';

const Partnerships = () => {
  useEffect(()=>{
    Aos.init({duration:1000, easing:"ease-in"})
},[])
  return (
    <>
        <div className='partner-cover-image p-5'>
            <h1 className='cover-text' style={{color:"aliceblue", textShadow: "2px 2px 20px black"}}>PARTNERSHIPS</h1>
        </div>
        <div className='p-5 '>
            <p className='para'>
            At <span style={{color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>The Circular</span>, we believe that collaboration is the key to driving sustainable change. We recognize that we cannot do it alone, and that we need to collaborate with like-minded organizations and individuals who share our values and goals. Through our partnerships, we work hand in hand with like-minded organizations to amplify our impact and create a better future for all. That is why we are always open to exploring new opportunities for partnerships that can create synergies, leverage resources, and amplify our impact. We are proud to partner with a diverse range of stakeholders.
            </p>
            <p data-aos="slide-left" data-aos-delay="200" className='para'>
            We work closely with local authorities to align our initiatives with their policies and priorities, and to ensure compliance with regulations and standards. We also seek their support and guidance in facilitating our operations and reaching out to the communities we serve.
            </p>
            <p data-aos="slide-right" data-aos-delay="200" className='para'>
            We partner with NGOs and civil society organizations that have expertise and experience in various fields related to our work, such as circular economy, nature conservation, medicine, hospitality, hepatology, and gynaecology. We collaborate with them in designing and implementing projects, conducting research and advocacy, and providing training and capacity building.
            </p>
            <p data-aos="slide-left" data-aos-delay="200" className='para'>
            We partner with businesses and corporations that are committed to sustainability and social responsibility. We help them integrate circular economy principles into their operations, products, and services, and provide them with opportunities to support our initiatives through sponsorship, donation, or volunteering. We also promote their brands and products to our network of customers and beneficiaries.
            </p>
            <p data-aos="slide-right" data-aos-delay="200" className='para'>
            We partner with academic institutions and research centers that have relevant knowledge and skills in our areas of interest. We engage with them in conducting research and innovation, developing curricula and educational materials, and providing mentorship and internship opportunities for students and researchers.
            </p>
            <p data-aos="slide-left" data-aos-delay="200" className='para'>
            We partner with media outlets and influencers that can help us raise awareness and visibility of our work, as well as inspire and engage the public. We provide them with access to our stories, events, and campaigns, and invite them to join us in spreading our message of sustainability and well-being.
            </p>
            <div className='p-container mt-5'>
              <img className='gp' src={gp} alt="gp" />
              <div>
                <div className='text-center'>
                    <h1 className='sec2-head'>GOLDEN PARTNERS</h1>
                    <hr className='line' style={{width:"200px"}}/>
                </div>
                <div className='logo-text'>
                  <div className='logo-box' >
                    <img className='co-logo' src={aranyalogo} alt="aranyalogo"/>
                    <div>
                      <h1 className='logo-heading'>Aranya</h1>
                      <h2 className='logo-name'>Agricultural Alternatives</h2>
                    </div>
                  </div>
                  <div className='logo-box' >
                    <img className='co-logo' src={desclogo} alt="desclogo"/>
                    <div>
                      <h1 className='logo-heading'>DESC</h1>
                      <h2 className='logo-name'>Digital Education and Skills Council</h2>
                    </div>
                  </div>
                </div>
                <div className='logo-text'>  
                  <div className='logo-box' >
                    <img className='co-logo' src={smaelogo} alt="smaelogo"/>
                    <div>
                      <h1 className='logo-heading'>SMAE</h1>
                      <h2 className='logo-name'>Society of Mechanical and Automobile Engineers</h2>
                    </div>
                  </div>
                  <div className='logo-box d-flex justify-content-center' >
                    <img className='cg-logo' src={caregoodlogo} alt="caregoodlogo"/>
                  </div>
                </div>
                <div className='logo-text'>  
                  <div className='logo-box' >
                    <img className='co-logo' src={dslogo} alt="dslogo"/>
                    <div>
                      <h1 className='logo-heading'>DSS</h1>
                      <h2 className='logo-name'>Divyang Solar Society</h2>
                    </div>
                  </div>
                  <div className='logo-box' >
                    <img className='co-logo' src={osmanialogo} alt="osmanialogo"/>
                    <div>
                      <h1 className='logo-heading'>JRO</h1>
                      <h2 className='logo-name'>Japal-Rangapur Observatory</h2>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
        </div>
    </>
  )
}

export default Partnerships;