/**
 * Author: Devin Davis
 * Date: 2022-02-11
 * Explainer: This is a page component. Any new files put inside the "pages" folder
 *            will make Gatsby generate a new page on the site which can be navigated
 *            to by using the name of the file so "/fileName".
 */

import React from 'react';
import { graphql } from "gatsby";

// Components
import ArticleItem from "../components/items/ArticleItem";
import Layout from "../components/app/Layout";
import Seo from "../components/app/Seo";
import PartnerCarousel from '../components/sections/PartnerCarouselSection';
import Banner from '../components/Banner';
import MiniActionSection from '../components/sections/MiniActionSection';

const ArticlesPage = ({ data }: any) => {
  const pageData = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo
        title="Articles"
        keywords={[
          "articles",
          "blog",
          "files"
        ]}
      />
      <main>
        <section className='article-hero'>
          <div className='container'>
            <div className='hero-content'>
              <h1>Resson Files</h1>
              <hr />
              <p>A collecton of new articles and blog posts related to our mission focus. </p>
            </div>
          </div>

        </section>
        <section className='article-list'>
          <div className='container'>
            {pageData.map(({ node }: any, index: number) => {
              return <ArticleItem key={index} node={node} />
            })}
          </div>
        </section>
      </main>
      <Banner
        linkText={'Get in touch to see how Resson might help your production needs.'}
        to={'/contact'} />
      <PartnerCarousel />
      <MiniActionSection
        title={"See how Resson can help with your production needs"}
        link={"/technology#technology-keyfeatures"} />
    </Layout >
  )
}

export default ArticlesPage;

/** 
 *  @description this is a page query. page queries are 
 *               used to retrieve page content at build 
 *               time.
*/
export const articlesPageQuery = graphql`
  query articlesPageQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//articles//"}}) {
      edges {
        node {
          ...ArticleMarkdown
        }
      }
    }
  }
`