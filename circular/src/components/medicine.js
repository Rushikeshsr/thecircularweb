import React,{useEffect} from 'react'
import "../css/circulareconomy.css"
import med1 from '../images/med1.jpg';
import med2 from '../images/med2.jpg';
import med3 from '../images/med3.jpg';
import Aos from 'aos';

const Medicine = () => {
    useEffect(()=>{
        Aos.init({duration:1000,easing:'ease-in'});
      },[]);
  return (
    <>
        <div className='cover-imageM p-5'>
            <h1 className='cover-text' style={{color:"black", opacity:"0.8"}}>MEDICINE</h1>
        </div>
        <div className='section2 p-5'>
            <p className='paragh'>
                We realized the vital importance of accessible healthcare services, especially during challenging times like the Covid-19 pandemic. Through strategic partnerships and innovative models, we have made significant strides in overcoming logistical barriers and streamlining operations.
            </p>
            <p className='paragh'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Collaboration for Seamless Healthcare</span><br/>
                We have joined hands with multiple organizations and healthcare facilities to ensure that medicines reach every individual in need. Our collaborative efforts have enabled us to establish a robust network that spans across different regions, ensuring efficient distribution of medicines. By working closely with healthcare providers, we aim to bridge the gap between supply and demand, ultimately improving the overall healthcare experience for individuals.
            </p>
            <div className='paragh text-center'>
                <video width="700px" height="400px" controls>
                    <source src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1685849381/Circular%20website/med_video_ttdcrj.mp4" type='video/mp4'/>
                </video>
                <p className='paragh'>DES Council acknowledges our President Mr Abhay Chakra Sadineni for spending 5 lakhs INR on <br/> medicine drives in Rural Telangana on behalf of The Circular</p> 
            </div>
            <p className='paragh'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Navigating Challenges During the Pandemic</span><br/>
                The Covid-19 pandemic presented unprecedented challenges in the healthcare sector, including disruptions in logistics and supply chains. However, we persevered and adapted to the changing circumstances. Our team worked tirelessly to find innovative solutions and implement strategic partnerships to address the emerging needs of communities. Despite the obstacles, we remained committed to our mission and continued to serve the communities in a seamless manner.
            </p>
            <p className='paragh'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Innovative Models for Accessibility</span><br/>
                We believe in the power of innovation to enhance healthcare accessibility. Through the use of innovative models, such as mobile healthcare units, we have been able to reach remote areas and underserved communities. These models have enabled us to bring medicines closer to individuals who would otherwise face challenges in accessing them. By leveraging technology and strategic partnerships, we are paving the way for a more inclusive and accessible healthcare system.
            </p>
            <p className='paragh'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Proud to Serve the Communities</span><br/>
                We take immense pride in our ability to serve the communities and make a positive impact on people's lives. Our dedication to improving access to medicines and healthcare remains unwavering. We are constantly exploring new avenues, forging partnerships, and implementing innovative approaches to create a seamless and equitable healthcare ecosystem.
            </p>
        </div>
        <div className='p-5'>    
            <div className="image-container mb-4">
                <div className='d-flex flex-column'>
                    <img data-aos="fade-up" data-aos-delay="100" className='medpich' src={med1} alt="cir1"/>
                    <img data-aos="fade-down" data-aos-delay="100" className='medpich' src={med3} alt="cir3"/>
                </div>
                <img data-aos="fade-right" data-aos-delay="100" className='medpicv' src={med2} alt="cir2"/>
            </div>
        </div>
    </>
  )
}

export default Medicine;