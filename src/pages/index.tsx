/**
 * Author: Devin Davis
 * Date: 2022-02-09
 * Explainer: This is a page component. Any new files put inside the "pages" folder
 *            will make Gatsby generate a new page on the site which can be navigated
 *            to by using the name of the file so "/fileName".
*/


import React from 'react';

// SVGs
import InsightsIcon from "../images/icons/insights_icon_inline.svg";
import PublicIcon from "../images/icons/public_icon_inline.svg";
import WeightIcon from "../images/icons/weight_icon_inline.svg";
import AgricultureIcon from "../images/icons/agriculture_icon_inline.svg";
import CoinIcon from "../images/icons/coin_icon_inline.svg";
import OperationIcon from "../images/icons/operation_icon_inline.svg"
import ReduceWasteIcon from "../images/icons/reduce_waste_icon_inline.svg"

// Components
import Layout from "../components/app/Layout";
import Seo from "../components/app/Seo";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// styles
import Banner from '../components/Banner';
import PartnerCarousel from '../components/sections/PartnerCarouselSection';
import ActionSection from '../components/sections/ActionSection';
import ArrowButtonLink from '../components/buttons/ArrowButtonLink';

const IndexPage = () => {

  return (
    <Layout>
      <Seo
        title='Landing'
      />
      <div id='landing-page'>
        <main>
          <section className='landing-hero-section'>
            <div className='hero-content'>
              <h1>Innovative Crop Insights for Food Manufacturers</h1>
              <p>Helping to better manage variability in supply chain by providing early insight into yield and quality.</p>
              <ArrowButtonLink to="/contact">Grow Now</ArrowButtonLink>
            </div>
          </section>
          <Banner
            linkText="Watch a demo and see how Resson might help your production needs"
            to="/contact"
          />
          <div className='container'>
            <section className='landing-technology-section'>
              <h2>Technology Benefits</h2>
              <div className='technology-list'>
                <div className='technology-item'>
                  <CoinIcon />
                  <div>
                    <h3>Lower Cost</h3>
                    <p>Variation in crop yield and quality leads to increased cost
                      of operations for food manufacturers. Today's approach to
                      monitor crops is labour intensive, costly and untimely.</p>
                    <p>Early insight into such variation from satellite remote
                      sensing offers the opportunity to reduce that cost while
                      providing a more complete picture of the entire crop.</p>
                  </div>
                </div>
                <div className='technology-item'>
                  <ReduceWasteIcon />
                  <div>
                    <h3>Reduce Waste</h3>
                    <p>Field variability maps can provide insights on crop
                      development and areas that require attention.</p>
                    <p>This can lead to a reduced amount of fertilizer,
                      herbicide, and pesticide application by targeting
                      areas that are potentially being affected by
                      envriomental stresses.</p>
                  </div>
                </div>
                <div className='technology-item'>
                  <OperationIcon />
                  <div>
                    <h3>Improved Operation</h3>
                    <p>Variation in crop yield and quality leads to increased cost
                      of operations for food manufacturers. Today's approach to
                      monitor crops is labour intensive, costly and untimely.</p>
                    <p>Early insight into such variation from satellite remote
                      sensing offers the opportunity to reduce that cost while
                      providing a more complete picture of the entire crop.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section id='landing-statistics'>
            <div className='header'>
              <h2>Global Experience Across Specific Crops</h2>
              <hr></hr>
              <p>Providing valuable crop metrics for potato, grape,
                and other commercial crops.</p>
            </div>
            <div className='container'>
              <ul className='statistic-list'>
                <li>
                  <div>
                    <div>
                      <h3>Monitoring over</h3>
                      <strong>300, 000+</strong>
                      <p>Acres across 23 countries <br />
                        on 4 continents</p>
                    </div>
                    <PublicIcon />
                  </div>
                </li>
                <li>
                  <div>
                    <div>
                      <h3>Saved over</h3>
                      <strong>47,200,000+</strong>
                      <p>Tons of product from <br />
                        going to waste</p>
                    </div>
                    <WeightIcon />
                  </div>
                </li>
                <li>
                  <div>
                    <div>
                      <h3>Used on over</h3>
                      <strong>1,500,000+</strong>
                      <p>Seperate fields</p>
                    </div>
                    <AgricultureIcon />
                  </div>
                </li>
                <li>
                  <div>
                    <div>
                      <h3>Collected sover</h3>
                      <strong>6,540,000+</strong>
                      <p>Valuable crop metrics</p>
                    </div>
                    <InsightsIcon />
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </main>
        <PartnerCarousel />
        <ActionSection
          title="Better predict your Ag supply needs"
          content={[
            "The Food Manufacturing industry recognizes their critical role in feeding " +
            "the world cost effectively and sustainably.",
            "We have a multi-technology approach to providing the most useful insights," +
            "and we develop those in in partnership with innovative leaders in our target crops."
          ]}
          link={"/technology"} />
      </div>
    </Layout >
  );
};

export default IndexPage;
