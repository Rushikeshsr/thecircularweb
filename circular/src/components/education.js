import React,{useEffect} from 'react'
import '../css/health.css'
import Aos from 'aos';

const Education = () => {

    useEffect(()=>{
        Aos.init({duration:1000, easing:"ease-in"})
    },[])

  return (
    <>
        <div className='section1 col-12'> 
          <video className='video' src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1685873584/Circular%20website/govt_school_video_b9i3qd.mp4" loop autoPlay/>   
        </div>
        <div className='section2 p-5 '>
            <p className='paragh'>
                We believe in implementing, executing, and operating at the root level to drive real change. One of our key strategies is partnering with educational institutions and academics to create co-hiring opportunities for students. Through these partnerships, we aim to provide students with meaningful projects that have a positive impact on the environment and society. By working on such projects, students gain valuable experience while contributing to sustainable development.
            </p>
            <p data-aos="slide-left" data-aos-delay="200" className='paragh'>
                In addition to co-hiring initiatives, we collaborate with educational institutions to enhance their operational excellence. We work closely with them to improve their administrative functions, such as faculty recruitment and retention, financial management, and research administration. Our goal is to modernize and streamline their back-office structures, empowering them to effectively run complex organizations in the 21st century. By strengthening the operational aspects of educational institutions, we enable them to focus more on providing quality education and fostering innovation.
            </p>
            <p data-aos="slide-right" data-aos-delay="200" className='paragh'>
                Furthermore, we actively support educational institutions in aligning with the National Education Policy. This comprehensive policy covers a wide spectrum of school education, from pre-primary to senior secondary levels, with an emphasis on equity, quality, and innovation. As part of our collaboration, we help educational institutions implement the policy recommendations, such as the provision of 50 hours of mandatory continuous professional development for teachers, multiple entry and exit points for learners, and the establishment of academic credit banks. By facilitating the implementation of these recommendations, we contribute to the overall improvement of the education system.
            </p>
            <p data-aos="slide-left" data-aos-delay="200" className='paragh'>
                Cross-disciplinary learning and research are also integral to our partnerships with educational institutions. We create opportunities for students and faculty members to engage in collaborative projects and research related to sustainability and the circular economy. By exposing them to these important topics and providing hands-on experience, we nurture their understanding and expertise in these fields. Through such cross-disciplinary initiatives, we foster innovation and encourage the development of sustainable solutions.
            </p>
            <p data-aos="slide-right" data-aos-delay="200" className='paragh'>
                Overall, our partnerships with educational institutions are designed to create a strong foundation for sustainable development. By combining academic knowledge, practical experience, and operational excellence, we empower students and institutions to make a lasting impact on society and the environment.
            </p>
            
        </div>
        <div className='section3 p-5'>
            <div className='text-center'>
                <img data-aos="zoom-out" data-aos-delay="100" className='medpich m-2' style={{height:"350px",width:"500px", boxShadow:"2px 2px 10px black"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685874571/Circular%20website/54515841_631984150581318_700824047209938944_n_dmntrs.jpg"} alt='ed1'></img>
                <img data-aos="zoom-out" data-aos-delay="100" className='medpich m-2' style={{height:"350px",width:"500px", boxShadow:"2px 2px 10px black"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685874569/Circular%20website/55783752_631984113914655_4988749478040174592_n_cbd6p0.jpg"} alt='ed2'></img>
                <img data-aos="zoom-out" data-aos-delay="100" className='medpich m-2' style={{height:"350px",width:"600px", boxShadow:"2px 2px 10px black"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685874719/Circular%20website/IMG20221225152033_qvikir.jpg"} alt='ed3'></img>
            </div>              
        </div>
    </>
    
  )
}

export default Education ;
