import React,{useEffect} from 'react'
import '../css/health.css'
import Aos from 'aos';

const Transparency = () => {

    useEffect(()=>{
        Aos.init({duration:1000, easing:"ease-in"})
    },[])

  return (
    <>
        <div className='cover-imageT p-5'>
            <h1 className='cover-text' style={{color:"aliceblue",textShadow:"2px 2px 20px black"}}>TRANSPARENCY</h1>
        </div>
        <div className='p-5 '>
            <p className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Transparency in Fostering Quality Human Capital</span><br/>
                At The Circular, we are committed to fostering quality and efficient human capital by establishing transparency at every level of our operations. We believe that transparency is essential for building trust, ensuring accountability, and driving positive outcomes in education, employment, and corporate governance. Through our transparent approach, we aim to create a fair and equitable environment where individuals can thrive and reach their full potential.
            </p>
            <p data-aos="fade-right" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Promoting Ethical Corporate Governance</span><br/>
                Unethical corporate governance practices can hinder the growth and development of human capital. To address this, we have adopted external standards, such as the ISO 37001 Anti-Bribery Management Systems Standard, to establish a clear framework for ethical behavior. We define clear roles for boards and top management in overseeing and implementing anti-corruption programs, ensuring accountability and leadership commitment. By conducting due diligence, monitoring, and auditing, we assess compliance with anti-corruption laws and regulations, promoting transparency and curbing unethical practices. We believe in reporting and disclosing our anti-corruption activities and performance to demonstrate transparency and build trust among our stakeholders.
            </p>
            <p data-aos="fade-left" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Curbing Student Exploitation</span><br/>
                In the realm of education, we are committed to preventing student exploitation and unethical practices. We collaborate with educational institutions to provide a safe and transparent environment for students. Through due diligence, we assess compliance with relevant regulations and identify any risks or red flags. We prioritize the protection of whistleblowers, enabling them to report any suspected or actual corruption cases without fear of retaliation. Our enforcement of sanctions for breaches or violations of our anti-corruption program ensures the integrity and reputation of The Circular.
            </p>
        </div>
        <div className='section2 p-5'>
            <div className='text-center m-3'>
                <img className='medpich m-1' data-aos="fade-left" src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1686024346/Circular%20website/trans3_qecc3m.jpg"} alt='cloudinery trans3'></img>
                <img className='medpich m-1' data-aos="fade-right"  src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1686024346/Circular%20website/trans4_aplvpk.jpg"} alt='cloudinery trans4'></img>
                <img className='medpich m-2' data-aos="fade-left" style={{width:"400px",height:"400px"}}  src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1686024346/Circular%20website/trans2_xp4ekl.jpg"} alt='cloudinery tans2'></img>
                <img className='medpich m-2' data-aos="fade-right" style={{width:"400px",height:"400px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1686025345/Circular%20website/trans1_pe3ivt.jpg"} alt='cloudinery tans1'></img>
            </div>
        </div>
        <div className='p-5'>    
            <p data-aos="fade-right" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Early Interventions for Quality Human Capital</span><br/>
                We recognize that building quality human capital starts at an early stage. Therefore, we focus on basic and early interventions to enhance educational outcomes. We support early childhood education initiatives and remedial education programs to ensure a strong foundation for learning. Our commitment to teacher training and development empowers educators with the necessary skills to deliver quality education. We enhance educational curricula to align with the evolving needs of the workforce, integrating essential skills into the learning experience.<br/>
                Through career guidance, mentorship programs, and industry-academia collaboration, we provide students with guidance, exposure, and practical experiences, facilitating their personal and professional growth. Also, we believe in equal access to education and strive to eliminate financial barriers. Through partnerships with educational institutions and stakeholders, we support scholarships and financial aid programs. Our aim is to provide deserving students, especially those from underprivileged backgrounds, with the financial assistance they need to pursue their educational aspirations. By ensuring financial inclusivity, we promote equality of opportunity and contribute to the development of a diverse and skilled human capital pool.
            </p>
            <p data-aos="fade-left" data-aos-delay="200" className='para'>
                <span style={{fontSize:"20px",color:"#00ff0d",textShadow:"-0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000"}}>Measuring Impact and Driving Future Growth</span><br/>
                Transparency is not only about establishing ethical practices but also about measuring and driving impact. We continuously evaluate the outcomes of our initiatives and collect data to understand the effectiveness of our programs. By analyzing education, health, income, and employment indicators, we assess the quality and efficiency of human capital. This data-driven approach enables us to identify areas for improvement and inform future strategies to enhance human capital development.
                </p>
            <p data-aos="fade-right" data-aos-delay="200" className='para'>
                At The Circular, we are committed to transparency as a guiding principle in our pursuit of fostering quality human capital. By adopting external standards, promoting ethical corporate governance, curbing student exploitation, implementing early interventions, providing scholarships and financial aid, and measuring impact, we strive to create an environment where individuals can thrive and contribute to a sustainable and prosperous future.
            </p>
            
        </div>
    </>
    
  )
}

export default Transparency;
