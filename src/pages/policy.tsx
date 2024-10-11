import { graphql } from 'gatsby';
import React from 'react';
import showdown from "showdown";

// COMPONENTS
import Layout from "../components/app/Layout";
import Seo from "../components/app/Seo";
import ArrowButtonLink from '../components/buttons/ArrowButtonLink';

// markup
const PolicyPage = ({ data }: any) => {
    const frontmatter: { title: string, content: string } = data.markdownRemark.frontmatter;
    const converter = new showdown.Converter();
    return (
        <Layout>
            <div id='policy-page'>
                <h1>{frontmatter.title}</h1>
                <Seo title='Policy' />
                <section className='policy-section'>
                    <div className='container'>
                        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontmatter.content) }}></div>
                        <ArrowButtonLink to={'/contact'} >Go Back to Contact Form</ArrowButtonLink>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

/** 
 *  @description this is a page query. page queries are 
 *               used to retrieve page content at build 
 *               time.
*/
export const policyPageQuery = graphql`
  query policyPageQuery {
    markdownRemark(fileAbsolutePath: {regex: "/pages/policy.md/"}) {
        frontmatter {
          title
          content
        }
      }
  }
`

export default PolicyPage;