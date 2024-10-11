/**
 * Author: Devin Davis
 * Date: 2022-02-14
 * Explainer: This is a page component. Any new files put inside the "pages" folder
 *            will make Gatsby generate a new page on the site which can be navigated
 *            to by using the name of the file so "/fileName".
 */

import React from 'react';

// Components
import Layout from "../components/app/Layout";
import Seo from "../components/app/Seo";
import ContactForm from '../components/forms/ContactForm';
import Banner from '../components/Banner';
import PartnerCarousel from '../components/sections/PartnerCarouselSection';
import ActionSection from '../components/sections/ActionSection';

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title='Contact'
      />
      <div id='contact-page'>
        <main className="topographSVG">
          <div className='container'>
            <section id='contact-form'>
              <h1>Let's Start a Conversation</h1>
              <div>
                <div className='contact-info'>
                  <h2>Ask how we can help:</h2>
                  <h3>See our platform</h3>
                  <p>Request a demo of Resson's Ag API platform to discover the advantages.</p>
                  <h3>Careers</h3>
                  <p>Search <a href="https://ca.linkedin.com/company/resson" >current open</a> positions.</p>
                  We're always interested in meeting new talent even if there might not be an immediate opportunity at this time.
                  <br />
                  <br />
                  <h2 id='form'>Points of Contact:</h2>
                  <h3>Resson Headquarters</h3>
                  <p>46 Dineen Dr, Fredericton, NB<br />E3B 9W4, Canada</p>
                  <h3>Information and Sales</h3>
                  <a href='mailto:info@resson.com'>info@resson.com</a>
                  <br />
                  <a className='phone-number' href="tel:5062067788">1(506)206-7788</a>
                </div>
                <ContactForm />
              </div>
            </section>
          </div>
        </main>
        <Banner
          linkText="View More Stats"
          text={["Being used on over 7,400,000 Acres", "Estimated over 2,000,020 tons of Waste Reduction"]}
          to={'/#landing-statistics'} />
        <section className='partner-section'>
          <PartnerCarousel />
        </section>
        <ActionSection
          title={"Better predict your Ag supply needs"}
          content={["Resson helps food manufactures better manage variability in their supply " +
            "chain by providing early insight into yield and quality."]}
          link={"/technology"}
        />
      </div>
    </Layout >
  );
};

export default ContactPage;
