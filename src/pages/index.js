import React from 'react'
import Helmet from 'components/Helmet'
import Banner from 'components/Banner'
import Content, { Col } from 'components/Content'
import BlogPosts from 'components/Prismic/BlogPosts'

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
          <section>
            <BlogPosts />
          </section>
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
