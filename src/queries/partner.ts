/**
 * Author: Devin Davis
 * Date: 2022-03-17 9:02 PM 
 * Explainer: This is a query fragment definition for use on components and pages.
 */

import { graphql } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

interface Thumnail extends FileNode {
    publicURL: string
}

export interface PartnerFrontmatter {
    thumnail: Thumnail;
    title: string;
    description: string;
}

export interface Partner {
    frontmatter: PartnerFrontmatter,
    fields: {
        slug: string
    }
}

export const partnerFragments = graphql`
    fragment PartnerFrontmatter on MarkdownRemarkFrontmatter {
        title
        description
        partnerURL
        thumnail {
            childImageSharp {
              gatsbyImageData
            }
            extension
            publicURL
        }

        
    }

    fragment PartnerMarkdown on MarkdownRemark {
        frontmatter {
          ...PartnerFrontmatter
        }
        fields {
            slug
        }
    }
`