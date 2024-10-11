import React from 'react';
import showdown from "showdown";

// Components
import { Article } from '../../queries/articles';
import { Link } from 'gatsby';
import ArrowButtonLink from '../buttons/ArrowButtonLink';

// markup
const ArticleItem = ({ node }: any) => {
  const { frontmatter, fields }: Article = node;
  const converter = new showdown.Converter();

  function truncateSentence(str: string) {
    let strArr = str?.split(' ');
    let firstSentence = "";

    strArr?.some((w) => {
      firstSentence = firstSentence.concat(w + " ")
      return w[w.length - 1] === "."
    });

    return firstSentence
  }

  return (
    <Link to={`${fields.slug}`}>
      <div className='article-item'>
        <div className='header'>
          <div>
            <h2>{frontmatter.title}</h2>
            <h3>Author: {frontmatter.author}</h3>
          </div>
        </div>
        <div className="item-action">
          <p dangerouslySetInnerHTML={{ __html: converter.makeHtml(truncateSentence(frontmatter.content)) }}></p>
          <ArrowButtonLink to={`${fields.slug}`}>Read More</ArrowButtonLink>
        </div>
      </div>
    </Link>
  )
}

export default ArticleItem;