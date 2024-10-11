import { Link } from "gatsby";
import React from "react";

// Components
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Icons
import FacebookIcon from "../../images/icons/facebook_logo_inline.svg"
import LinkdinIcon from "../../images/icons/linkedin_logo_inline.svg"
import RessonLogo from '../../images/icons/resson_logo_inline.svg'
import ArrowButtonLink from "../buttons/ArrowButtonLink";

const Footer = () => {

  return (
    <footer>
      <div className="footer-content container">
        <div className="footer-image">
          <Link to="/">
            <RessonLogo />
          </Link>
        </div>
        <div className="footer-contact-options">
          <ArrowButtonLink to='/contact'>Book a Demo</ArrowButtonLink >

        </div>
        <div className="footer-nav">
          <ul>
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/about">About</Link>
          </ul>
          <ul>
            <Link className="nav-item" to="/technology">Technology</Link>
            <AnchorLink className="nav-item" to="/about/#about-sustainability">Sustainability</AnchorLink>
          </ul>
          <ul>
            <Link className="nav-item" to="/articles">Articles</Link>
            <Link className="nav-item" to="/contact">Contact</Link>
          </ul>
        </div>
        <div className="footer-contact-options desktop">
          <div>
            <ArrowButtonLink to="/contact">Book a Demo</ArrowButtonLink>

            <div className="media-group">
              <a href="https://www.facebook.com/ressonaerospace/">
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/company/resson/">
                <LinkdinIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="media-group">
          <a href="https://www.facebook.com/ressonaerospace/">
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com/company/resson/">
            <LinkdinIcon />
          </a>
        </div>
      </div>
      <hr/>
      <p>2022 | Resson Aerospace Inc. | All Rights Reserved | Privacy Policy | Terms and Conditions | 46 Dineen Dr, Fredericton, NB E3B 9W4, Canada </p>
    </footer >
  )
}

export default Footer;