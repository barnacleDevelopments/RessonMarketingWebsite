import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Carousel from "react-multi-carousel";
import PartnerItem from "../items/PartnerItem";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1500 },
    items: 5,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 1500, min: 1025 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1025, min: 769 },
    items: 1,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40
  }
};

const PartnerCarousel = () => {

  /** 
   *  @description this is a statis query. static queries are 
   *               used to retrieve page content at build 
   *               time. Static queries must be used on components 
   *               and can also be used on pages.
  */
  const pageData = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//partners//"}}) {
            edges {
                node {
                ...PartnerMarkdown
                }
            }
        }
    }
    `).allMarkdownRemark.edges

  return (
    <section className='partners-carousel'>
      <div className="container">
        <h2>Trusted by our Sponsors</h2>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          arrows={false}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container"
          dotListClass="dot-list"
          itemClass="partner-item"
          className='carousel'>
          {pageData.map(({ node }: any, index: number) =>
            <PartnerItem key={index} node={node} />
          )}
        </Carousel>
      </div>
    </section>
  );
}

export default PartnerCarousel;