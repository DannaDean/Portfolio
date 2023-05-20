import React from "react";

export const ProjectItem = (props) => {

    return <div className="slider-item">
        <img className="product--image" src={props.image} alt="" />
        <div className="info">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
        <div className="info-btns">
            <button>
                <i class="fa-brands fa-github"></i>
                <span>Github</span>
            </button>
            <button className="active">Live Preview</button>
        </div>
    </div>
}