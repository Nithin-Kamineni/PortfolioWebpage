import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import reactScroll from "react-scroll";
import { LinksData, LinkType } from "./LinksData";
import styles from "./navbar.module.scss";

interface NavLink {
  id: string;
  title: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // const handleMobileMenuToggle = () => setIsMenuOpen((prevState) => !prevState);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      LinksData.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTopPos = section.offsetTop - 100;
          const sectionBottomPos = sectionTopPos + section.offsetHeight;
          if (currentScrollPos >= sectionTopPos && currentScrollPos < sectionBottomPos) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [LinksData]);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <h2 className={styles.logo}>V.N.K</h2>
        <div className={styles.desktopitems}>
          {LinksData.map((link) => (
            link.id != 'resume' ? <reactScroll.Link
              to={link.id}
              key={link.id}

              // className={styles.link}
              className={`${styles.link} ${activeSection === link.id ? styles.active : ""
                }`}

              spy={true}
              smooth={true}
              offset={-98}
              duration={500}>
              {link.title}
            </reactScroll.Link> :
              <span className={styles.resumelink}>
                <a href="https://example.com" onClick={() => window.location.assign('https://example.com')}>
                  Resume
                </a>
              </span>
          ))}
        </div>

        <div className={styles.mobileview}>
          <div
            className={
              isMenuOpen
                ? `${styles.mobilemenu} ${styles.active}`
                : styles.mobilemenu
            }
            onClick={handleMobileMenuToggle}
          >
            <IoMenu size={40} color="#ffffff" />
          </div>

          <div
            className={
              !isMenuOpen
                ? `${styles.mobilemenu} ${styles.active}`
                : styles.mobilemenu
            }
            onClick={handleMobileMenuToggle}
          >
            <IoClose size={40} color="#ffffff" />
          </div>
        </div>
      </div>
      <div
        className={
          isMenuOpen
            ? `${styles.mobileMenuModal} ${styles.active}`
            : styles.mobileMenuModal
        }
      >
        {LinksData.map((link) => (
          <reactScroll.Link
            activeClass={styles.active}
            to={link.id}
            key={link.title}
            className={styles.mobileLinks}
            onClick={handleMobileMenuToggle}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            {link.title}
          </reactScroll.Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;