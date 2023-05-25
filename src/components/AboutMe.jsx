import { Link } from "react-router-dom";
import dev from "../img/dev.jpg";
import cv from "../img/resume.pdf";
// import More from "../pages/More";

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
                        <p>
                            Welcome to my page! My name is Daniela Ciubari, and I'm a 20-year-old student. My journey into the world of web development began around three years ago when I was still in high school. Initially, programming was far from my mind, but it all changed when we had a few lessons on HTML and CSS. I found myself genuinely captivated by these topics, but unfortunately, I forgot about them soon after. However, fate had other plans for me... </p>
                        <div className="about-btns">
                            <Link to={`/More/`}>More</Link>
                            <a className="resume" href={cv} download="cv_Daniela_Ciubari.pdf">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;