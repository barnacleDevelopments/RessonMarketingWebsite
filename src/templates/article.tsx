import React from 'react';
import { graphql } from "gatsby";
import showdown from "showdown";
import moment from "moment";
import { useEffect } from "react";
import Prism from "prismjs"

// COMPONENTS
import Layout from "../components/app/Layout";
import Seo from "../components/app/Seo";
import { Article } from '../queries/articles';
import ArrowButtonLink from '../components/buttons/ArrowButtonLink';

// markup
const ArticleTemplate = ({ data }: any) => {
  const node: Article = data.markdownRemark;
  const converter = new showdown.Converter();

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Layout>
      <Seo title={`Post - ${node.frontmatter.title}`} keywords={node.frontmatter?.keywords?.split(",")} image={node.frontmatter?.thumnail} />
      <section className='article-hero'>
        <div className='container'>
          <div className='hero-content'>
            <h1>{node.frontmatter.title}</h1>
            <hr />
            <p>Author: {node.frontmatter.author}</p>
            <p>{moment(node.frontmatter.date).format("MM/DD/yyyy")}</p>
          </div>
        </div>
      </section>
      <article className='article-section'>
        <div className='container'>
          <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(node.frontmatter.content) }}></div>
          <ArrowButtonLink to={'/articles'} >Go Back</ArrowButtonLink>
        </div>
      </article>
    </Layout>
  )
}

export const articlePageQuery = graphql`
  query articlePageQuery ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...ArticleMarkdown
    }
  }
`

export default ArticleTemplate;