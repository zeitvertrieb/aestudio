import React from 'react'
import { graphql } from 'gatsby'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Jumbotron } from 'react-bootstrap'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/helper/seo'

const IndexPage = ({ intl, data }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`innovation`, `television`, `streaming`, `marketing`]}
      />
      <Jumbotron fluid>
        <Container>
          <h1 className="display-2">
            <FormattedMessage id="page.home.title" />
          </h1>
          <p className="lead"><FormattedMessage id="page.home.lead" /></p>
        </Container>
        <Img fadeIn fluid={data.file.childImageSharp.fluid} alt="home" />
      </Jumbotron>
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const query = graphql`
  query {
    file(relativePath: { eq: "hero-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
