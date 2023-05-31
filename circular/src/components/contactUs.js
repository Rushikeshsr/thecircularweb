import React from 'react'
import '../css/contactus.css'
const ContactUs = () => {
  return (
    <>
    <div className='p-5'>
        <h2 className='main-heading'>Contact Us</h2>
        <p className='para'>Please feel free to reach out to us for all your questions and concerns</p>
    </div>
    <div id="supportus" className='section2 p-5'>
        <h2 className='main-heading'style={{color:"aliceblue"}}>Support Us</h2>
    </div>
    <div id="joinus" className='section4 p-5'>
        <h2 className='main-heading'>Join Us</h2>
        <form className='form'>
            <div className='form-group mb-3'>
                <label htmlFor='name' className='label mb-2'>Please state your full name</label>
                <input required id='name' name='name' type="text" placeholder='Enter your full name' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='emailId'  className='label mb-2'>What is your email?</label>
                <input required id='emailId' name='email' type="email" placeholder='Enter your email' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='age'  className='label mb-2'>Please state your age</label>
                <input required id='age' name='age' type="number" placeholder='Enter your age' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='valAddMessage' className='label mb-2'>What value are you able to add to The Circular?</label>
                <textarea required id='valAddMessage' rows={4} cols={55} name='valAddMessage' type="text" placeholder='Please mention briefly' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='timeMessage' className='label mb-2'>As a volunteer, how much time are you wiling to delicate to The Circular per week?</label>
                <textarea required id='timeMessage' rows={4} cols={55} name='timeMessage' type="text" placeholder='Please mention briefly' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='exciteMessage' className='label mb-2'>What excites you the most about being a volunteer at The Circular?</label>
                <textarea required id='exciteMessage' rows={4} cols={55} name='exciteMessage' type="text" placeholder='Please mention briefly' className='form-control'/>
            </div>
            <button type="submit" className='button' style={{border:"1px solid", borderColor:"black"}}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default ContactUs