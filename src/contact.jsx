import React, {useEffect, useState } from 'react';
import Subject from './Subject';
import Name from './Name';
import Email from './Email';
import Message from './Message';
import emailjs from '@emailjs/browser';
import pdf from './docs/Resume.pdf'
import Footer from './Footer';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {IoDocument} from 'react-icons/io5'
import './Contact.css'

export const ContactUs = () => {

  const [value, setValue] = useState({
    subject: '', 
    name: '', 
    email: '', 
    message: ''
  });

  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_a96u9g9', 'template_psx5szc', value, 'user_3WG0u0eILBpstx5kc0doI')
      .then((result) => {
          console.log(result.text);
          setValue({ 
             subject: '', 
            name: '', 
            email: '', 
             message: ''
  });
          setStatus('Success')
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    if(status === 'Success') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

   const handleChange = (e) => {
    setValue(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
    <div className='contact-body'>
    {status && Alert()}
    <div>
        <h2>Send me a message :)</h2>
        <p>
                For a wider sample of work including public client projects, feel free to include a request for a portfolio in your message. 
        </p>
    </div>
    <form onSubmit={sendEmail}>
      <Subject value={value.subject} handleChange={handleChange} label='Subject' name='subject' type='text' placeholder = 'Subject' className={`input-input`}/>

      <Name value={value.name} handleChange={handleChange} label='Name' name='name' type='text' placeholder = 'Name' className={`input-input`}/>

     <Email value={value.email} handleChange={handleChange} label='Email' name='email' type='email' placeholder = 'Email' className={`input-input`}/>

      <Message value={value.message} handleChange={handleChange} label='Message' name='message' type='text' placeholder = 'Message' className={`input-input`}/>
      
      <input type="submit" value="Send" />
    </form>
    <div className='media-link'>
          <a href="http://www.linkedin.com/in/mishean-peiris/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a> 
            
          <a href="https://github.com/mishean"><BsGithub/></a>
          <a href="mailto:misheanpeiris@gmail.com"><MdEmail/></a>
          <a href={pdf} target="_blank" rel="noreferrer"><IoDocument/></a>
          
    </div>
    </div>
    <Footer className='w'/>
    </div>
  );
};

const Alert = () => (
  <div>
    <p>Your message was sent successfully, I'll respond asap!</p>
  </div>
)