import React from 'react'
import "../css/circulareconomy.css"
import nature_video from '../images/nature_video.mp4';
import story6 from '../images/6story.jpg';
import story7 from '../images/7story.jpg';
import neAbhay1 from '../images/neAbhay1.jpg';
import neAbhay3 from '../images/neAbhay3.jpg';
import neAbhay4 from '../images/neAbhay4.jpg';

const Nature = () => {
  return (
    <>
        <div className='cover-imageN p-5'>
            <h1 className='cover-text' style={{color:"aliceblue", opacity:"0.8", textShadow:"2px 2px 20px black"}}>Nature</h1>
        </div>
        <div className='section2 p-5'>
            <p className='paragh'>
                Nature's beauty and resilience inspire us to protect and conserve our planet. We are deeply committed to conserving and protecting our precious natural resources. We believe that by safeguarding the environment, we can create a sustainable future for generations to come. Through our innovative initiatives and collaborative efforts, we strive to make a positive impact on our ecosystems and empower communities to become stewards of nature.
            </p>
            <p className='paragh'>
                Nature is at the heart of everything we do. We understand the urgent need to address environmental challenges and find innovative solutions that strike a balance between human development and the preservation of our natural heritage. That's why we have dedicated ourselves to the cause of conservation, working tirelessly to safeguard biodiversity, protect habitats, and restore ecosystems.
            </p>
            <div className='paragh text-center'>
                <video width="700px" height="400px" controls>
                    <source src={nature_video} type='video/mp4'/>
                </video> 
            </div>
            <p className='paragh'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Our conservation efforts span a wide range of areas, including</span>
            </p>
            <p className='paragh'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Biodiversity Protection</span><br/>
                We actively engage in initiatives that aim to preserve and restore biodiversity hotspots. By collaborating with local communities, experts, and conservation organizations, we develop comprehensive strategies that protect endangered species, conserve natural habitats, and promote sustainable practices that benefit both wildlife and communities.
            </p>
            <p className='paragh'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Ecological Restoration</span><br/>
                We believe in the power of restoration to heal our damaged ecosystems. Through reforestation, wetland rehabilitation, and habitat restoration projects, we work to revive and revitalize degraded areas. By nurturing healthy ecosystems, we can mitigate the effects of climate change, enhance biodiversity, and provide vital ecological services.
            </p>
            <p className='paragh'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Sustainable Land and Water Management</span><br/>
                We promote sustainable practices that ensure the responsible management of land and water resources. Our initiatives include watershed management, soil conservation, and the implementation of sustainable agricultural practices. By advocating for responsible land and water use, we strive to create a harmonious relationship between human activities and the environment.
            </p>
            <p className='paragh'>
                <span style={{fontSize:"20px",color:"#00ff0d"}}>Environmental Education and Awareness</span><br/>
                We promote sustainable practices that ensure the responsible management of land and water resources. Our initiatives include watershed management, soil conservation, and the implementation of sustainable agricultural practices. By advocating for responsible land and water use, we strive to create a harmonious relationship between human activities and the environment.
            </p>
            <p className='paragh'>
                We believe that conserving nature is not a solitary endeavor. It requires collective action and collaboration. That's why we actively seek partnerships with like-minded organizations, government agencies, and individuals who share our passion for conservation. By working together, we can amplify our impact and create a powerful force for change.
            </p>
        </div>
        <div id="story6" name="story6" className='section3 d-flex justify-content-center p-5'>
            <div data-aos="zoom-in" className='cardbox d-flex'>
                <img className='image-card' src={story6} alt="Prameela"/>
                <div className='textbox'>
                    <h1 className='audio-head' style={{fontWeight:"bold",marginBottom:"15px"}}>Prameela</h1>
                    <p className='image-para'>
                    In her pursuit of a fulfilling livelihood, Prameela came across the world of organic farming. Drawn to its sustainable practices, environmental consciousness, and potential for financial independence, she saw an opportunity to transform her life while contributing to a healthier and more sustainable future. Armed with her newfound skills and expertise, As Prameela delved into the intricacies of agricultural productivity, she discovered innovative techniques and technologies that could enhance farming practices and maximize crop yields. With unwavering dedication, she immersed herself in implementing cutting-edge methods such as soil health management and water conservation strategies. By adopting these approaches, Prameela not only witnessed a significant increase in agricultural productivity but also experienced a profound sense of purpose and accomplishment.. Her commitment to agriculture not only provided her with financial stability but also instilled a deep sense of fulfillment and purpose in her life.
                    </p>
                </div>
            </div>
        </div>
        <div id="story7" name="story7" className='section3 d-flex justify-content-center p-5'>
            <div data-aos="zoom-in"  className='cardbox d-flex'>
                <img className='image-card' src={story7} alt="Chandrakala"/>
                <div className='textbox'>
                    <h1 className='audio-head' style={{fontWeight:"bold",marginBottom:"15px"}}>Chandrakala</h1>
                    <p className='image-para'>
                    Chandrakala's life took an unexpected turn when she lost her husband. Left to shoulder the responsibility of her family, she sought ways to provide for her children and secure a better future for them. In her quest for sustainable livelihood options, Chandrakala discovered the world of natural farming. Intrigued by its principles of ecological balance and self-sufficiency, she saw an opportunity to not only support her family but also contribute to the well-being of her community. With unwavering determination, she immersed herself in the knowledge and practices of natural farming. Her commitment to sustainable practices not only yielded bountiful harvests but also preserved the environment for future generations. Through her hard work and dedication, she achieved financial independence. The income generated from her natural farming endeavors became the primary source of sustenance for her family. Moreover, she empowered her son by involving him in farm activities, providing him with a valuable source of income by selling organic produce in nearby cities.
                    </p>
                </div>
            </div>
        </div>
        <div className='p-5'>
            <div className="image-container mb-4">
                <img data-aos="flip-right" data-aos-delay="100" className='nepic' src={neAbhay1} alt="neAbhay1"/>
                <img data-aos="flip-down" data-aos-delay="100" className='nepic' src={neAbhay4} alt="neAbhay1"/>
                <img data-aos="flip-left" data-aos-delay="100" className='nepic' src={neAbhay3} alt="neAbhay4"/>
            </div>
        </div>
    </>
  )
}

export default Nature;