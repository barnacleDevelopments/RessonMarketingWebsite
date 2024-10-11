import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useWindowSize from "../../hooks/useWindowSize";
import NewsItem from "../items/NewsItem";

const NewsCarousel = () => {

  const { width } = useWindowSize();

  /** 
   *  @description this is a statis query. static queries are 
   *               used to retrieve page content at build 
   *               time. Static queries must be used on components 
   *               and can also be used on pages.
  */

  const pageData = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//news//"}}) {
            edges {
                node {
                ...NewsMarkdown
                }
            }
        }
    }
    `).allMarkdownRemark.edges

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: pageData.length < 2 ? 1 : pageData.length < 3 ? 2 : pageData.length < 4 ? 3 : pageData.length < 5 ? 4 : 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: pageData.length < 2 ? 1 : pageData.length < 3 ? 2 : pageData.length < 4 ? 3 : 4,
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

  return (
    <section className='news-carousel'>
      <div className="container">
        <h2>News</h2>
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          autoPlay={width < 481 ? true : false}
          customTransition="all .5"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="dot-list"
          className='carousel'>
          {pageData.map(({ node }: any, index: number) =>
            <NewsItem key={index} node={node} />
          )}
        </Carousel>
      </div>
    </section>
  );
}

export default NewsCarousel;