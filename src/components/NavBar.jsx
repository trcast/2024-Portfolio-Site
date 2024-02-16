import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoName from "/assets/brand/logo-name.svg";
import "../App.css";
import "../styles/homepage.css";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -64;
      const sectionTop = section.offsetTop;
      window.scrollTo({ top: sectionTop + offset, behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (sectionId, pagePath, event) => {
    if (location.pathname === "/" && sectionId) {
      // If on the homepage and sectionId is provided, scroll to the section
      event.preventDefault(); // Prevent the default link behavior
      scrollToSection(sectionId);
    } else {
      // If not on the homepage or sectionId is not provided, navigate to the specific page
      navigate(pagePath, { state: { sectionId } });
    }
  };

  useEffect(() => {
    const { state } = location;
    if (state && state.sectionId) {
      scrollToSection(state.sectionId);
    }
  }, [location]);

  return (
    <section className="nav-section">
      <div className="nav-container space-between-h">
        <Link to={"/"}>
          <img
            src={LogoName}
            alt=""
            onClick={() => scrollToSection("heroSection")}
          />
        </Link>
        <div className="nav-links">
          <a
            href={"/works"}
            onClick={(e) => handleNavLinkClick("worksSection", "/works", e)}
          >
            <p className="semibold hover-underline-animation">Work</p>
          </a>
          <a
            href={"/about"}
            onClick={(e) => handleNavLinkClick("aboutSection", "/about", e)}
          >
            <p className="semibold hover-underline-animation">About</p>
          </a>
          <a
            href={"/services"}
            onClick={(e) =>
              handleNavLinkClick("servicesSection", "/services", e)
            }
          >
            <p className="semibold hover-underline-animation">Services</p>
          </a>
          <a
            href={"/contact"}
            onClick={(e) => handleNavLinkClick("contactSection", "/contact", e)}
          >
            <p className="semibold hover-underline-animation">Contact</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
