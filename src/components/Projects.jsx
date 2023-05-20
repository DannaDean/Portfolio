import { useState, useEffect } from "react";
import carQuiz from "../img/car-quiz.png";
import clothesShop from "../img/cloths-shop.png";
import weatherApp from "../img/weatherapp.jpg";
import dodoapp from "../img/todo-app.png"
import itstep from "../img/itstep.jpg"
import { ProjectItem } from "./ProjectsItem";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.scss';
import { Link} from "react-router-dom";

function Projects() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    const projects = [
        {
            image: carQuiz,
            name: "Car Quiz",
            description: "Experience an engaging and visually appealing car quiz project that tests your automotive knowledge, built with HTML, CSS, and JavaScript."
        },
        {
            image: weatherApp,
            name: "Weather App",
            description: "Explore real-time weather data and forecasts in a visually captivating Weather App, developed using HTML, CSS, and JavaScript."
        },
        {
            image: dodoapp,
            name: "To Do App",
            description: "Stay organized and boost your productivity with a sleek and intuitive ToDo App, built using Vue and Tailwindcss."
        },
        {
            image: clothesShop,
            name: "Clothes Shop",
            description: "Indulge in a delightful shopping experience at my online Clothes Shop landing page, powered by HTML, CSS, and JavaScript."
        },
        {
            image: itstep,
            name: "IT Step",
            description: "Recreated Code Showcase for IT Step Academy official website, Front End Web Develope Course page, built using React, JSX and SCSS."
        }
    ];

    const project = projects.map(item => <ProjectItem name={item.name} image={item.image} description={item.description}/>
    )
    
    return (
        <div className="projects">
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="projects-slider">
                    <Carousel 
                        draggable={false} 
                        responsive={responsive}
                        itemClass="carousel-item-padding-40-px"
                    >
                        {project}
                    </Carousel>
                    <div className="all-proj">
                        <Link to={`/AllProjects/`}>
                            <button>All Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;