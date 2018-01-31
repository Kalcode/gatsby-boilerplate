import React from 'react'
import Helmet from 'components/Helmet'
import Banner from 'components/Banner'
import Content, { Col } from 'components/Content'
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
      <Content>
        <Col>
          <h1>Home Page</h1>
          <p>Welcome to the test homepage</p>
          <p>
            This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong>. You can also use em to <em>italicize your words</em>.
          </p>
          <code>
            This is code block
          </code>
          <p>Simple no?</p>
          <blockquote>
            This is a blockquote
          </blockquote>
          <cite>
            This is a citation
          </cite>
          <kbd>
            What is a keystoke?
          </kbd>
          <br />
          <abbr title='Abbreviations'>
            This is abbr
          </abbr>
          <br />
          <Link to='/about'>About Page</Link><br />
        </Col>
      </Content>
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
