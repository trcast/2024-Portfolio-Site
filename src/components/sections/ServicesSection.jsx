import React from "react";
import ServiceComp from "./ServiceComp";

import "../../styles/services-preview.css";

const ServicesSection = () => {
  return (
    <div className="service-section-container">
      <ServiceComp
        title="Graphic Design"
        description="Unlock the power of visual storytelling with my versatile graphic design services. From crafting memorable logos to comprehensive branding packages, I bring creativity and precision to every design element. Whether you need striking illustrations or dynamic motion graphics, my well-versed graphic design skills are tailored to meet your unique requirements. Let's collaborate to visually communicate your brand's identity and leave a lasting impression on your audience."
        sectionId="graphicSection"
      />
      <ServiceComp
        title="Motion Graphics"
        description="Take your brand to the next level with captivating motion graphics. Whether it's a visually engaging logo animation or a compelling promotional video, I use my expertise to bring your ideas to life. Elevate your digital presence and leave a lasting impact with expertly crafted motion graphics that set your brand apart in the online landscape."
        sectionId="graphicSection"
      />
      <ServiceComp
        title="Web Design"
        description="Elevate your online presence with expert web design services. Whether you need a stunning website or a captivating app, I bring a creative touch to every project. Beyond layout and aesthetics, I also specialize in branding, ensuring your digital identity reflects the essence of your brand. From conceptualization to implementation, I work closely with you to deliver visually appealing and user-friendly designs that leave a lasting impression."
        sectionId="webSection"
      />
      <ServiceComp
        title="Illustration"
        description="As an illustrator and motion graphic designer, I transform ideas into captivating visual narratives. From sketching the essence of your characters to breathing life into them with dynamic motion graphics, I craft engaging storytelling experiences. Whether you seek captivating visuals for marketing campaigns, or immersive animations for interactive presentations, I bring creativity and technical skill to every project. With a keen eye for detail and a passion for visual storytelling, I ensure that each illustration and motion graphic not only captivates your audience but also effectively communicates your message across various mediums."
        sectionId="graphicSection"
      />
    </div>
  );
};

export default ServicesSection;
