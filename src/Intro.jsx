import React from 'react';
import Footer from './Footer';
import './Intro.css'
import Image from './Picture';

export default function Intro() {
    return (
        <div>
        <div className='body-main'>
            <div className='main'>
            <p className='intro-p'>
                I am a Toronto based Front-End Developer / UI designer specalizing in building e-commerce, portfolio and experimental art apps 👨🏾‍💻
            </p>
            <div className='image'>
            <Image/>
            </div>
            <h2 className='title'>
                Services
            </h2>
            <ul>
                <li>Website Development</li>
                <li>Email Template Design</li>
                <li>SEO Optimization</li>
                <li>Data Analytics</li>
                <li>Branding / Visual Identity</li>
                <li>Custom Shopify Theme</li>
            </ul>
            <h2 className='title'>Tools</h2>
            <ul>
                <li>
                    HTML
                </li>
                <li>
                    CSS & SCSS
                </li>
                <li>
                    Markdown
                </li>
                <li>
                    Javascript
                </li>
                <li>
                    React
                </li>
                <li>
                    Redux
                </li>
                <li>
                    Node.js
                </li>
                <li>
                    Express.js
                </li>
                <li>
                    SQL
                </li>
                <li>
                    Git
                </li>
                <li>
                    Github
                </li>
                <li>
                    Google Analytics
                </li>
                <li>
                    Mocha
                </li>
                <li>
                    Jest
                </li>
                <li>
                    Selenium
                </li>
                <li>
                    Enzyme
                </li>
                <li>
                    Gulp
                </li>
                <li>
                    Webpack
                </li>
                <li>
                    Figma
                </li>
                <li>
                    Shopfiy
                </li>
                <li>
                    Notion
                </li>
            </ul>
            </div>
            <Footer/>
        </div>
        </div>
    )
}
