import React,{useEffect} from 'react'
import '../css/aboutus.css'
import AbhayCSwb from '../images/AbhayCSwb.png'
import Aos from 'aos'
import {Link} from 'react-router-dom';
const AboutUs = () => {
    useEffect(()=>{
        Aos.init({duration:1000, easing:"ease-in"})
    },[])
  return (
    <>
    <div className='p-5'>
        <h1 className='main-heading'>About Us</h1>
    </div>
    <div className='section4 p-5'>
        <div className='text-center'>
            <h1 className='sec2-head' style={{fontSize:"20px"}}>FROM OUR PRESIDENT</h1>
            <hr className='line' style={{width:"200px",borderColor:"aliceblue"}}/>
        </div>
        <div style={{paddingLeft:"60px",paddingRight:"60px"}}> 
            <img data-aos="flip-left" src={AbhayCSwb} className='co-logo' alt="Abhay"/>     
        </div>
        <p className='para'>
        My Dear Co-existing Peeps,
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        Allow me to introduce myself. I am Abhay Chakra Sadineni, the founding member and current President of "The Circular." In this remarkable journey, I have had the privilege of steering this non-profit organization towards incredible growth and transformation. Many questioned my decision to expand our horizons and undertake diverse projects. They wondered why a small non-profit would venture into multiple domains. Yet, I saw a grand opportunity hidden within this complexity, an opportunity to effect profound change. My involvement with "The Circular" began in 2019 when I first volunteered to clean the garbage cluttering residential colonies and promote the idea of healthy, sustainable communities. As I delved deeper into the issues, interacting with residents, municipal workers, professionals, and fellow non-profit organizations, I realized the depth of the challenge. It demanded a multidisciplinary approach, a comprehensive solution that can address the root causes. Drawing upon my background as an engineer, I embarked on a journey of meticulous research, striving to unearth the underlying reasons behind these problems.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        To tackle this complex issue, I initiated a survey division, carefully collecting data and analyzing the problem from a holistic standpoint. It became abundantly clear that every aspect was intricately interconnected, forming a vast tapestry of cause and effect. I designed a model through which a non-profit organization could make a meaningful impact, leveraging limited resources while maximizing productivity. This marked the inception of our visionary mission: to establish thriving, sustainable communities, free from the grip of disease and affliction.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        In recognizing the critical nexus between environmental risks and the well-being of vulnerable individuals and communities, we firmly position the health sector at the vanguard of addressing the root causes of disease stemming from our surroundings. By doing so, we champion a comprehensive approach that not only safeguards public health but also optimizes the allocation of valuable resources and investments.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        At the heart of our endeavor lies the imperative to integrate the considerations of environmental risks into the decision-making processes surrounding the management of health resources. By forging strong alliances with stakeholders across various sectors, we harness the collective wisdom and expertise necessary to develop effective solutions that resonate with health protocols and policies. Furthermore, our commitment to adaptability ensures that the solutions generated through this collaborative approach align with evolving health protocols, policies, and guidelines. By remaining agile in the face of emerging challenges, we proactively respond to the ever-changing environmental landscape, ensuring that our efforts yield tangible, sustainable, and positive health outcomes.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        Together, with the active participation of diverse stakeholders, we can forge a path towards a future where the health sector assumes its rightful role in addressing environmental causes of disease. By prioritizing the integration of environmental risk management within healthcare decision-making processes, we unlock the full potential of our investments and resources to create healthier, more resilient communities.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        Undeterred by the magnitude of the task at hand, I forged numerous partnerships, spanning from local communities to the far reaches of the globe, marching steadfastly towards the realization of our audacious vision—zero-disease sustainable communities. Our approach is rooted in the understanding that health and well-being are not isolated concerns, but integral components of a thriving society. We acknowledge that the path to sustainable communities must encompass not only environmental stewardship but also the holistic welfare of every individual. By interlinking these crucial elements, we aim to create a harmonious equilibrium that nurtures the health and vitality of our communities. However, I soon came to realize that building alone would not suffice. To safeguard our accomplishments from external and internal adversities, we needed to fortify our foundation. This realization prompted the creation of our "Human Capital" vertical—a crucial step towards creating a better world for all. But I recognize that the task before us is immense, and it necessitates a collective effort.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        Regrettably, we have witnessed instances where contractors have taken advantage of the system or have been negligent, resulting in delays, mismanagement of funds, and wastage of resources. The consequences of such actions are far-reaching, not only impacting the timely completion of projects but also hindering the progress toward establishing healthy and sustainable communities.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        To address this critical issue, I have initiated the Human Capital vertical. I firmly believe that investing in the development and nurturing of human capital is vital for fostering responsible and efficient practices in any industry. By prioritizing the growth and well-being of the individuals involved, we aim to bring about a positive transformation in the execution of infrastructure projects.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        Through the Human Capital vertical, we undertake various initiatives to enhance the skills, knowledge, and ethical conduct of contractors, workers, and all stakeholders involved in public works projects. We provide training programs, capacity-building workshops, and mentorship opportunities to promote responsible project management, efficient resource allocation, and effective work allocation. Furthermore, The Circular actively collaborates with industry experts, policymakers, and regulatory bodies to advocate for improved standards, transparency, and accountability in the construction sector. By fostering dialogue and encouraging best practices, we strive to create an ecosystem that promotes fairness, integrity, and excellence in infrastructure development.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        Thus, I extend an impassioned call to each one of you to join our noble cause. Embrace the responsibility of restoring the delicate balance in nature, of combating the perils of climate change, and of cultivating a future that is sustainable, harmonious, and prosperous. Together, we shall embark on an awe-inspiring journey, armed with determination and the unwavering belief that we can reshape our world for the better.
        </p>
        <p data-aos="fade-left" data-aos-delay="100" className='para'>
        Let us rise to the challenge and make a profound impact, transcending the boundaries of what is deemed possible. The time is now, and our mission awaits. Join us, and let us manifest the transformative power of unity, dedication, and unwavering resolve.
        </p>
        <p  data-aos="fade-left" data-aos-delay="100"className='para'>
        With utmost confidence and unwavering resolve,
        </p>
        <h2 className='sub-heading'>Abhay Chakra Sadineni</h2>
        <p className='para'>President, <br/><span style={{fontWeight:"bold"}}>The Circular</span> </p>
    </div>
    <div className='navigator mb-2 p-4'>
          <Link to="/aboutus/visionandmission"><button className='button' style={{boxShadow: "2px 2px 20px #00ff0d"}}>Vision & Mission</button></Link>
          <Link to="/aboutus/leadership"><button className='button' style={{boxShadow: "2px 2px 20px #00ff0d"}}>Leadership</button></Link>
          <Link to="/aboutus/operations"><button className='button' style={{boxShadow: "2px 2px 20px #00ff0d"}}>Operations</button></Link>
          <Link to="/aboutus/fieldtrips"><button className='button' style={{boxShadow: "2px 2px 20px #00ff0d"}}>Field Trips</button></Link>
          <Link to="/resources"><button className='button' style={{boxShadow: "2px 2px 20px #00ff0d"}}>Impact</button></Link>
    </div>
    </>
  )
}

export default AboutUs
