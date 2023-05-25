import React from "react";

export const ProjectItem = (props) => {

    return <div className="slider-item">
        <img className="product--image" src={props.image} alt="" />
        <div className="info">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
        <div className="info-btns">
            <a href={props.github} target="_blank">
                <i class="fa-brands fa-github"></i>
                <span>Github</span>
            </a>
            <a href={props.live} className="active" target="_blank">Live Preview</a>
        </div>
    </div>
}