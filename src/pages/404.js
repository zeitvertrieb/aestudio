import React from 'react'
import { graphql } from 'gatsby'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Jumbotron } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/helper/seo'
import Img from 'gatsby-image'

const ErrorPage = ({ data, intl }) => {
    return (
      <Layout>
        <SEO
          lang={intl.locale}
          title={`404: ${intl.formatMessage({ id: "page.notfound.title" })}`}
          description={intl.formatMessage({ id: "page.notfound.description" })}
        />
        <Jumbotron fluid>
          <Container>
            <h1 className="display-2">
              <FormattedMessage id="page.notfound.title" />
            </h1>
            <p className="lead">
              <FormattedMessage id="page.notfound.lead" />
            </p>
            <div className="py-4">
              <Link to="/" className="btn btn-primary btn-lg">
                <FormattedMessage id="action.goBack" />
              </Link>
            </div>
          </Container>
          <Img fadeIn fluid={data.file.childImageSharp.fluid} alt="Got lost" />
        </Jumbotron>
      </Layout>
    )
  }
export default injectIntl(ErrorPage)

export const query = graphql`
  query {
    file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
