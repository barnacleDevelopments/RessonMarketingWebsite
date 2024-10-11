

/**
 * Author: Devin Davis
 * Date: 2022-04-07 4:54 PM 
 */

import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { TeamMember } from '../../queries/team';

const TeamMemberItem = ({ node }: any) => {
    const { frontmatter }: TeamMember = node;

    let memberImg: IGatsbyImageData = getImage(frontmatter?.thumnail);

    return (
        <div>
            {frontmatter.thumnail?.extension === 'svg' ?
                <img
                    style={{ width: "216px" }}
                    src={frontmatter.thumnail.publicURL}
                    alt={`Self-portrait of ${frontmatter.name} the ${frontmatter.role} at Resson.`}
                /> :
                <GatsbyImage
                    image={memberImg}
                    style={{ width: '110px', height: '110px' }}
                    imgStyle={{ width: "100%", objectFit: 'cover', borderRadius: '6px' }}
                    crossOrigin="anonymous"
                    alt={`Self-portrait of ${frontmatter.name} the ${frontmatter.role} at Resson.`}
                />}
            <div className='team-member-item'>
                <h3>{frontmatter.name}</h3>
                <h4>{frontmatter.role}</h4>
                <p>{frontmatter.about}</p>
            </div>
        </div>
    );
}

export default TeamMemberItem;
