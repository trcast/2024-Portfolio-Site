import React from "react";
import Arrow from "/assets/brand/arrow-sm-white.svg";
import "../../styles/work-preview.css";
import { Link } from "react-router-dom";

const WorkPreviewCard = (props) => {
  return (
    <Link to={`/projects/${props.slug}`} className="work-card-link">
      <div className="work-card-container">
        <img className="preview-img" src={props.previewImage} alt="" />
        <div className="work-info-container">
          <div className="work-info">
            <p className="dark-gray">{props.year}</p>
            <img src={Arrow} alt="" />
          </div>
          <div className="work-info-name-chips">
            <h6 className="semibold white">{props.name}</h6>
            <div className="work-chip-contianer">
              {props.services.map((service, index) => {
                return (
                  <div className="work-chip" key={index}>
                    <p className="chip dark-gray">{service}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkPreviewCard;
