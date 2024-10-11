import { Link } from 'gatsby';
import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Arrow from "../images/arrow_inline.svg";

interface BannerProps {
    text?: string[],
    linkText: string,
    to: string
}

const Banner = ({ text, linkText, to }: BannerProps) => {
    return (
        <div className='banner'>
            {(linkText && !text) && <AnchorLink to={to}>{linkText} {<Arrow />}</AnchorLink>}
            {linkText && text &&
                <div>{text.map((t, i) => <span key={i}>{t}</span>)}
                    <Link to={to} style={{ textDecoration: 'underline' }}>{linkText} {<Arrow />}</Link>
                </div>}
        </div>
    )
}

export default Banner;