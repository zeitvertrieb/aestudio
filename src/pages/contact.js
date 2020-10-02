import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Jumbotron, ListGroup, Image } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/helper/seo'

import iconCall from '../assets/icon-call.svg'
import iconEmail from '../assets/icon-email.svg'
import iconLocation from '../assets/icon-location.svg'

const ContactPage = ({ intl }) => {
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
            <FormattedMessage id="page.contact.title" />
          </h1>
          <p className="lead"><FormattedMessage id="page.contact.lead" /></p>
        </Container>
      </Jumbotron>
      <Container>
        <ListGroup horizontal={'sm'}>
          <ListGroup.Item className="flex-fill">
            <Image width={40} src={iconEmail} />
            <h5>Email</h5>
            <a href="mailto:hello@aestudio.at" className="mr-2">hello@aestudio.at</a>
            <span className="text-muted">
              We reply in ~24 hours
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="flex-fill">
            <Image width={40} src={iconCall} />
            <h5>Call us</h5>
            <a href="tel:004369917131341" className="mr-2">+43 699 171 313 41</a>
            <span className="text-muted">
              9am - 6pm CEST
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="flex-fill">
            <Image width={40} src={iconLocation} />
            <h5>Address</h5>
            <address>
              <FormattedMessage id="page.contact.address" />
            </address>
          </ListGroup.Item>
        </ListGroup>
        {/*
        <Row>
          <Col sm="6" md="4">
            <Image width={40} src={iconEmail} />
            <h5>Email</h5>
            <span className="text-muted">
              We reply in ~24 hours
            </span>
          </Col>
          <Col sm="6" md="4" className="mt-4 mt-sm-0">
            <Image width={40} src={iconCall} />
            <h5>Call us</h5>
            <span className="text-muted">
              9am - 6pm CEST
            </span>
          </Col>
          <Col className="mt-4 mt-md-0">
            <Image width={40} src={iconLocation} />
            <h5>Address</h5>
            <address>
              <FormattedMessage id="page.contact.address" />
            </address>
          </Col>
        </Row>
        */}
      </Container>
    </Layout>
  )
}

export default injectIntl(ContactPage)
