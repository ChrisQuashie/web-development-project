import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const socialMediaIcons = [
    { id: 1, icon: faFacebook, ariaLabel: "Facebook Link", href: "https://www.facebook.com/profile.php?id=100080516095302", color: "#1877F2" },
    { id: 2, icon: faInstagram, ariaLabel: "Instagram Link", href: "https://www.instagram.com/_mbame/", color: "#E1306C" },
    { id: 3, icon: faYoutube, ariaLabel: "YouTube Link", href: "https://www.youtube.com/@mbamequashie", color: "#FF0000" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  const handleFixedNav = () => {
    setIsFixed(window.scrollY >= 100);
  };

  const handleSectionChange = () => {
    const sections = ["home", "about", "services", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setActiveSection(section);
        }
      }
    });
  };

  // Update active section when hash changes
  const [activeSection, setActiveSection] = useState<string>(location.hash.replace("#", "") || "home");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("scroll", handleFixedNav);
    window.addEventListener("scroll", handleSectionChange);

    // Update active section on hash change
    const handleHashChange = () => {
      const section = location.hash.replace("#", "");
      if (section) {
        setActiveSection(section);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("scroll", handleFixedNav);
      window.removeEventListener("scroll", handleSectionChange);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [isOpen, location]);

  return (
    <div>
      {/* Navbar Wrapper */}
      <nav
        className={`bg-black h-20 flex items-center justify-between px-5 lg:px-10 z-50 ${
          isFixed ? "fixed w-full top-0 shadow-lg" : ""
        } transition-all`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full">
            <img className="w-full h-full" src={logo} alt="logo" aria-label="Logo icon" />
          </div>
          <p className="text-lg lg:text-xl text-white font-semibold">Chris Quashie</p>
        </div>

        {/* Center Nav Links */}
        <ul className="hidden lg:flex gap-8 text-gray-300 text-sm lg:text-base">
          {["home", "about", "services", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`transition duration-300 hover:scale-105 ${
                  activeSection === section ? "text-red-400" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media and Hamburger Icon */}
        <div className="flex items-center gap-4">
          {/* Social Media Icons (Visible on Large Screens) */}
          <div className="hidden lg:flex gap-4">
            {socialMediaIcons.map((icon) => (
              <a
                key={icon.id}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.ariaLabel}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: icon.color }}
              >
                <FontAwesomeIcon icon={icon.icon} className="text-white" />
              </a>
            ))}
          </div>

          {/* Hamburger Icon (Visible on Small Screens) */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer w-10 h-10 bg-purple-300 flex flex-col gap-1.5 items-center justify-center rounded-md lg:hidden"
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-6 h-0.5 bg-black"></div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-purple-300 bg-opacity-90 z-40 transition-all duration-500 ${
          isOpen ? "h-screen" : "h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-white text-lg mt-24">
          {["Home", "About", "Services", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="transition-transform duration-300 hover:scale-110"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(false)}
          className="w-10 h-10 rounded-full bg-white text-black text-xl font-bold absolute top-10 right-10"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default Navbar;
