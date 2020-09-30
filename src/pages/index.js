import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/helper/seo'

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`innovation`, `television`, `streaming`, `marketing`]}
      />
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" className="ml-auto mr-auto">
              <h1 className="display-2">
                <FormattedMessage id="page.home.title" />
              </h1>
              <p className="lead"><FormattedMessage id="page.home.lead" /></p>
              <Image fluid src="https://images.musterhaus.net/app/uploads/richtfest-richtbaum-2.jpg" alt="Under construction" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Layout>
  )
}

export default injectIntl(IndexPage)
