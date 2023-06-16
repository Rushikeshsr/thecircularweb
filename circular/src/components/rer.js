import React,{useEffect} from 'react';
import "../css/circulareconomy.css";
import Aos from 'aos';

const Rer = () => {
    useEffect(()=>{
        Aos.init({duration:1000, easing:"ease-in"})
    },[])

  return (
    <>
        <div className='section1 col-12'> 
          <div className='overlay'></div>
          <video className='video' src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1685863855/Circular%20website/rer_cover_rgkm91.mp4" loop autoPlay muted/>
          <div className='content d-flex flex-column justify-content-center'>
            <p className='cover-text' style={{color:"aliceblue",opacity:"0.8", textShadow:"2px 2px 20px black"}}>
            RENEWABLE ENERGY RESOURCES
            </p>
          </div>   
        </div>
        <div className='section2'>
            <p className='paragh'>
                Renewable Energy Resources (RER) is a collaborative effort with multiple renewable energy providers. Our partnership with RER aims to accelerate the adoption of renewable energy solutions, reduce carbon emissions, and create a clean energy future. By promoting sustainable energy practices, we contribute to the global transition towards a greener and more sustainable world.
            </p>
            <div className='paragh'>
                <img data-aos="flip-left" data-aos-delay="100" className='persons' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685858576/Circular%20website/rer%20images/ri4_xuwmfc.jpg" alt="Zubeida"/>
                <p>
                One of our significant collaborations in the renewable energy sector is with :
                <span style={{"color":"#00ff0d",fontSize:'15px'}} > &nbsp;Divyang Solar Society</span> 
                &nbsp; based in Sangareddy, Telangana. Led by Zubeida, a remarkable woman with a locomotor disability, the society was established under the guidance of Medak District Collector Ronald Rose. Their mission is to provide sustainable livelihood opportunities to physically handicapped individuals by training them in the manufacturing of solar mini lights.
                </p>   
            </div>
            <p className='paragh'>
                The partnership between The Circular and Divyang Solar Society is driven by our shared vision of promoting renewable energy and social empowerment. Together, we aim to achieve the following goals.
            </p>
            <p className='paragh'>
                <span style={{"color":"#00ff0d",fontSize:'15px',}} >Empowering the Differently-Abled :&nbsp;</span>
                Through our collaboration, we incorporate differently-abled individuals into the supply chain of the renewable energy industry. We provide them with comprehensive training and employment opportunities, allowing them to showcase their skills and abilities. By empowering the differently-abled, we enable them to become self-sufficient and lead dignified lives.
            </p>
            <p className='paragh'>
                <span style={{"color":"#00ff0d",fontSize:'15px',}} >Access to Clean Energy :&nbsp;</span>
                Divyang Solar Society manufactures solar mini lights that are affordable, effective, and energy-efficient. These lights provide a sustainable lighting solution for rural communities, particularly farmers who can benefit from the convenience of these lights both in the fields and at home. By promoting the use of renewable energy, we contribute to a cleaner and greener future.
            </p>
            <p className='paragh'>
                <span style={{"color":"#00ff0d",fontSize:'15px',}} >Economic Sustainability :&nbsp;</span>
                In addition to assembly and marketing, Divyang Solar Society generates income from the sales of solar lights. This economic sustainability ensures the long-term viability of the society, enabling it to expand its impact and reach even more individuals in need. Together, we foster entrepreneurship and economic growth within the differently-abled community.
            </p>
            <p className='paragh'>
                Through our partnership with RER and collaborations like the one with Divyang Solar Society, we strive to create positive change by harnessing the potential of renewable energy. By promoting accessibility, empowering communities, and driving economic sustainability, we contribute to a more inclusive and sustainable future for all.
            </p>
                        
        </div>
        <div className='section3'>
            <div className='text-center m-3'>
                <img className='medpich aranyapic' style={{height:"300px",width:"500px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685858569/Circular%20website/rer%20images/ri2_xpafrb.jpg"} alt='cloudinery ci1'></img>
                <img className='medpich aranyapic' style={{height:"300px",width:"500px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685858569/Circular%20website/rer%20images/ri3_krdq1q.jpg"} alt='cloudinery ci2'></img>
                <img className='medpich aranyapic' style={{height:"300px",width:"500px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685858568/Circular%20website/rer%20images/ri1_nottjn.jpg"} alt='cloudinery ci4'></img>
            </div>              
        </div>
    </>
  )
}

export default Rer;