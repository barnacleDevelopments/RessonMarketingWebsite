import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ArrowButtonLink from "../buttons/ArrowButtonLink";

interface ActionSectionProps {
    title: string,
    content: string[],
    link: string,
}

const ActionSection = ({ title, content, link }: ActionSectionProps) => {
    return (
        <section className='action-section'>
            <div className="container">
                <div></div>
                <div className="action-content">
                    <div>
                        <h2>{title}</h2>
                        <hr />
                    </div>
                    {content.map((text: string, i: number) => <p key={i}>{text}</p>)}
                    <ArrowButtonLink to={link}>Learn How</ArrowButtonLink>
                </div>
            </div>
        </section>
    )
}

export default ActionSection;