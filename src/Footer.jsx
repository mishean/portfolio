import React from 'react'
import pdf from './docs/Resume.pdf'
import './Footer.css'

export default function Footer() {
    return (
        <div className='orange'>
            <a href="http://www.linkedin.com/in/mishean-peiris/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:misheanpeiris@gmail.com">email</a>
            <a href={pdf} target="_blank" rel="noreferrer">Resume</a>
            <p>Last Update: Jan 21, 2022</p>
        </div>
    )
}
