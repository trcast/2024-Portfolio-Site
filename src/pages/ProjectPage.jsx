import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import workdata from "../data/workdata";
import "../styles/projectpage.css";
import SectionHeader from "../components/SectionHeader";
import ButtonSm from "../components/ButtonSm";
import ButtonLg from "../components/ButtonLg";
import LinkIcon from "/assets/brand/link-sm-black.svg";
import ReactPlayer from "react-player";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();
  const project = workdata.find((item) => item.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  // const paragraphs = project.brief.split("\n\n");
  // const briefParagraphs = paragraphs.map((paragraph, index) => (
  //   <p key={index} style={{ marginBottom: "1em" }}>
  //     {paragraph}
  //   </p>
  // ));

  let briefParagraphs = [];

  if (project.brief) {
    const paragraphs = project.brief.split("\n\n");
    briefParagraphs = paragraphs.map((paragraph, index) => (
      <p key={index} style={{ marginBottom: "1em" }}>
        {paragraph}
      </p>
    ));
  }

  const imageContainerClassName =
    project.projectImages && project.projectImages.length <= 2
      ? "project-images-container single-column"
      : "project-images-container double-column";

  return (
    <section className="project-page-container">
      <div className="container">
        <SectionHeader title={project.name} reverse={false} />
        <div className="hero-image-container">
          {project.heroMediaType === "image" ? (
            <img src={project.heroMedia} alt="" />
          ) : project.heroMediaType === "video" ? (
            <ReactPlayer
              url={project.heroMedia}
              controls={true}
              light={project.videoCover}
              width="100%"
              height="500px"
            />
          ) : null}
        </div>
        {project.brief ? (
          <div className="info-container">
            <div className="brief-container">
              <p className="dark-gray">{briefParagraphs}</p>
            </div>
            <div className="details-container">
              <div className="detail-line-container">
                <div className="detail-line">
                  <p className="dark-gray">Services</p>
                  <div className="services-container">
                    {project.services.map((service) => {
                      return <p className="white">{service}</p>;
                    })}
                  </div>
                </div>
                <div className="detail-line">
                  <p className="dark-gray">Client</p>
                  <p className="white">{project.client}</p>
                </div>
                <div className="detail-line">
                  <p className="dark-gray">Year</p>
                  <p className="white">{project.year}</p>
                </div>
              </div>
              {project.link && (
                <div className="button-container">
                  <a
                    href={project.link}
                    className="full-width-link"
                    target="blank"
                  >
                    <ButtonSm
                      title="View Live Project"
                      image={LinkIcon}
                      darkMode={false}
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : null}
        {project.projectImages ? (
          <section className={imageContainerClassName}>
            {project.projectImages.map((image, index) => {
              return (
                <div className="image-container">
                  <img key={index} src={image} alt={`Image ${index}`} />
                </div>
              );
            })}
          </section>
        ) : null}
        <Link to={"/works"}>
          <ButtonLg title="View All Work" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectPage;
