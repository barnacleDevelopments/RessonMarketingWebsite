/**
 * Author: Devin Davis
 * Date: 2022-03-17 9:02 PM 
 * Explainer: This is a query fragment definition for use on components and pages.
 */

import { graphql } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

export interface NewsFrontmatter {
    thumnail: FileNode;
    title: string;
    content: string;
    link: string
}

export interface News {
    frontmatter: NewsFrontmatter,
    fields: {
        slug: string
    }
}

export const partnerFragments = graphql`
    fragment NewsFrontmatter on MarkdownRemarkFrontmatter {
        title
        content
        link
        date
        thumnail {
            childImageSharp {
              gatsbyImageData
            }
            extension
            publicURL
        }
        
    }

    fragment NewsMarkdown on MarkdownRemark {
        frontmatter {
          ...NewsFrontmatter
        }
        fields {
            slug
        }
    }
`