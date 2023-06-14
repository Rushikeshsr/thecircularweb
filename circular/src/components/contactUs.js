import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import '../css/contactus.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope} from "react-icons/fa";
const ContactUs = () => {
    const [form,setForm] = useState({user_name:"",
                        user_email:"",
                        user_age:"",
                        valAddMessage:"",
                        timeMessage:"",
                        exciteMessage:""});
    const [success, setSuccess]=useState("")
    const [error, setError]=useState("")

    const {user_name,user_email,user_age,valAddMessage,timeMessage,exciteMessage} = form;
    const change=(e)=>{
        let {name,value}=e.target
        setForm({...form,[name]:value})
    }
    const submit=async(e)=>{
        e.preventDefault();
        await emailjs.sendForm('service_c1c983s', 'template_bfd1om9', e.target, 'CjkcV7UygqPYvBkSu')
        .then((result) => {
            console.log(result.text);
            setSuccess("Your Form is Submitted Successfully!!!. Our Team will reach out to you soon...")
            setError("")
        }, (error) => {
            console.log(error.text);
            setSuccess("")
            setError(`Error encountered due to ${error.message}`)
        });
        setForm({user_name:"",user_email:"",user_age:"",valAddMessage:"",timeMessage:"",exciteMessage:""})
    }
  return (
    <>
        <div id="joinus" className='section4 p-5'>
            <h2 className='main-heading'>Join Us</h2>
            <form onSubmit={submit} className='form'>
                <div className='form-group mb-3'>
                            <label htmlFor='user_name' className='label mb-2'>Please state your full name</label>
                            <input required id='user_name' name='user_name' onChange={change} value={user_name} type="text" placeholder='Enter your full name' className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                            <label htmlFor='user_email'  className='label mb-2'>What is your email?</label>
                            <input required id='user_email' name='user_email' onChange={change} value={user_email} type="email" placeholder='Enter your email' className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                            <label htmlFor='user_age'  className='label mb-2'>Please state your age</label>
                            <input required id='user_age' name='user_age' onChange={change} value={user_age} type="number" placeholder='Enter your age' className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                            <label htmlFor='valAddMessage' className='label mb-2'>What value are you able to add to The Circular?</label>
                            <textarea required id='valAddMessage' onChange={change} value={valAddMessage} rows={4} cols={55} name='valAddMessage' type="text" placeholder='Please mention briefly' className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                            <label htmlFor='timeMessage' className='label mb-2'>As a volunteer, how much time are you willing to dedicate to The Circular per week?</label>
                            <textarea required id='timeMessage' onChange={change} value={timeMessage} rows={4} cols={55} name='timeMessage' type="text" placeholder='Please mention briefly' className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor='exciteMessage' className='label mb-2'>What excites you the most about being a volunteer at The Circular?</label>
                    <textarea required id='exciteMessage' onChange={change} value={exciteMessage} rows={4} cols={55} name='exciteMessage' type="text" placeholder='Please mention briefly' className='form-control'/>
                </div>
                <button type="submit" className='button mb-3' style={{border:"1px solid", borderColor:"black"}}>Submit</button>
            </form>
            {success?<div className='sub-heading text-alert'>{success}</div>:null}
            {error?<div className='sub-heading text-danger'>{error}</div>:null}
        </div>
        <div className='section2 p-5'>
            <h2 className='main-heading' style={{color:"aliceblue"}}>Contact Us</h2>
            <p className='paragh'>Please feel free to reach out to us for all your questions and concerns</p>
            <p className='paragh'><FaPhone style={{fontSize:'20px'}}/>&nbsp;&nbsp;+917032064985</p>
            <p className='paragh'><FaEnvelope style={{fontSize:'20px'}}/>&nbsp;&nbsp; president@thecircular.in <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;secretary@thecircular.in</p>
            <div className='d-flex paragh'>
                <FaMapMarkerAlt style={{fontSize:'25px'}}/>
                <div>
                    <p style={{fontSize:"20px", fontFamily:"montserrat"}}>&nbsp;India</p>
                    <p style={{fontSize:"15px", fontFamily:"montserrat"}}>&nbsp;Hyderabad</p>
                    <p style={{fontSize:"15px", fontFamily:"montserrat"}}>&nbsp;New Delhi</p>
                </div>
            </div>
        </div>
        <div id="supportus" className='section3 p-5'>
            <h2 className='main-heading'style={{color:"balck"}}>Support Us</h2>
            <p className='para'>
            Hello, Distinguished and Passionate Humans.
            We hope all is well with you.
            We appreciate you stopping by and reading thus far on our website. We are aware of your never-ending workload in this VUCA world. Let's pause for a moment, though, to thank nature for being so patient despite how long we plunder the resources to sate our avarice. In this regard, it is our duty to ensure that we are protecting the environment and improving it for the sake of our future generations. Please donate what you can in order to help us serve our planet on your behalf.
            </p>
            <p className='para d-flex' style={{justifyContent:"space-around",alignItems:"center"}}>
                <img style={{width:"500px"}} src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685897213/Circular%20website/HypupAd-Pay-Frame006_nhsys2.png" alt="paymentoptions"/>
                <div className='text-center'>
                    <img style={{width:"200px", height:"200px"}} src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685897424/Circular%20website/IMG_20230604_185315_cxbqzg.jpg" alt="QRcode"/>
                    <p className='para'>abhikeyfoundation@uboi</p>
                </div>
                
            </p>
            
        </div>
    
    </>
  )
}

export default ContactUs