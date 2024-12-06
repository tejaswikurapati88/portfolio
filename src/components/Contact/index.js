import './index.css'
import {React, useRef , useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact=()=>{
    const [email, setemail]= useState('')
    const [name, setName]= useState('')
    const [num, setNum]= useState('')
    const [subj, setSubj]= useState('')
    const [msg, setMsg]= useState('')
    const [iserr, setiserr]= useState(false)

    const form = useRef();

    const onSubmission=(event)=>{
        event.preventDefault()
        if (email ==='' || name==="" || num===""|| subj===""|| msg===""){
            setiserr(true)
        }else{
            setiserr(false)
        }
        emailjs
        .sendForm('service_jwnlfnq', 'template_1ocr7tc', form.current, {
            publicKey: 'hfyCqJk-0Q-DKXSBU',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setName('')
        setNum('')
        setemail('')
        setMsg('')
        setSubj('')
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        
    }
    return (
        <div className='bg-cont'>
            <div className='cont-ab'>
                <h1 className='about-head'>Contact <span className='home-span'>Me</span></h1>
                <form ref={form} onSubmit={onSubmission} className='form'>
                    <input name='from_name' id='name' onChange={(eve)=>{setName(eve.target.value)}} defaultValue={name}
                        className='inp-name' type='text' placeholder='Enter Your Name'/>
                    <input name='email' id='email' onChange={(eve)=>{setemail(eve.target.value)}} defaultValue={email}
                        className='inp-name' type='email' placeholder='Enter Your Mail Id'/>
                    <input name='number' id='number' onChange={(eve)=>{setNum(eve.target.value)}} defaultValue={num}
                        className='inp-name' type='tel' placeholder='Enter Your Mobile Number'/>
                    <input name='subject' id='subject' onChange={(eve)=>{setSubj(eve.target.value)}} defaultValue={subj}
                        className='inp-name' type='text' placeholder='Enter Your Subject Of The Mail'/>
                    <textarea rows='10' cols='50' name='message' id='mailtext' 
                        onChange={(eve)=>{setMsg(eve.target.value)}} defaultValue={msg}
                        className='inp' type='text' placeholder='Enter Your Message Here...' ></textarea>
                    <button class="custom-btn btn-12"><span>Click!</span><span>Submit</span></button>
                    <p className={iserr ? 'errclass' : 'none' }>**Please Provide Details</p>
                </form>

            </div>
        </div>
    )
}
export default Contact