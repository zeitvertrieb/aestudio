import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/helper/seo'
import ErrorImg from '../assets/404.jpg'

const ErrorPage = ({ intl }) => {
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
            <div className="pt-4">
              <Link to="/" className="btn btn-primary btn-lg">
                <FormattedMessage id="action.goBack" />
              </Link>
            </div>
          </Container>
          <Image fluid src={ErrorImg} alt="Error 404" />
        </Jumbotron>
      </Layout>
    )
  }
export default injectIntl(ErrorPage)
