/**
 * Author: Devin Davis
 * Date: 2022-02-14 4:54 PM 
 */

import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Partner } from "../../queries/partner";

const PartnerItem = ({ node }: any) => {
  const { frontmatter }: Partner = node;

  let partnerImg: IGatsbyImageData = getImage(frontmatter?.thumnail);

  return (
    <a href={frontmatter.partnerURL} target="_blank">
      {
        <div>
          {frontmatter.thumnail?.extension === 'svg' ?
            <img
              style={{ width: "100%" }}
              src={frontmatter.thumnail.publicURL}
              alt={`The logo of ${frontmatter.title} a partner of Resson.`}
            /> :
            <GatsbyImage
              imgStyle={{ width: "100%" }}
              style={{ width: "100%" }}
              image={partnerImg}
              crossOrigin="anonymous"
              alt={`The logo of ${frontmatter.title} a partner of Resson.`}
            />}
        </div>
      }
    </a>
  );
}

export default PartnerItem;
