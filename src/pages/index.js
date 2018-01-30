import React from 'react'
import Helmet from 'components/Helmet'
import Banner from 'components/Banner'
import Link from 'components/Link'

export default function Home({ data }) {
  return (
    <main>
      <Helmet
        title='Home Page | Gatsby Template'
        description='Home page of gatasby Template'
      />
      <Banner
        sizes={data.bannerImage.sizes}
      >
        <h2>Gatsby Boilerplate</h2>
        <p>The Kitchen Sink</p>
      </Banner>
      <div className='row'>
        <div className='small-12 olumns'>
          <h1>Home Page</h1>
          <p>Welcome to the test homepage</p>
          <p>Simple no?</p>
          <Link to='/about'>About</Link><br />
        </div>
      </div>
    </main>
  )
}

export const query = graphql`
  query HomePageQuery {
    bannerImage: imageSharp(id: { regex: "/banners/martin-jernberg-297304.jpg/" }) {
      sizes(
        quality: 80
        maxWidth: 1920
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
