import React,{useEffect} from 'react'
import '../css/health.css'
import Aos from 'aos';

const Skills = () => {
    useEffect(()=>{
        Aos.init({duration:1000, easing:"ease-in"})
    },[])

  return (
    <>
        <div className='cover-imageSk p-5'>
            <h1 className='cover-text' style={{color:"aliceblue", textShadow:"2px 2px 20px black", opacity:"0.8"}}>SKILLS</h1>
        </div>
        <div className='section2 p-5 '>
            <p className='paragh'>
                The Circular is committed to providing continuous professional development opportunities to our partner institutions. We understand the importance of upgrading skills and staying updated with the latest trends and technologies. Through our professional development programs, we help educational institutions enhance their capabilities and ensure their faculty members are equipped with the knowledge and skills needed to deliver quality education. By investing in the development of educators, we contribute to closing the skill gap and fostering a more competent workforce.            </p>
            <p data-aos="fade-left" data-aos-delay="200" className='paragh'>
                Cross-disciplinary learning and research are key components of our approach to sustainability and circular economy. We recognize that addressing environmental and social challenges requires innovative and interdisciplinary solutions. Therefore, we facilitate cross-disciplinary collaboration among students and faculty members, encouraging them to explore sustainability issues from various perspectives. By breaking down disciplinary silos, we foster a holistic understanding of complex challenges and enable the development of innovative solutions that integrate knowledge from multiple fields.            </p>
            <p data-aos="fade-right" data-aos-delay="200" className='paragh'>
                To support the implementation of policy recommendations, such as multiple entry and exit points for learners and the establishment of academic credit banks, we work closely with educational institutions. Our team provides guidance and assistance in aligning their programs and practices with these policy initiatives. By collaborating on policy implementation, we contribute to the advancement of the education system and the overall learning experience for students.            </p>
            <p data-aos="fade-left" data-aos-delay="200" className='paragh'>
                Internships, projects, and mentorship programs play a crucial role in providing practical exposure and experience to students and faculty members. Through our partnerships, we create opportunities for students and faculty to engage in these experiential learning opportunities with our co-hired professionals. By working alongside experienced professionals in the field of sustainability and circular economy, students gain valuable insights, hands-on experience, and industry connections. These initiatives help bridge the gap between academic learning and real-world applications, preparing students for future career opportunities in sustainable development.
            </p>    
        </div>
        <div className='section3 p-5'>
            <div className='text-center m-3'>
                <img className='medpich' style={{height:"420px",width:"350px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685877410/Circular%20website/skills/sk1_jerwgh.jpg"} alt='cloudinery sk1'></img>
                <img className='medpich' style={{height:"420px",width:"350px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685877404/Circular%20website/skills/sk2_tdi7fj.jpg"} alt='cloudinery sk2'></img>
                <img className='medpich' style={{height:"420px",width:"350px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685877404/Circular%20website/skills/sk3_u9n9gm.jpg"} alt='cloudinery sk3'></img>
                <img className='medpich' style={{height:"420px",width:"350px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685877404/Circular%20website/skills/sk4_drjch7.jpg"} alt='cloudinery sk4'></img>
                <img className='medpich' style={{height:"420px",width:"350px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685877404/Circular%20website/skills/sk5_fw2kyi.jpg"} alt='cloudinery sk5'></img>
                <img className='medpich' style={{height:"420px",width:"350px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685877404/Circular%20website/skills/sk6_lucgvu.jpg"} alt='cloudinery sk6'></img>
            </div>
            <div className='text-center m-2'>
                <video width="400px" height="500px" muted controls>
                    <source src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1685877410/Circular%20website/skills/VID-20221227-WA0003_asy9ir.mp4" type='video/mp4'/>
                </video> 
            </div>
            <div className='text-center'>
                <img className='medpich' style={{height:"420px",width:"420px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685877405/Circular%20website/skills/sk9_azwtks.jpg"} alt='cloudinery sk1'></img>
                <img className='medpich' style={{height:"420px",width:"420px",padding:"5px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685877405/Circular%20website/skills/sk8_piq7sg.jpg"} alt='cloudinery sk2'></img>
            </div>
        </div> 
    </>
    
  )
}

export default Skills ;
