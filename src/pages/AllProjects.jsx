import carQ from "../img/car-q.png";
import clothesShop from "../img/cloths-shop.png";
import weatherApp from "../img/weatherapp.jpg";
import todo from "../img/todo2.png";
import itstep from "../img/itstep.jpg";
import porshe from "../img/porsche.jpg";
import skyrim from "../img/skyrim.png";
import portfolio from "../img/portfolio.png";
import railway from "../img/railway.jpg";
import airport from "../img/airport.png";
import furniture from "../img/furniture.png";
import {Link} from 'react-router-dom';

function AllProjects() {
    return(
        <section id="all-projects">
            <div className="all-projects-container">
                <h1>Portfolio</h1>
                <div className="personal-cont">
                    <h2>Personal Projects</h2>
                    <div className="personal-projects">
                        <div className="project">
                            <figure>
                                <img src={portfolio} alt="porfolio" />
                            </figure>
                            <div className="project-content">
                                <h3>My Porfolio</h3>
                                <p>Welcome to my personal portfolio website project, a captivating showcase of my skills and accomplishments. Explore my diverse range of projects, discover my passion, expertise, and creative journey as you navigate through this dynamic digital portfolio that reflects my professional identity.</p>
                                <div className="tools">
                                    <span>React</span>
                                    <span>JSX</span>
                                    <span>SCSS</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/Portfolio.git" target="_blnk">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <Link to={`/`}>Live Preview</Link>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src={todo} alt="ToDo App" />
                            </figure>
                            <div className="project-content">
                                <h3>ToDo App</h3>
                                <p>Stay organized and boost your productivity with a sleek and intuitive ToDo App, built using HTML, CSS, and JavaScript. Effortlessly manage your tasks, set reminders, and track your progress in a stylish interface that keeps you on top of your daily activities.</p>
                                <div className="tools">
                                    <span>VueJS 2</span>
                                    <span>VueX</span>
                                    <span>JS</span>
                                    <span>Tailwindcss</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/ToDoApp.git" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="https://to-do-app-delta-wine.vercel.app" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src={weatherApp} alt="Weather App" />
                            </figure>
                            <div className="project-content">
                                <h3>Weather App</h3>
                                <p>Discover the Weather App, a dynamic and visually captivating web application crafted with HTML, CSS, and JavaScript. Stay informed and explore real-time weather data, including forecasts, temperature, humidity, and more, all presented in a user-friendly interface.</p>
                                <div className="tools">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>JS</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/Weather-app.git" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="https://weather-app-six-sand-18.vercel.app" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src={clothesShop} alt="Clothes Shop" />
                            </figure>
                            <div className="project-content">
                                <h3>Clothes Shop landing page</h3>
                                <p>Indulge in a delightful shopping experience at our online Clothes Shop, powered by HTML, CSS, and JavaScript. Browse through a wide selection of trendy apparel, effortlessly navigate user-friendly categories, and enjoy a visually appealing interface that brings the joy of fashion right to your fingertips.</p>
                                <div className="tools">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>JS</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/Cloths-shop.git" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="https://cloths-shop.vercel.app" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                        <div className="project blured-proj">
                            <figure>
                                <img src={furniture} alt="Furniture Shop" className="blured"/>
                            </figure>
                            <div className="project-content">
                                <h3>Furniture Shop</h3>
                                <span className="coming">Comming Soon</span>
                                <p className="blured">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vel.</p>
                                <div className="tools blured">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>JS</span>
                                </div>
                                <div className="projects-btns blured">
                                    <a href="#" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="#" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recreated-cont">
                    <h2>Recreated Code Showcase</h2>
                    <div className="recreated-projects">
                        <div className="project">
                            <figure>
                                <img src={itstep} alt="It Step" />
                            </figure>
                            <div className="project-content">
                                <h3>IT Step Academy, Front End Course Page</h3>
                                <p>Witness my coding expertise as I faithfully recreated IT Step Academy's Frontend Web Deevlopement coure page, preserving their original design and structure through careful code replication.</p>
                                <div className="tools">
                                    <span>React</span>
                                    <span>JSX</span>
                                    <span>SCSS</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/IT-Step.git" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="https://it-step.vercel.app" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src={carQ} alt="Car quiz" />
                            </figure>
                            <div className="project-content">
                                <h3>Car Quiz</h3>
                                <p>With a seamless blend of HTML, CSS, and JavaScript, this project delivers a visually appealing and user-friendly quiz experience. Engage in an immersive learning adventure, track your progress, and see how well you know the world of automobiles.</p>
                                <div className="tools">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>JS</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/Car-quiz.git" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="https://car-quiz.vercel.app" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src={railway} alt="Russian Railway" />
                            </figure>
                            <div className="project-content">
                                <h3>Railway landing page</h3>
                                <p>Witness my coding expertise as I faithfully recreated Railway's leading page, preserving their original design and structure through careful code replication.</p>
                                <div className="tools">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>JS</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/Railway.git" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="https://railway-bay.vercel.app" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src={porshe} alt="Porche Moldova" />
                            </figure>
                            <div className="project-content">
                                <h3>Porsche Moldova landing page</h3>
                                <p>Witness my coding expertise as I faithfully recreated Porsche's Moldova leading page, preserving their original design and structure through careful code replication.</p>
                                <div className="tools">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/Porche.git" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="https://porche.vercel.app" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src={airport} alt="Airport Moldova" />
                            </figure>
                            <div className="project-content">
                                <h3>Airport Moldova landing page</h3>
                                <p>Witness my coding expertise as I faithfully recreated Moldova's Airport leading page, preserving their original design and structure through careful code replication.</p>
                                <div className="tools">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/AirportMD.git" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="https://airport-md.vercel.app" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src={skyrim} alt="Skyrim" />
                            </figure>
                            <div className="project-content">
                                <h3>Skyrim landing page</h3>
                                <p>Witness my coding expertise as I faithfully recreated Skyrim's leading page, preserving their original design and structure through careful code replication.</p>
                                <div className="tools">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                                <div className="projects-btns">
                                    <a href="https://github.com/DannaDean/Skyrim.git" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                        Github
                                    </a>
                                    <a href="https://skyrim-three.vercel.app" target="_blank">Live Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    );
};

export default AllProjects;