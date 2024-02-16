import React from "react";
import workdata from "../../data/workdata";
import WorkPreviewCard from "./WorkPreviewCard";
import "../../styles/work-preview.css";

const WorkPreviewSection = ({ projectType }) => {
  const filteredWorkData = workdata.filter((item) => {
    if (projectType === "web") {
      return item.type === "web";
    } else if (projectType === "graphic") {
      return item.type === "graphic";
    } else {
      return true;
    }
  });

  const workCards = filteredWorkData.map((item, index) => (
    <WorkPreviewCard
      key={index}
      previewImage={item.previewImage}
      year={item.year}
      name={item.name}
      services={item.services}
      slug={item.slug}
    />
  ));

  return (
    <>
      <div className="work-preview-section">{workCards}</div>
    </>
  );
};

export default WorkPreviewSection;
