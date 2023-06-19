import React,{useState, useEffect} from 'react'
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import '../css/health.css'
import Aos from 'aos';

const Education = () => {
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

    useEffect(()=>{
        Aos.init({duration:1000, easing:"ease-in"})
    },[])

  return (
    <>
        <div className='section1'> 
          <video className='video' src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1685873584/Circular%20website/govt_school_video_b9i3qd.mp4" loop autoPlay/>   
        </div>
        <div className='section2'>
            <p className='paragh'>
                We believe in implementing, executing, and operating at the root level to drive real change. One of our key strategies is partnering with educational institutions and academics to create co-hiring opportunities for students. Through these partnerships, we aim to provide students with meaningful projects that have a positive impact on the environment and society. By working on such projects, students gain valuable experience while contributing to sustainable development.
            </p>
            <p data-aos="fade-down" data-aos-delay="200" className='paragh'>
                In addition to co-hiring initiatives, we collaborate with educational institutions to enhance their operational excellence. We work closely with them to improve their administrative functions, such as faculty recruitment and retention, financial management, and research administration. Our goal is to modernize and streamline their back-office structures, empowering them to effectively run complex organizations in the 21st century. By strengthening the operational aspects of educational institutions, we enable them to focus more on providing quality education and fostering innovation.
            </p>
            <p data-aos="fade-down" data-aos-delay="200" className='paragh'>
                Furthermore, we actively support educational institutions in aligning with the National Education Policy. This comprehensive policy covers a wide spectrum of school education, from pre-primary to senior secondary levels, with an emphasis on equity, quality, and innovation. As part of our collaboration, we help educational institutions implement the policy recommendations, such as the provision of 50 hours of mandatory continuous professional development for teachers, multiple entry and exit points for learners, and the establishment of academic credit banks. By facilitating the implementation of these recommendations, we contribute to the overall improvement of the education system.
            </p>
            <p data-aos="fade-down" data-aos-delay="200" className='paragh'>
                Cross-disciplinary learning and research are also integral to our partnerships with educational institutions. We create opportunities for students and faculty members to engage in collaborative projects and research related to sustainability and the circular economy. By exposing them to these important topics and providing hands-on experience, we nurture their understanding and expertise in these fields. Through such cross-disciplinary initiatives, we foster innovation and encourage the development of sustainable solutions.
            </p>
            <p data-aos="fade-down" data-aos-delay="200" className='paragh'>
                Overall, our partnerships with educational institutions are designed to create a strong foundation for sustainable development. By combining academic knowledge, practical experience, and operational excellence, we empower students and institutions to make a lasting impact on society and the environment.
            </p> 
        </div>
        <div id="ripal" name="ripal" className='section3 p-4'>
            <div className='image-text'>
                <div className='col-6 box-image'>
                    <img data-aos="flip-left" data-aos-delay="200" className='person' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849389/Circular%20website/ripal_h77oin.jpg" alt="ripal"/>
                    <p>Ripal Desai</p>
                </div>
                <p className='image-para'>
                Ripal Desai is an exceptional individual whose journey in the SBI Youth for India fellowship for rural development has been a transformative experience. Over the course of 13 months, she not only achieved remarkable personal growth but also gained valuable insights into the essence of life and community.
                    {showBtn?<button onClick={showContent} className='seemore'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                    <button onClick={hideContent} className='seemore' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                </p>  
            </div>
            <div className='image-text'>
                {show?<div className='d-flex flex-column'>
                <div data-aos="fade-down" className='ripal-pics d-flex mb-4' style={{justifyContent:"space-around"}}>
                    <img className='cimpic' style={{width:"32%"}} src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686401722/Circular%20website/ripal1_is9wu1.webp" alt="ripal" />
                    <img className='cimpic' style={{width:"32%"}} src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686401727/Circular%20website/ripal2_aiw4an.webp" alt="ripal" />
                    <img className='cimpic' style={{width:"32%"}} src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686401723/Circular%20website/ripal3_fqi1ia.jpg" alt="ripal" />
                </div>   
                <p data-aos="fade-down" className='image-para'>During this fellowship, Ripal discovered the immense impact that small steps can have on bringing about positive change. She realized that it is not just the actions themselves, but the way we engage and connect with people that truly matters. This understanding led her to prioritize meaningful relationships and empathetic interactions, transcending language barriers to create a sense of unity and belonging.<br/><br/>
                Living and working in rural areas exposed Ripal to diverse challenges and living conditions. However, she embraced each obstacle as an opportunity for growth and adaptation. She learned to thrive in resource-limited environments, understanding that happiness and fulfillment can be found with minimal material possessions. Through experiences of conserving water, living without electricity, and immersing herself in the simplicity of life, Ripal gained a profound appreciation for the concept of "less is more."<br/><br/>
                Throughout her fellowship, Ripal discovered the power of love and sharing as the true sources of happiness. She recognized that genuine connections and genuine happiness arise from celebrating others' joys and being grateful for the present moment. This profound understanding led her to realize that life's privileges are not a reflection of inherent superiority but rather a fortunate circumstance that should be utilized to make a positive impact on the lives of others.<br/><br/>
                Ripal also developed a deep appreciation for the wisdom and purity of children. Their ability to teach valuable lessons and inspire with their innocence touched her heart and reaffirmed her commitment to creating a better future for the younger generations.<br/><br/>
                With her vast experience in leadership programs, mentoring, coaching, and education, Ripal is dedicated to empowering individuals to reach their full potential. She is deeply involved in teaching methodologies, project implementation, capacity building, and planning programs for youth development and community upliftment. As an author of the book "You Don't Owe Anything to Anyone - Except Yourself," she shares her insights and wisdom to inspire others to embrace their own personal growth journeys.<br/><br/>
                Ripal Desai's incredible journey and unwavering dedication to rural development serve as an inspiration to others. Her commitment to making a difference, fostering genuine connections, and embracing the present moment embodies the values of compassion, gratitude, and community. With her passion and diverse skill set, Ripal continues to create a positive impact and contribute to the betterment of society.
                </p></div>:null}
            </div>  
        </div>
        <div className='section3 pl-5 pr-5 pb-5'>
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
