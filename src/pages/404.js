

import React from 'react';

// Components
import Layout from "../components/app/Layout";
import Seo from "../components/app/Seo";
import { Link } from 'gatsby';

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Seo
        title="404"
      />

      <div className='fourOhfour-page'>
        <main className="topographSVG">
          <div className="container">
            <div className='child-div1'>

            </div>
            <div className='child-div2'>
              <h1>404 Not Found!!!</h1>
              <br />
              <Link to='/' className="btn-primary">Go back</Link>
            </div>
          </div>
        </main>
      </div>
    </Layout >
  )
}

export default NotFoundPage
