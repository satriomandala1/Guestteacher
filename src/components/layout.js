
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import React, { useEffect, useState } from "react";


const Layout = (props) => {
  const data = useLocation();
  const { title, children, social } = props;

  const [toggleNav, setToggleNav] = React.useState(false);
useEffect(() => {
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return; // ⛑️ Cegah error kalau elemen belum ada

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  
  return (
    
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head" id="navbar">
        <div className="site-head-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <a
            className="nav-burger"
            href="#"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>

          <nav id="swup" className="site-head-left navbar-text">
            <ul className="nav" role="menu" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <li className={`nav-home ${data.pathname.includes("/profile") ? "nav-current" : ""}`} role="menuitem">
                <Link to="/profile">About</Link>
              </li>
              <li className={`nav-home ${data.pathname.includes("/work") ? "nav-current" : ""}`} role="menuitem">
                <Link to="/work">Introduction</Link>
              </li>
              <li className={`nav-home ${data.pathname === "/sold" ? "nav-current" : ""}`} role="menuitem">
                <Link to="/sold">Documentation</Link>
              </li>
              <li className={`nav-home ${data.pathname.includes("/news") ? "nav-current" : ""}`} role="menuitem">
                <Link to="/news">Materials</Link>
              </li>
              <li className={`nav-home ${data.pathname.includes("/artikel") ? "nav-current" : ""}`} role="menuitem">
                <Link to="/artikel">Article</Link>
              </li>
              <li className={`nav-home ${data.pathname.includes("/contact") ? "nav-current" : ""}`} role="menuitem">
                <Link to="/contact">Contact</Link>
              </li>
              <li className={`nav-home ${data.pathname === "/" ? "nav-current" : ""}`} role="menuitem">
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          

          <div className="site-head-right">
            <div className="social-links">
              <a
                href={`https://www.facebook.com/AretaCollege/${social.facebook}`}
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href={`https://www.instagram.com/areta_informaticscollege/${social.twitter}`}
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=6281285234904&text=Hallo%20kak%2C%20saya%20Desi.%20Ada%20yang%20bisa%20saya%20bantu%3F"
                title="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="site-main" className="site-main" style={{ backgroundColor: "white" }}>
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>

 <footer className="site-foot">
       
        <a
          href="https://pmb.aretacollege.com/"
          target="_blank"
          rel="noopener noreferrer"
        >

    <div class="marquee-content">
      PT. ARETANET INDONESIA 
    </div>
   




        </a>
      </footer>
    </div>
  );
};

export default Layout;
