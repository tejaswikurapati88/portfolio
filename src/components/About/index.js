import './index.css'

const About=()=>{
    return (
        <div className='bg-cont-abt' id='about'
            style={{
                scrollMarginTop: "69px"
            }}
        >
            <div className='cont-ab ab-con'>
                <h1 className='about-head'>About <span className='home-span'>Me</span></h1>
                <p className='about-p abt-p'>I’m a Full Stack Developer with a strong foundation in HTML, 
                    CSS, JavaScript, Bootstrap, SQL, MongoDB, Node.js, Express.js, ReactJS, and Figma. 
                    I’m passionate about using these skills to develop innovative web applications that are user-friendly. 
                    I’m always eager to learn more about web development and marketing. I enjoy the challenge of coding and solving 
                    real-world problems. Currently,
                    I’m looking for opportunities to join a team that values innovation and shares my enthusiasm for technology.</p>
            </div>
        </div>
    )
}

export default About