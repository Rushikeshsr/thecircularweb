import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import '../css/contactus.css'
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
    <div className='p-5'>
        <h2 className='main-heading'>Contact Us</h2>
        <p className='para'>Please feel free to reach out to us for all your questions and concerns</p>
    </div>
    <div id="supportus" className='section2 p-5'>
        <h2 className='main-heading'style={{color:"aliceblue"}}>Support Us</h2>
    </div>
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
    </>
  )
}

export default ContactUs