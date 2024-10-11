/**
 * Author: Devin Davis
 * Date: 2022-02-14 4:54 PM 
 */

import React from 'react';
import { News } from '../../queries/news';

const NewsItem = ({ node }: any) => {
  const { frontmatter }: News = node

  return (
    <div className='news-item'>
      <h3>{frontmatter.title}</h3>
      <p>{frontmatter.content}</p>
      <a href={frontmatter.link}>Read More</a>
    </div>
  );
}

export default NewsItem;
