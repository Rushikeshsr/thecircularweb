import React, {useState, useEffect} from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import "../css/circulareconomy.css"
import Aos from 'aos'

const Nature = () => {
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
        <div className='cover-imageN p-5'>
            <h1 className='cover-text' style={{color:"aliceblue", opacity:"0.8", textShadow:"2px 2px 20px black"}}>Nature</h1>
        </div>
        <div className='section2'>
            <p className='paragh'>
                Nature's beauty and resilience inspire us to protect and conserve our planet. We are deeply committed to conserving and protecting our precious natural resources. We believe that by safeguarding the environment, we can create a sustainable future for generations to come. Through our innovative initiatives and collaborative efforts, we strive to make a positive impact on our ecosystems and empower communities to become stewards of nature.
            </p>
            <p className='paragh'>
                Nature is at the heart of everything we do. We understand the urgent need to address environmental challenges and find innovative solutions that strike a balance between human development and the preservation of our natural heritage. That's why we have dedicated ourselves to the cause of conservation, working tirelessly to safeguard biodiversity, protect habitats, and restore ecosystems.
            </p>
            <div className='paragh d-flex justify-content-center'>
                <video className='nature-video' width="700px" height="400px" controls>
                    <source src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1685849405/Circular%20website/nature_video_b5hduy.mp4" type='video/mp4'/>
                </video> 
            </div>
            <p className='paragh'>
                <span className='font-head' style={{fontSize:"20px",color:"#00ff0d"}}>Our conservation efforts span a wide range of areas, including</span>
            </p>
            <p className='paragh'>
                <span className='font-head' style={{fontSize:"20px",color:"#00ff0d"}}>Biodiversity Protection</span><br/>
                We actively engage in initiatives that aim to preserve and restore biodiversity hotspots. By collaborating with local communities, experts, and conservation organizations, we develop comprehensive strategies that protect endangered species, conserve natural habitats, and promote sustainable practices that benefit both wildlife and communities.
            </p>
            <p className='paragh'>
                <span className='font-head' style={{fontSize:"20px",color:"#00ff0d"}}>Ecological Restoration</span><br/>
                We believe in the power of restoration to heal our damaged ecosystems. Through reforestation, wetland rehabilitation, and habitat restoration projects, we work to revive and revitalize degraded areas. By nurturing healthy ecosystems, we can mitigate the effects of climate change, enhance biodiversity, and provide vital ecological services.
            </p>
            <p className='paragh'>
                <span className='font-head' style={{fontSize:"20px",color:"#00ff0d"}}>Sustainable Land and Water Management</span><br/>
                We promote sustainable practices that ensure the responsible management of land and water resources. Our initiatives include watershed management, soil conservation, and the implementation of sustainable agricultural practices. By advocating for responsible land and water use, we strive to create a harmonious relationship between human activities and the environment.
            </p>
            <p className='paragh'>
                <span className='font-head' style={{fontSize:"20px",color:"#00ff0d"}}>Environmental Education and Awareness</span><br/>
                We promote sustainable practices that ensure the responsible management of land and water resources. Our initiatives include watershed management, soil conservation, and the implementation of sustainable agricultural practices. By advocating for responsible land and water use, we strive to create a harmonious relationship between human activities and the environment.
            </p>
            <p className='paragh'>
                We believe that conserving nature is not a solitary endeavor. It requires collective action and collaboration. That's why we actively seek partnerships with like-minded organizations, government agencies, and individuals who share our passion for conservation. By working together, we can amplify our impact and create a powerful force for change.
            </p>
        </div>
        <div className='section3'>
            <h1 className='main-heading mb-3'>We are working against time to reach our milestones</h1>
            <div  className='paragh d-flex justify-content-center'>
                <video className='nature-video' width="700px" height="400px" autoPlay={true} controls>
                    <source src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1685871769/Circular%20website/duet_video_xtcgdb.mp4" type='video/mp4'/>
                </video> 
            </div>
        </div>
        <div id="vasudev" name="vasudev" className='section3'>
            <div className='image-text'>
                <div className='col-6 box-image'>
                    <img data-aos="flip-left" className='person' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849395/Circular%20website/vasudevv_sodpzp.jpg" alt="vasudev"/>
                    <p>Vasudev Vangara</p>
                </div>
                <p className='para image-para'>
                Vasudev Vangara is a passionate individual dedicated to making a positive impact on the environment and society. Currently, he holds the position of Head at Viswambhara Eco Services LLP, an organization committed to building soil health, conserving water, and promoting tree plantation for the betterment of all life forms.&nbsp;
                    {showBtn?<button onClick={showContent} className='seemore'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                    <button onClick={hideContent} className='seemore' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                </p>  
            </div>
            <div className='col-12 image-text'>
                {show?<p data-aos="fade-down" className='para image-para'>One of Vasudev's notable projects is "Premaculture," which embodies a profound love for nature and follows permaculture principles. Through this initiative, he aims to establish a deep and lasting connection with nature while fostering sustainability and ecological balance.
                Additionally, Vasudev is actively involved in several other projects, including "The Water Bank Project" and "The Veggie Civilization." These projects focus on promoting water conservation and creating backyards, lawns, and terrace kitchen gardens to encourage sustainable living practices.<br/><br/>
                Prior to his current role, Vasudev served as the Head of Implementation at Creya Learning & Research, where he inspired and guided thousands of students to innovate through STEM (Science, Technology, Engineering, and Mathematics) and design thinking methodologies. His work at Creya played a pivotal role in nurturing the creative thinking and problem-solving skills of the younger generation.<br/><br/>
                Vasudev has also made significant contributions in the non-profit sector. During his tenure at The Akshaya Patra Foundation and Samhita Social Ventures, he played a crucial role in forging strong corporate partnerships and implementing CSR (Corporate Social Responsibility) projects. His expertise and dedication helped create sustainable and impactful initiatives within these organizations.<br/><br/>
                Furthermore, Vasudev's commitment to education and social upliftment led him to serve as a Teach For India fellow, where he had the privilege of teaching and guiding a group of exceptional children. His experience as an educator allowed him to make a meaningful difference in the lives of young learners. Currently, he's working as Senior Venture coach at GITAM University.<br/><br/>
                Vasudev's extensive involvement in various initiatives and organizations highlights his multifaceted approach towards addressing environmental, educational, and social challenges. With his diverse background, entrepreneurial spirit, and unwavering commitment to sustainable practices, Vasudev Vangara is making a significant contribution towards creating a better and more inclusive world.
                </p>:null}
            </div>  
        </div>
        <div className='section2'>
            <div id="story6" name="story6" className='m-4 d-flex justify-content-center'>
                <div data-aos="zoom-in" className='cardbox d-flex' style={{boxShadow:"2px 2px 10px aliceblue"}}>
                    <img className='image-card' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849360/Circular%20website/6story_m2aaof.jpg"} alt="Prameela"/>
                    <div className='textbox'>
                        <h1 className='audio-head' style={{fontWeight:"bold",marginBottom:"15px", color:"aliceblue"}}>Prameela</h1>
                        <p className='image-para' style={{color:"aliceblue"}}>
                        In her pursuit of a fulfilling livelihood, Prameela came across the world of organic farming. Drawn to its sustainable practices, environmental consciousness, and potential for financial independence, she saw an opportunity to transform her life while contributing to a healthier and more sustainable future. Armed with her newfound skills and expertise, As Prameela delved into the intricacies of agricultural productivity, she discovered innovative techniques and technologies that could enhance farming practices and maximize crop yields. With unwavering dedication, she immersed herself in implementing cutting-edge methods such as soil health management and water conservation strategies. By adopting these approaches, Prameela not only witnessed a significant increase in agricultural productivity but also experienced a profound sense of purpose and accomplishment.. Her commitment to agriculture not only provided her with financial stability but also instilled a deep sense of fulfillment and purpose in her life.
                        </p>
                    </div>
                </div>
            </div>
            <div id="story7" name="story7" className='m-4 d-flex justify-content-center'>
                <div data-aos="zoom-in"  className='cardbox d-flex' style={{boxShadow:"2px 2px 10px aliceblue"}}>
                    <img className='image-card' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849360/Circular%20website/7story_fglbbf.jpg"} alt="Chandrakala"/>
                    <div className='textbox'>
                        <h1 className='audio-head' style={{fontWeight:"bold",marginBottom:"15px", color:"aliceblue"}}>Chandrakala</h1>
                        <p className='image-para' style={{color:"aliceblue"}}>
                        Chandrakala's life took an unexpected turn when she lost her husband. Left to shoulder the responsibility of her family, she sought ways to provide for her children and secure a better future for them. In her quest for sustainable livelihood options, Chandrakala discovered the world of natural farming. Intrigued by its principles of ecological balance and self-sufficiency, she saw an opportunity to not only support her family but also contribute to the well-being of her community. With unwavering determination, she immersed herself in the knowledge and practices of natural farming. Her commitment to sustainable practices not only yielded bountiful harvests but also preserved the environment for future generations. Through her hard work and dedication, she achieved financial independence. The income generated from her natural farming endeavors became the primary source of sustenance for her family. Moreover, she empowered her son by involving him in farm activities, providing him with a valuable source of income by selling organic produce in nearby cities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section3'>
            <div className="image-container abhay-pics mb-4">
                <img data-aos="flip-right" data-aos-delay="100" className='nepic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849383/Circular%20website/neAbhay1_c4wpce.jpg"} alt="neAbhay1"/>
                <img data-aos="flip-down" data-aos-delay="100" className='nepic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849388/Circular%20website/neAbhay4_tn7uir.jpg"} alt="neAbhay1"/>
                <img data-aos="flip-left" data-aos-delay="100" className='nepic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849386/Circular%20website/neAbhay3_dmoub5.jpg"} alt="neAbhay4"/>
            </div>
        </div>
    </>
  )
}

export default Nature;