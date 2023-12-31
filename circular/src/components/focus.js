import React, {useEffect, useState} from 'react'
import '../css/focus.css';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import Aos from 'aos';

const Focus = () => {
    useEffect(()=>{
        Aos.init({duration:1000,easing:'ease-in'});
      },[]);

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
   
  return (
   <>
   <div className='main'>
      <div className='section1'> 
          <video className='video' src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1687192112/Circular%20website/bg%20ovelay%20videos/focus_bg_overlay_woz3gn.mp4" loop autoPlay muted/>
          <div className='content d-flex flex-column justify-content-center'>
            <p>
                At <span style={{color:"#00ff0d"}}>The Circular</span>, <br/>
                we believe in addressing the problems that often go unnoticed,
                yet have a profound impact on our communities. Our journey began with
                a strong focus on managing floods in the vibrant city of Hyderabad.
                Recognizing the devastating effects of floods on lives and infrastructure,
                we were determined to make a difference.
            </p>
          </div>   
       </div>
       <div className='sec2'>
        <p className='paragh'>
            We embarked on a mission to develop innovative models that mitigate floods and implement sustainable water conservation practices. Driven by a deep sense of responsibility, we knew that our efforts could not stop at theoretical solutions.
        </p>
        <p className='paragh'>
            Taking action on the ground, we implemented comprehensive water conservation strategies and rainwater harvesting systems in the region. By harnessing the power of nature and adopting watershed management practices, we aimed to not only mitigate floods but also ensure the efficient use of water resources.
        </p>
        <p className='paragh'>
            Our journey didn't end there. We realized the need to tackle the root causes of environmental degradation and pollution. Inspired by the principles of a regenerative and circular economy, we set out to introduce sustainability into the very fabric of our communities. We firmly believe that by adopting circular economy practices, we can create a regenerative economy that restores and revitalizes our ecosystems.
        </p>
        <p className='paragh'>
            Through our initiatives, we strive to raise awareness about the importance of waste reduction, recycling, and responsible resource management. By encouraging businesses and individuals to embrace circularity, we aim to minimize pollution, conserve resources, and create a more sustainable future for generations to come.
        </p>
        <p className='paragh'>
            But our work goes beyond technical solutions. It's deeply rooted in emotion and empathy for the communities we serve. We understand the devastating impact that floods can have on people's lives, their homes, and their livelihoods. It's this emotional connection that fuels our determination to find practical, long-lasting solutions.
        </p>
        <p className='paragh'>
        Supporting the construction of sewage management systems to mitigate urban floods.
        </p>
        <div className='image-arrange'>
            <img data-aos="fade-right" data-aos-delay="200" className='black-image col-6' style={{width:"650px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849367/Circular%20website/focuspic1_zsoo98.jpg"} alt="focuspic1"/>
            <img data-aos="fade-left" data-aos-delay="200" className='black-image col-6' style={{width:"300px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849365/Circular%20website/focuspic2_c41gsa.jpg"} alt="focuspic2"/>
        </div>
        <div className='image-arrange p-5'>
            <img data-aos="fade-right" data-aos-delay="200" className='black-image col-6' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849365/Circular%20website/focuspic3_cpujlm.jpg"} alt="focuspic3"/>
            <img data-aos="fade-left" data-aos-delay="200" className='black-image col-6' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849367/Circular%20website/focuspic4_uajiir.jpg"} alt="focuspic4"/>
        </div>
        <h1 data-aos="flip-left" className='heading water' style={{paddingLeft:"60px"}}>Water Conservation and Rain Water Harvesting are always our focus areas.</h1>
        <div className='text-image-box'>
            <img data-aos="fade-right" data-aos-delay="200" className='ghmc' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849366/Circular%20website/ghmc1_xdrbqh.png"} alt="ghmc1"/>
            <img data-aos="fade-left" data-aos-delay="200" className="ghmc" src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849367/Circular%20website/ghmc2_ap4fpb.png"} alt="ghmc2"/>
        </div> 
        <div className='ghmc-text mt-3 mb-3'>
            <img className='persons' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849377/Circular%20website/MadhuriR_zp3xti.jpg"} alt="MadhuriR"/>
            <p style={{marginLeft:'30px'}}>Derived from the Ph.D thesis of Dr. Madhuri Rampalli at BITS - Pilani, Hyderabad.&nbsp; 
            {showBtn?<button onClick={showContent} className='seemore' >See more<FaAngleDown style={{fontSize:'15px'}}/></button>:
            <button onClick={hideContent} className='seemore' >See less<FaAngleUp style={{fontSize:'15px'}}/></button>}
            </p>   

        </div>
        {show?<p data-aos="fade-down" className='paragh'>Dr. Madhuri Rampalli and her colleagues have done a great job in finding solutions for urban flood management in Hyderabad.
        Their research covers different aspects of this problem, such as how to estimate runoff, how to assess flood risk, how to choose the best practices, how to optimize the location and type of practices, how to use machine learning, and how to adapt to climate change. They have used various tools and techniques, such as HEC-HMS, HEC-RAS 2D, EPA-SUSTAIN, BLIP, NSGA-II, k-means clustering, random forest, support vector machine, artificial neural network, GIS, and HEC-RAS 2D outputs. <br/><br/>
        Their research has helped the city to become more sustainable by reducing the flood impacts and increasing resilience. They have also helped the city to improve its planning and decision-making for urban flood management by using the simulation-optimization framework, the flood susceptibility mapping, the building damage ratio estimation, and the multiobjective optimization and cluster analysis. They have also helped the city to implement various practices and strategies, such as green roofs, permeable pavements, rainwater harvesting tanks, elevation of buildings, relocation of buildings, etc., to mitigate the flood risks and improve the water quality and availability. <br/><br/>
        Their research has also contributed to the city’s vision of becoming a smart and livable city by improving its performance in various indicators of the Ease of Living Index (EoL), such as quality of life, economic ability, sustainability, and citizen perception. They have also supported the city’s initiatives for sustainable livelihoods, self-help groups, youth activities, senior citizens welfare, street vendor rehabilitation, family counseling, night shelters, etc., by providing a safe and healthy environment for the citizens.
        </p>:null}
        <p className='paragh'>
            At <span style={{color:"#00ff0d"}}>The Circular</span>, we are not just problem solvers; we are agents of change. We are driven by the belief that every individual deserves to live in a safe, resilient, and sustainable environment. Our efforts are dedicated to making a positive difference in the lives of those affected by floods and environmental degradation.
        </p>
       </div>
       <div className='section3'>
            <div className='text-center mb-2'>
                <h1 className='sec2-head'>KEY AREAS</h1>
                <hr className='line'/>
            </div>
            <div className='d-flex justify-content-center mb-3'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":1}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Circular Economy</h1> 
                        <p>Discover how we integrate circular economy principles into local businesses,
                        promoting waste reduction, recycling, and innovative approaches to resource management.
                        </p><br/>
                        <HashLink smooth to='/focus/circulareconomy#top'><button className='btnlr'>Learn More</button></HashLink>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":2}}>
                        <img className='pic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849363/Circular%20website/Circulareconomy_ul7vt5.png"} alt="circular economy"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mb-3'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":2}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Nature</h1> 
                        <p>Learn about our initiatives to protect and restore ecosystems, conserve biodiversity,
                        and create sustainable solutions for a harmonious relationship between humans and nature.
                        </p> <br/>
                        <HashLink smooth to='/focus/nature#top'><button className='btnlr'>Learn More</button></HashLink>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":1}}>
                        <img className='pic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849388/Circular%20website/Nature_zgsy4z.jpg"} alt="Nature"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justiffy-content-center mb-3'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":1}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Medicine</h1> 
                        <p>We strive to advance equity in health, improve access to medicines,
                        and promote preventive measures to ensure healthier lives for all.
                        </p> <br/><br/>
                        <HashLink smooth to='/focus/medicine#top'><button className='btnlr'>Learn More</button></HashLink>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":2}}>
                        <img className='pic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849381/Circular%20website/Medicine_o2wetw.jpg"} alt="Medicine"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mb-3'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":2}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Hospitality</h1> 
                        <p>Experience our sustainable hospitality initiatives, promoting responsible
                        tourism, eco-friendly practices, and supporting local communities.
                        </p> <br/><br/>
                        <HashLink smooth to='/focus/hospitality#top'><button className='btnlr'>Learn More</button></HashLink>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":1}}>
                        <img className='pic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849375/Circular%20website/Hospitality_iaobf5.jpg"} alt="Hospitality"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mb-3'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":1}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Hepatology</h1> 
                        <p>Learn about our efforts to raise awareness, prevent, and treat liver
                        diseases, ensuring liver health for individuals and communities.
                        </p> <br/><br/>
                        <HashLink smooth to='/focus/hepatology#top'><button className='btnlr'>Learn More</button></HashLink>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":2}}>
                        <img className='pic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849374/Circular%20website/Hepatology_xfq0kd.jpg"} alt="Hepatology"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mb-3'>
                <div className='card-box'>
                    <div data-aos="fade-right" data-aos-delay="200" style={{"order":2}} className='text-box'>
                        <h1 style={{fontSize:'35px'}}>Gynaecology</h1>
                        <p>Discover our initiatives to promote women's health, provide reproductive <br/>
                        healthcare services, and empower women with knowledge and support.
                        </p> <br/><br/>
                        <HashLink smooth to='/focus/gynaecology#top'><button className='btnlr'>Learn More</button></HashLink>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" style={{"order":1}}>
                        <img className='pic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849368/Circular%20website/Gynaecology_k38hqo.jpg"} alt="Gynaecology"/>
                    </div>
                </div>
            </div>
       </div>
    </div>
   </>
  )
}

export default Focus;
