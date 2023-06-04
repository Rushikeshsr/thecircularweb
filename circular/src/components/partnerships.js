import React,{useEffect} from 'react'
import '../css/partnership.css';
import Aos from 'aos';
import { HashLink } from 'react-router-hash-link';

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
            <p data-aos="fade-left" data-aos-delay="200" className='para'>
            We work closely with local authorities to align our initiatives with their policies and priorities, and to ensure compliance with regulations and standards. We also seek their support and guidance in facilitating our operations and reaching out to the communities we serve.
            </p>
            <p data-aos="fade-right" data-aos-delay="200" className='para'>
            We partner with NGOs and civil society organizations that have expertise and experience in various fields related to our work, such as circular economy, nature conservation, medicine, hospitality, hepatology, and gynaecology. We collaborate with them in designing and implementing projects, conducting research and advocacy, and providing training and capacity building.
            </p>
            <p data-aos="fade-left" data-aos-delay="200" className='para'>
            We partner with businesses and corporations that are committed to sustainability and social responsibility. We help them integrate circular economy principles into their operations, products, and services, and provide them with opportunities to support our initiatives through sponsorship, donation, or volunteering. We also promote their brands and products to our network of customers and beneficiaries.
            </p>
            <p data-aos="fade-right" data-aos-delay="200" className='para'>
            We partner with academic institutions and research centers that have relevant knowledge and skills in our areas of interest. We engage with them in conducting research and innovation, developing curricula and educational materials, and providing mentorship and internship opportunities for students and researchers.
            </p>
            <p data-aos="fade-left" data-aos-delay="200" className='para'>
            We partner with media outlets and influencers that can help us raise awareness and visibility of our work, as well as inspire and engage the public. We provide them with access to our stories, events, and campaigns, and invite them to join us in spreading our message of sustainability and well-being.
            </p>
            <div className='p-container mt-5'>
              <img className='gp' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849370/Circular%20website/gp_ixt5m2.jpg"} alt="gp" />
              <div>
                <div className='text-center'>
                    <h1 className='sec2-head'>GOLDEN PARTNERS</h1>
                    <hr className='line' style={{width:"200px"}}/>
                </div>
                <div className='logo-text'>
                  <HashLink className='redirect' smooth to="/partnerships/aranya#top">
                    <div className='logo-box' >
                        <img className='co-logo' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849362/Circular%20website/aranyalogo_dnktdw.jpg"} alt="aranyalogo"/>
                        <div>
                          <h1 style={{"color":"black"}} className='logo-heading'>Aranya</h1>
                          <h2 style={{"color":"black"}} className='logo-name'>Agricultural Alternatives</h2>
                        </div>  
                    </div>
                  </HashLink>
                  <HashLink className='redirect' smooth to="/partnerships/desc#top">
                    <div className='logo-box' >
                      <img className='co-logo' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849363/Circular%20website/desclogo_oyydpo.png"} alt="desclogo"/>
                      <div>
                        <h1 style={{"color":"black"}} className='logo-heading'>DESC</h1>
                        <h2 style={{"color":"black"}} className='logo-name'>Digital Education and Skills Council</h2>
                      </div>
                    </div>
                  </HashLink>
                </div>
                <div className='logo-text'>  
                <HashLink className='redirect' smooth to="/partnerships/smae#top">
                  <div className='logo-box' >
                    <img className='co-logo' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849394/Circular%20website/smaelogo_hcammp.png"} alt="smaelogo"/>
                    <div style={{"color":"black"}}>
                      <h1 className='logo-heading'>SMAE</h1>
                      <h2 className='logo-name'>Society of Mechanical and Automobile Engineers</h2>
                    </div>
                  </div>
                 </HashLink> 
                 <HashLink className='redirect' smooth to="/partnerships/caregood#top">
                  <div className='logo-box d-flex justify-content-center' >
                    <img className='cg-logo' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849362/Circular%20website/caregoodlogo_ers3le.png"} alt="caregoodlogo"/>
                  </div>
                  </HashLink>
                </div>
                <div className='logo-text'>  
                  <HashLink className='redirect' smooth to="/partnerships/rer#top">
                    <div className='logo-box' >
                      <img className='co-logo' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849363/Circular%20website/dslogo_ozg9fx.png"} alt="dslogo"/>
                      <div style={{"color":"black"}}>
                        <h1 className='logo-heading'>DSS</h1>
                        <h2 className='logo-name'>Divyang Solar Society</h2>
                      </div>
                    </div>
                  </HashLink>
                  <HashLink className='redirect' smooth to="/partnerships/others#top">
                    <div className='logo-box' >
                      <img className='co-logo' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849387/Circular%20website/osmanialogo_rujxcb.jpg"} alt="osmanialogo"/>
                      <div style={{"color":"black"}}>
                        <h1 className='logo-heading'>JRO</h1>
                        <h2 className='logo-name'>Japal-Rangapur Observatory</h2>
                      </div>
                    </div>
                  </HashLink>
                </div>
                
              </div>
            </div>
            
        </div>
    </>
  )
}

export default Partnerships;