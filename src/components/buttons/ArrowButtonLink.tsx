import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { ReactNode } from "react";
import Arrow from "../../images/arrow_inline.svg";

interface ArrowButtonLinkProps {
    to: string,
    children: ReactNode
}

const ArrowButtonLink = ({ to, children }: ArrowButtonLinkProps) => {
    return (
        <AnchorLink to={to} className="btn-primary link">
            <>{children}</>
            {<Arrow />}
        </AnchorLink>
    );
}

export default ArrowButtonLink;
