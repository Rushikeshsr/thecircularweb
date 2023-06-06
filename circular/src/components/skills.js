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
        <div id="neelmani" name="neelmani" className='section4 p-5'>
            <div data-aos="zoom-in"  className='cardbox d-flex' style={{height:"410px",boxShadow:"2px 2px 10px black"}}>
                <img className='image-card' style={{height:"410px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849368/Circular%20website/1story_lab5zp.jpg"} alt="Neelmani"/>
                <div className='textbox'>
                    <h1 className='audio-head' style={{fontWeight:"bold",marginBottom:"15px"}}>Neelmani</h1>
                    <p className='image-para'>
                      Neelmani's journey began when he left his hometown in Odisha, driven by the desire to find better opportunities and support his family. With limited resources and a resilient spirit, he set foot in the bustling city, ready to carve a path of his own. As Neelmani delved into the construction industry, he realized the significance of sustainability in shaping a more environmentally conscious future. Inspired by this vision, he made a conscious choice to adopt sustainable practices in his work, seeking opportunities that aligned with his values. He went beyond his own work and actively advocated for eco-friendly practices in the construction projects he was involved in. As Neelmani immersed himself in the world of underground sewage management systems, he became deeply passionate about incorporating sustainable practices into his work. Recognizing the importance of minimizing environmental impact and optimizing resource utilization, he actively sought out projects that aligned with his values. With unwavering determination, he spearheaded efforts to implement eco-friendly construction techniques, advocating for the adoption of sustainable materials, efficient water management systems, and responsible waste disposal practices. Through his dedication and persuasive efforts, he encouraged fellow workers and contractors to embrace sustainable construction methods. While Neelmani pursued his passion for sustainable construction, he also fulfilled his responsibilities toward his family. The income he earned from his work not only supported his own needs but also played a crucial role in ensuring the well-being and education of his loved ones back in Odisha.
                    </p>
                </div>
            </div>
        </div>
        <div id="jamuna" name="jamuna" className='section4 p-5'>    
            <div data-aos="zoom-in"  className='cardbox d-flex' style={{boxShadow:"2px 2px 10px black"}}>
                <img className='image-card' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849359/Circular%20website/5story_lbpbfv.jpg"} alt="Jamuna"/>
                <div className='textbox'>
                    <h1 className='audio-head' style={{fontWeight:"bold",marginBottom:"15px"}}>Jamuna</h1>
                    <p className='image-para'>
                    Jamuna faced significant challenges in her life, including societal barriers and limited access to opportunities. However, she never let these obstacles define her. Understanding the immense potential of women in the construction industry, we encouraged Jamuna to explore opportunities within this sector. By joining the construction workforce, Jamuna not only found economic stability but also became an agent of positive change within her community. The impact of Jamuna's work extends far beyond the physical structures she helps to create. Her involvement in constructing underground water systems has brought about a tangible difference in the lives of individuals and communities. By ensuring a reliable water supply, Jamuna has played a vital role in fostering public health, promoting agricultural productivity, and mitigating the impact of water scarcity. Her contributions are not only visible in the structures she helps build but also in the sense of pride and accomplishment she gains from making a tangible impact on her surroundings.
                    </p>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Skills ;
