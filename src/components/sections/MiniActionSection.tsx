import React from "react";
import ArrowButtonLink from "../buttons/ArrowButtonLink";

interface MiniActionSectionProps {
    title: string,
    link: string
}

const MiniActionSection = ({ title, link }: MiniActionSectionProps) => {
    return (
        <section className='mini-action-section'>
            <h2>{title}</h2>
            <ArrowButtonLink to={link}>Read More</ArrowButtonLink>
        </section>
    )
}

export default MiniActionSection;