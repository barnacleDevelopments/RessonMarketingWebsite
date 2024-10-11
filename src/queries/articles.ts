/**
 * Author: Devin Davis
 * Date: 2022-03-17 9:02 PM 
 * Explainer: This is a query fragment definition for use on components and pages.
 */

import { graphql } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

export interface ArticleFrontmatter {
    thumnail: FileNode;
    title: string;
    content: string;
    keywords: string;
    author: string,
    date: Date;
}

export interface Article {
    frontmatter: ArticleFrontmatter;
    fields: {
        slug: string;
    }
}

export const articleFragments = graphql`
    fragment ArticleFrontmatter on MarkdownRemarkFrontmatter {
        title
        content
        date
        keywords
        author
        thumnail {
            absolutePath
            childImageSharp {
              gatsbyImageData
            }
            extension
            publicURL
        }
    }

    fragment ArticleMarkdown on MarkdownRemark {
        fields {
            slug
          }
        frontmatter { 
           ...ArticleFrontmatter
        }
    }
`
