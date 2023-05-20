import dev from "../img/dev.jpg";
import cv from "../img/resume.pdf"

function AboutMe() {
    return (
        <div className="about-me" id="about-me">
            <div className="about-me-container">
                <h1>About Me</h1>
                <div className="about-content">
                    <div className="about-img">
                        <img src={dev} alt="Developer" />
                    </div>
                    <div className="about-text">
                        <h2>Who Am I?</h2>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="about-btns">
                            <a className="resume" href={cv} download="cv_Daniela_Ciubari.pdf">Download CV</a>
                        </div>
                        <a href="https://airport-md.vercel.app">egeg</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;