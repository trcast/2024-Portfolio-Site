import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/about-page.css";
import SectionHeader from "../components/SectionHeader";
import ButtonSm from "../components/ButtonSm";
import Download from "/assets/brand/download-black.svg";
import Send from "/assets/brand/send-black.svg";
import Figma from "/assets/brand/tools/figma.svg";
import ReactImg from "/assets/brand/tools/react.svg";
import AfterEffects from "/assets/brand/tools/aftereffects.svg";
import Illustrator from "/assets/brand/tools/illustrator.svg";
import Photoshop from "/assets/brand/tools/photoshop.svg";
import Blender from "/assets/brand/tools/blender.svg";
import Premiere from "/assets/brand/tools/premiere.svg";
import VScode from "/assets/brand/tools/vscode.svg";
import Resume from "/assets/work/resume.pdf";
import Profile from "/assets/brand/social/profile.png";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    window.open(Resume, "_blank");
  };

  return (
    <>
      <section>
        <div className="container about-section-header">
          <SectionHeader title="About Me" reverse={false} />
          <div className="bio-section">
            <div className="bio-container">
              <p className="white">
                With an artistic journey spanning over seven years, I have
                immersed myself in graphic design and motion graphics, fueled by
                an unwavering passion for the diverse realms of art and design.
                I staunchly believe in the power of multidisciplinary expertise,
                embodying a commitment to continually broaden my skills across
                web design, development, graphic design, and motion graphics.
                {<br />}
                {<br />} In the realm of continuous learning, I am currently
                undertaking the Front-End Web Developer course on Scrimba, with
                an ambitious goal to complete it before the close of 2024. This
                endeavor epitomizes my dedication to staying at the forefront of
                technological advancements and mastering the intricacies of
                modern web development. {<br />}
                {<br />}Approaching challenges, be they visual or technical, is
                an integral part of my creative process. I tackle each problem
                with the conviction that dedicated work and thorough research
                can unlock solutions. This mindset guides my artistic endeavors,
                propelling me to explore diverse design disciplines and
                technical domains. By seamlessly integrating graphic design and
                motion graphics with my evolving web design and development
                skills, I aspire to craft holistic and captivating digital
                experiences that resonate with audiences across various
                platforms.
              </p>
            </div>
            <div className="btn-container">
              <button className="sm-btn-white" onClick={handleDownload}>
                <p>Download Resume</p>
                <img src={Download} alt="" />
              </button>
              <Link to={"/contact"} className="btn-link">
                <ButtonSm darkmode={false} title="Get in Touch" image={Send} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SectionHeader title="Process" reverse={true} />
          <div className="service-cards-container">
            <div className="service-card">
              <div className="service-card-header">
                <p className="dark-gray">01</p>
                <h6 className="semibold white">Research & Planning</h6>
              </div>
              <p className="dark-gray">
                I immerse myself in understanding the project’s objectives,
                target audience, and unique requirements.
              </p>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                <p className="dark-gray">02</p>
                <h6 className="semibold white">Design & Development</h6>
              </div>
              <p className="dark-gray">
                This is where I bring ideas to life with a solid plan and
                technical skill.
              </p>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                <p className="dark-gray">03</p>
                <h6 className="semibold white">Testing & Execution</h6>
              </div>
              <p className="dark-gray">
                This includes code testing and design feedback, to ensure
                seamless performance and execution of the client’s vision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SectionHeader title="tools" reverse={false} />
          <div className="about-tools-container-lg">
            <div className="tools-top">
              <div className="tool-chip-lg">
                <img src={Figma} alt="" />
                <h6>Figma</h6>
              </div>
              <div className="tool-chip-lg">
                <img src={ReactImg} alt="" />
                <h6>React</h6>
              </div>
              <div className="tool-chip-lg">
                <img src={AfterEffects} alt="" />
                <h6>After Effects</h6>
              </div>
              <div className="tool-chip-lg">
                <img src={Illustrator} alt="" />
                <h6>Illustrator</h6>
              </div>
            </div>
            <div className="tools-bottom">
              <div className="tool-chip-lg">
                <img src={Photoshop} alt="" />
                <h6>Photoshop</h6>
              </div>
              <div className="tool-chip-lg">
                <img src={Blender} alt="" />
                <h6>Blender</h6>
              </div>
              <div className="tool-chip-lg">
                <img src={Premiere} alt="" />
                <h6>Premiere</h6>
              </div>
              <div className="tool-chip-lg">
                <img src={VScode} alt="" />
                <h6>VS Code</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
