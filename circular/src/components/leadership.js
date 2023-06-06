import React,{useEffect} from 'react'
import "../css/leadership.css"
import Aos from 'aos'

const Leadership = () => {
    useEffect(()=>{
        Aos.init({duration:1000,easing:'ease-in'});
      },[]);
  return (
    <>
    <div className='p-5'>
        <h2 className='main-heading'>LEADERSHIP</h2>
        <p className='lpara mb-5'>
            At <span style={{color:"00ffod"}}>The Circular</span>, our vision is to create a sustainable and inclusive world, where communities thrive in harmony with the environment. We envision zero-disease sustainable communities, where individuals have equal opportunities, access to essential services, and a high quality of life. We aspire to build a future where human well-being and ecological balance go hand in hand, fostering a resilient planet for generations to come.
        </p>
        <div className='profile'>
            <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686030527/Circular%20website/skbp_pic_k9yxuw.jpg" alt="aishwaryak"/>
                <div className='lpara'>
                    <p>Name</p>
                    <p>Designation</p>
                    <p>mail</p>
                </div>                
            </div>
            <p className='para'>description</p>
        </div>
        <div className='profile'>
            <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686030527/Circular%20website/skbp_pic_k9yxuw.jpg" alt="aishwaryak"/>
                <div className='lpara'>
                    <p>Name</p>
                    <p>Designation</p>
                    <p>mail</p>
                </div>                
            </div>
            <p className='para'>description</p>
        </div>
        <div className='profile'>
            <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686030527/Circular%20website/skbp_pic_k9yxuw.jpg" alt="aishwaryak"/>
                <div className='lpara'>
                    <p>Name</p>
                    <p>Designation</p>
                    <p>mail</p>
                </div>                
            </div>
            <p className='para'>description</p>
        </div>
        <div className='profile'>
            <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686030527/Circular%20website/skbp_pic_k9yxuw.jpg" alt="aishwaryak"/>
                <div className='lpara'>
                    <p>Name</p>
                    <p>Designation</p>
                    <p>mail</p>
                </div>                
            </div>
            <p className='para'>description</p>
        </div>
        <div className='profile'>
            <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686030527/Circular%20website/skbp_pic_k9yxuw.jpg" alt="aishwaryak"/>
                <div className='lpara'>
                    <p>Name</p>
                    <p>Designation</p>
                    <p>mail</p>
                </div>                
            </div>
            <p className='para'>description</p>
        </div>

       


    </div>
    </>
  )
}

export default Leadership;
