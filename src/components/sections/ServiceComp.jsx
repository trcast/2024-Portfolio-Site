import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import PlusIcon from "/assets/brand/plus-service.svg";
import ButtonSm from "../ButtonSm";
import ArrowSm from "/assets/brand/arrow-sm-black.svg";
import "../../styles/services-preview.css";

const ServiceComp = ({ title, description, sectionId }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="service-comp-container">
      <div className="service-comp-title" onClick={toggleDescription}>
        <h5 className="white">{title}</h5>
        <img
          src={PlusIcon}
          alt="plus icon"
          className={showDescription ? "rotate-in" : "rotate-out"}
        />
      </div>
      <div
        className={`service-comp-descript ${
          showDescription ? "slide-down" : ""
        }`}
      >
        <p className="dark-gray">{description}</p>

        <div className="service-btn-container">
          <HashLink to={`/works#${sectionId}`} smooth>
            <ButtonSm title="View Projects" image={ArrowSm} />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceComp;
