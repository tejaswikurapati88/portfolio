import './index.css'
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoGmail } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";

const Home=()=>{
    return (
        <div className='home-bg-cont'>
            <div className='home-name-cont'>
                <p className='head-home'>Hello, I am</p>
                <h1 className='name-head-home'>Tejaswi Kurapati<br/>
                    I'm a <span className='home-span'>Full Stack Developer</span> 
                </h1>
                <p className='desc'>Passionate about creating intuitive and engaging user experiences. 
                    Specialize in transforming ideas into beautifully crafted products..</p>
                <div className='icons'>
                    <div className='icon-cont'>
                        <a href="https://github.com/tejaswikurapati88" className='ancher'><FaGithub className='icon' /></a>
                        <a href="https://www.linkedin.com/in/1tejaswi1/" className='ancher'><TiSocialLinkedin className='icon' /></a>
                        <a href="mailto:tejaswikurapati88@gmail.com" className='ancher'><BiLogoGmail className='icon' /></a>
                    </div>
                </div>
                <button className='down-btn' type='button'>Download Resume <FaDownload className='dow-icon' /> </button>
            </div>
            <div id='box'>
                <img src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1732708927/HTR_7698_wyvnc3.jpg' 
                alt='img' />
            </div>
        </div>
    )
}

export default Home