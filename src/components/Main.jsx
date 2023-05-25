import Me from '../img/hero-img/my.JPG'

function Main() {
    return (
        <div className="main">
            <section id="hero">
                <div className="aboutme-text">
                    <h1>Hi, <br /> I am <span>Daniela</span> <br /> Front End Web Developer</h1>
                    <div className='socials'>
                        <div className="social">
                            <div className="icon">
                                <a href="https://github.com/DannaDean" target="_blank">
                                    <i class="fa-brands fa-github"></i>
                                </a> 
                            </div>
                            <span>
                                <a href="https://github.com/DannaDean" target="_blank">Github</a>
                            </span>
                        </div>
                        <div className="social">
                            <div className="icon">
                                <a href="https://www.linkedin.com/in/daniela-ciubari-615236257/" target="_blank">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                            <span><a href="https://www.linkedin.com/in/daniela-ciubari-615236257/" target="_blank">Linkedin</a></span>
                        </div>
                        <div className="social">
                            <div className="icon">
                                <a href="https://www.instagram.com/daniellaciubari/" target="_blank">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            <span>
                                <a href="https://www.instagram.com/daniellaciubari/" target="_blank">Instagram</a>
                            </span>
                        </div>
                        <div className="social">
                            <div className="icon">
                                <a href="https://www.facebook.com/dana.ciubari/" target="_blank">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                            </div>
                            <span>
                                <a href="https://www.facebook.com/dana.ciubari/" target="_blank">Facebook</a>
                            </span>
                        </div>
                    </div>
                    <p>I love building <span>interactive</span> websites. I got the most job satisfaction from creating new content every day.</p>
                </div>
                <div className="my-photo">
                    <img src={Me} alt="My photo" />
                </div>
            </section>
        </div>
    );
};

export default Main;