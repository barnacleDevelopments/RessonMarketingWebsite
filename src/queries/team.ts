/**
 * Author: Devin Davis
 * Date: 2022-03-17 9:02 PM 
 * Explainer: This is a query fragment definition for use on components and pages.
*/

import { graphql } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

export interface TeamMemberFrontmatter {
    thumnail: FileNode;
    name: string,
    about: string,
    role: string
}

export interface TeamMember {
    frontmatter: TeamMemberFrontmatter;
    fields: {
        slug: string;
    }
}

export const teamMemberFragments = graphql`
    fragment TeamMemberFrontmatter on MarkdownRemarkFrontmatter {
        name
        about
        role
        thumnail {
            absolutePath
            childImageSharp {
              gatsbyImageData
            }
            extension
            publicURL
        }
    }

    fragment TeamMemberMarkdown on MarkdownRemark {
        fields {
            slug
          }
        frontmatter { 
           ...TeamMemberFrontmatter
        }
    }
`
