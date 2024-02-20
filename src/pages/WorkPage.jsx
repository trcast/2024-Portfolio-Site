import React from "react";
import { useEffect } from "react";
import "../styles/work-page.css";
import SectionHeader from "../components/SectionHeader";
import WorkPreviewSection from "../components/sections/WorkPreviewSection";

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <div className="container work-page-container-top" id="graphicSection">
          <SectionHeader
            title="Graphic Design & Motion Graphics"
            reverse={false}
          />
          <WorkPreviewSection projectType="graphic" />
        </div>
        <div className="container work-page-container-bottom" id="webSection">
          <SectionHeader title="Web Design & Development" reverse={true} />
          <WorkPreviewSection projectType="web" />
        </div>
      </section>
    </>
  );
};

export default WorkPage;
