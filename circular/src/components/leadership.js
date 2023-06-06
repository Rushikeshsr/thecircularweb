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
            <h2 className='main-heading text-center'>LEADERSHIP</h2>
            <hr className='h-line'/>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686030527/Circular%20website/skbp_pic_k9yxuw.jpg" alt="skbp"/>
                    <div className='lpara'>
                        <p>Dr. S.K. Bikshapathy</p>
                        <p>Chairman</p>
                        <p>mail</p>
                    </div>                
                </div>
                <p className='para'>description</p>
            </div>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849361/Circular%20website/AbhayCSwb_bfwjla.png" alt="abhay"/>
                    <div className='lpara'>
                        <p>Abhay Chakra Sadineni</p>
                        <p>President</p>
                        <p>mail</p>
                    </div>                
                </div>
                <p className='para'>description</p>
            </div>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686048185/Circular%20website/rushi_pic_s7qs8q.jpg" alt="rushi_pic"/>
                    <div className='lpara'>
                        <p>Rushikeshwar Sunkey</p>
                        <p>General Secretary</p>
                        <p>mail</p>
                    </div>                
                </div>
                <p className='para'>description</p>
            </div>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686047689/Circular%20website/passport_photo1_cm5emw.jpg" alt="saimanishekar"/>
                    <div className='lpara'>
                        <p>Sai Mani Shekar Sundharagiri</p>
                        <p>Head of Digital Transformation</p>
                        <p>mail</p>
                    </div>                
                </div>
                <p className='para'>description</p>
            </div>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686048337/Circular%20website/Adi_Pic_xt0iiz.jpg" alt="adi_pic"/>
                    <div className='lpara'>
                        <p>Adi Sheshan Mula</p>
                        <p>Head of Supply Chain Management</p>
                        <p>mail</p>
                    </div>                
                </div>
                <p className='para'>description</p>
            </div>

        


        </div>
        <div className='section4 p-5'>
            <h2 className='main-heading text-center'>ADVISORS</h2>
            <hr className='h-line' style={{borderColor:"aliceblue", opacity:"1"}}/>
        </div>
    </>
  )
}

export default Leadership;
