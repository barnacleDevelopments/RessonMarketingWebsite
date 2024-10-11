/**
 * Author: Devin Davis
 * Date: 2022-02-12
 * Explainer: This is a page component. Any new files put inside the "pages" folder
 *            will make Gatsby generate a new page on the site which can be navigated
 *            to by using the name of the file so "/fileName".
 */

import React from 'react';

// Components
import Layout from "../components/app/Layout";
import Seo from "../components/app/Seo";

// styles
import Banner from '../components/Banner';
import PartnerCarousel from '../components/sections/PartnerCarouselSection';
import MiniActionSection from '../components/sections/MiniActionSection';

// icons 
import LeafBullet from "../images/icons/leaf_bullet_inline.svg"
import { graphql } from 'gatsby';
import TeamMemberItem from '../components/items/TeamMemberItem';

const AboutPage = ({ data }: any) => {
    const pageData = data.allMarkdownRemark.edges;
    return (
        <Layout>
            <Seo
                title='About'
                keywords={[
                    "sustainability",
                    "sponsors",
                    "about",
                    "crop rotation",
                    "cover crops",
                    "ecosystem diversity",
                    "metrics",
                    "crop variability",
                    "performance monitoring"
                ]} />
            <div id='about-page'>
                <main>
                    <section className='about-hero'>
                        <div className="container">
                            <div className='hero-content'>
                                <h1>About Us</h1>
                                <hr />
                                <p>We help crop buyers and their agronomists understand and predict what is happening in every acre of their contracted crop while reducing field visits.</p>
                            </div>
                        </div>
                    </section>
                    <Banner
                        linkText="Watch a demo and see how Resson might help your production needs"
                        to="/contact"
                    />
                    <section className='about-mission'>
                        <div className='container'>
                            <div className="empty-container"></div>
                            <div className='header'>
                                <h2>Our Mission</h2>
                                <hr />
                                <q>"Resson provides better crop insights for Food Manufacturers to better manage variability in their supply chain by providing early insight into yield and quality."</q>
                                <p>- Mike Morris, Resson CEO</p>
                            </div>
                        </div>
                    </section>
                    <section className='about-team'>
                        <h2>Meet the Team</h2>
                        <div className='container'>
                            {pageData.map(({ node }: any, index: number) => {
                                return <TeamMemberItem key={index} node={node} />
                            })}
                        </div>
                    </section>
                    <section id='about-sustainability'>
                        <div className='container'>
                            <div>
                                <div className='main-header'>
                                    <h2>Sustainability</h2>
                                    <hr />
                                    <p>Resson is committed to assisting crop
                                        manufacturing organizations on
                                        measuring and monitoring sustainable
                                        practices globally.</p>
                                </div>
                                <ul>
                                    <li>
                                        <div><LeafBullet /></div>
                                        <p>Keeping track of regenerative
                                            practices such as crop rotation,
                                            cover crops, no-till or reduced till
                                            methods, and ecosystem diversity.</p>
                                    </li>
                                    <li>
                                        <div><LeafBullet /></div>
                                        <p>Developing key metrics to assess
                                            improvements in yield and crop
                                            quality through the adoption of
                                            regenerative practices.</p>
                                    </li>
                                    <li>
                                        <div><LeafBullet /></div>
                                        <p>Providing insights on crop
                                            variability throughout the season so
                                            companies can act fast and reduce
                                            yield loss due to biotic and abiotic
                                            stresses.</p>
                                    </li>
                                    <li>
                                        <div><LeafBullet /></div>
                                        <p>Facilitating decision making and
                                            performance monitoring to ensure
                                            the employment of the best
                                            agronomic practices on a field
                                            basis.</p>
                                    </li>
                                    <li>
                                        <div><LeafBullet /></div>
                                        <p>Supporting high-impact decisions
                                            for businesses regarding crop sustainability.</p>
                                    </li>
                                </ul>
                            </div>
                            <div></div>
                        </div>
                    </section>
                </main>
                <PartnerCarousel />
                <MiniActionSection
                    title="Learn how Resson can help your production needs"
                    link="/technology#technology-keyfeatures" />
            </div>
        </Layout >
    );
};

/** 
 *  @description this is a page query. page queries are 
 *               used to retrieve page content at build 
 *               time.
*/
export const aboutPageQuery = graphql`
  query aboutPageQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//team//"}}) {
      edges {
        node {
          ...TeamMemberMarkdown
        }
      }
    }
  }
`

export default AboutPage;
