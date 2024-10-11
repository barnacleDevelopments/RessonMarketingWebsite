/**
 * Author: Devin Davis
 * Date: 2022-02-02
 * Explainer: This is a page component. Any new files put inside the "pages" folder
 *            will make Gatsby generate a new page on the site which can be navigated
 *            to by using the name of the file so "/fileName".
*/

import React from 'react';

// SVGs
import AlertIcon from "../images/icons/alert_icon_inline.svg";
import NitrogenIcon from "../images/icons/nitrogen_icon_inline.svg";
import CanopyIcon from "../images/icons/canopy_icon_inline.svg";
import SummaryIcon from "../images/icons/summary_icon_inline.svg";
import WaterIcon from "../images/icons/water_icon_inline.svg"

// Components
import Layout from "../components/app/Layout";
import Seo from "../components/app/Seo";

// styles
import Banner from '../components/Banner';
import PartnerCarousel from '../components/sections/PartnerCarouselSection';
import ActionSection from '../components/sections/ActionSection';
import NewsCarousel from '../components/sections/NewsCarouselSection';

const TechnologyPage = () => {
  return (
    <Layout>
      <Seo
        title='Technology'
        keywords={[
          "canopy",
          "nitrogen",
          "water",
          "alerts",
          "summary",
          "ag supply needs",
          "satellite imagery",
          "coverage",
          "regional specificity",
          "yield impact",
          "zero knowledge estimates",
          "expected growth rates"
        ]}
      />
      <div id='technology-page'>
        <section className='technology-hero'>
          <div className='hero-content'>
            <h1>Resson API Platform</h1>
            <p>Helping to better manage variability in supply
              chain by providing early insight into yield and quality.</p>
          </div>
        </section>
        <Banner
          linkText="View More Stats"
          text={[
            "Being used on over 7,400,000 Acres",
            "Estimated over 2,000,020 tons of Waste Reduction"
          ]}
          to="/#landing-statistics"
        />
        <div className='container'>
          <section id='technology-keyfeatures'>
            <div className='main-heading'>
              <div>
                <h2>Key Features</h2>
                <hr></hr>
              </div>
            </div>
            <div className='feature-list'>
              <div className='feature-item'>
                <CanopyIcon />
                <div>
                  <h3>Canopy</h3>
                  <p>Using satellite imagery, we produce canopy coverage estimates
                    with a high degree of accuracy and daily interpolation between
                    capture events to provide coverage on cloudy days. Our canopy
                    estimates are produced using a crop specific model that has
                    been trained using extensive amounts of ground truth data and
                    multiple layers of data quality and estimate validation to ensure
                    accurate results.</p>
                  <p>
                    Several layers of the validation process as well as the interpolation
                    procedure use local weather conditions in growth models with crop, variety,
                    and regional specificity to produce trustworthy results even in the event
                    of extended periods of cloud coverage. Along with interpolation both back
                    estimation for emergence and growth projections are available.</p>
                </div>
              </div>
              <div className='feature-item'>
                <NitrogenIcon />
                <div>
                  <h3>Nitrogen</h3>
                  <p>At Resson Aerospace we have developed a nitrogen model with supply
                    chain planning in mind. Where most remote nitrogen estimation models
                    available today estimate relative difference across a field and
                    require previous fertilizer inputs to make recommendations,
                    Resson’s models provide zero knowledge estimates of petiole nitrate
                    concentration. </p>
                  <p>Measure of actual nitrogen concentration and determination
                    of adequacy and deficiency of nitrogen levels within the plant allows
                    for insight into yield impact without the need for information from the grower.</p>
                </div>
              </div>
              <div className='feature-item'>
                <WaterIcon />
                <div>
                  <h3>Water</h3>
                  <p>Remote sensing of water deficiency is a complex task with multiple
                    solution pathways including soil moisture, plant water content,
                    and water balance models. At Resson Aerospace we have chosen
                    to develop a water deficiency model based on the crop’s physiological
                    response to available water. By targeting the physiological response
                    of the crop to water deficit we are effectively measuring water
                    deficit specifically within the root zone where it matters most.</p>
                  <p>Additionally, by developing a model  responsive to the crop
                    physiological response we are able to provide the best insight
                    into crop health and yield impact. Along with many other data
                    sources our model uses a crop canopy structure as an input,
                    which allows the model to be tuned to novel varieties and
                    new crops without the need for water deficit trials to be
                    required.</p>
                </div>
              </div>
              <div className='feature-item'>
                <AlertIcon />
                <div>
                  <h3>Alerts</h3>
                  <p>Currently Resson Aerospace offers alerts for canopy coverage
                    and nitrogen. Canopy alerts are triggered by deviation from
                    historic norms, expected growth rates, and when full canopy
                    is reached. Nitrogen concentration alerts are triggered when
                    levels drop below predetermined sufficiency levels.
                    Customization and addition of alerts are available.</p>
                </div>
              </div>
              <div className='feature-item'>
                <SummaryIcon />
                <div>
                  <h3>Summary</h3>
                  <p>Our processing pipeline is capable of providing global coverage
                    of all metrics while simultaneously tracking thousands of fields
                    and millions of acres. Development of each metric was done with
                    crop and where needed region and variety specificity, providing
                    a higher level of accuracy than could otherwise be achieved.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ActionSection
          title="Better predict your Ag supply needs"
          content={[
            "The Food Manufacturing industry recognizes their critical role in feeding " +
            "the world cost effectively and sustainably.",
            "We have a multi-technology approach to providing the most useful insights," +
            "and we develop those in in partnership with innovative leaders in our target crops."
          ]}
          link={"/technology"} />
        <PartnerCarousel />
        <NewsCarousel />
      </div>
    </Layout >
  );
};

export default TechnologyPage;
