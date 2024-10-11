/**
 * Author: Devin Davis
 * Date: 2022-02-14 4:54 PM 
 */

import React, { useState, useEffect } from "react";

// Components
import { Link } from "gatsby";
import useWindowSize from '../../hooks/useWindowSize'
import RessonLogo from '../../images/icons/resson_logo_inline.svg'

const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const { width } = useWindowSize()

  useEffect(() => {
    enableScroll();
  }, [])

  useEffect(() => {
    if (width > 500) {
      setSideNavOpen(false)
      enableScroll()
    }

  }, [width])

  function disableScroll() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
  }

  function enableScroll() {
    window.onscroll = function () { };
  }

  function openMobileNav() {
    setSideNavOpen(true)
    disableScroll()
  }

  function closeMobileNav() {
    setSideNavOpen(false)
    enableScroll()
  }

  return (
    <div>
      <div className={`${sideNavOpen ? "open" : null} navbar`}>
        <nav className="desktop-nav container">
          <div className="nav-logo">
            <Link to="/">
              <RessonLogo />
            </Link>
          </div>
          <div className="nav-list nav-effect">
            <Link className="nav-item" activeStyle={{ color: "#484848" }} to="/">Home</Link>
            <Link className="nav-item" activeStyle={{ color: "#484848" }} to="/about">About</Link>
            <Link className="nav-item" activeStyle={{ color: "#484848" }} to="/technology">Technology</Link>
            <Link className="nav-item" activeStyle={{ color: "#484848" }} to="/articles">Articles</Link>
            <Link className="nav-item" activeStyle={{ color: "#484848" }} to="/contact">Contact</Link>
            <Link className="nav-item" to="/contact" className="btn-primary" >BOOK A DEMO</Link>
          </div>
          <div className={`hamburger-button ${sideNavOpen ? "open" : ""}`} onClick={!sideNavOpen ? openMobileNav : closeMobileNav}>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <nav className={`${sideNavOpen ? "open" : null} mobile-nav`}>
          <div className="mobile-nav-list">
            <Link activeStyle={{ color: "#484848" }} to="/about">About</Link>
            <Link activeStyle={{ color: "#484848" }} to="/technology">Technology</Link>
            <Link activeStyle={{ color: "#484848" }} to="/articles">Articles</Link>
            <Link activeStyle={{ color: "#484848" }} to="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
