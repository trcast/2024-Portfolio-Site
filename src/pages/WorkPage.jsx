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
        <div className="container work-page-container-top" id="webSection">
          <SectionHeader title="Web Design & Development" reverse={false} />
          <WorkPreviewSection projectType="web" />
        </div>
        <div
          className="container work-page-container-bottom"
          id="graphicSection"
        >
          <SectionHeader
            title="Graphic Design & Motion Graphics"
            reverse={true}
          />
          <WorkPreviewSection projectType="graphic" />
        </div>
      </section>
    </>
  );
};

export default WorkPage;
